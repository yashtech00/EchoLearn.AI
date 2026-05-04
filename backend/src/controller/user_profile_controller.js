import prisma from "../lib/prisma.js";
import { user_profile_validator } from "../validator/user_profile_validator.js";

export const createUserProfile = async (req, res) => {
  try {
    const { userId } = req.user;

    // check user exists
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // check already exists (important)
    const existingProfile = await prisma.userProfile.findUnique({
      where: { userId },
    });

    if (existingProfile) {
      return res.status(400).json({ message: "Profile already exists" });
    }

    // validate
    const parsed = user_profile_validator.safeParse(req.body);
    if (!parsed.success) {
      return res
        .status(400)
        .json({ errors: parsed.error.flatten().fieldErrors });
    }

    const data = parsed.data;

    // create profile and update user isNewUser flag
    const [userProfile] = await prisma.$transaction([
      prisma.userProfile.create({
        data: {
          ...data,
          userId,
          onboardingCompletedAt: new Date(),
          initialAssessmentDone: false, // force backend control
        },
      }),
      prisma.user.update({
        where: { id: userId },
        data: { isNewUser: false },
      }),
    ]);

    return res.status(201).json({
      message: "User profile created successfully",
      userProfile,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getUserProfile = async (req, res) => {
  try {
    const { userId } = req.user;

    const userProfile = await prisma.userProfile.findUnique({
      where: { userId },
    });

    if (!userProfile) {
      return res.status(404).json({
        message: "User profile not found",
        isNewUser: true, // 🔥 frontend ke liye useful
      });
    }

    return res.status(200).json({
      message: "User profile fetched successfully",
      userProfile,
      isNewUser: false,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const updateUserProfile = async (req, res) => {
  try {
    const { userId } = req.user;

    const parsed = user_profile_validator.safeParse(req.body);
    if (!parsed.success) {
      return res
        .status(400)
        .json({ errors: parsed.error.flatten().fieldErrors });
    }

    const data = parsed.data;

    const userProfile = await prisma.userProfile.update({
      where: { userId },
      data: {
        ...data,
        updatedAt: new Date(),
      },
    });

    return res.status(200).json({
      message: "User profile updated successfully",
      userProfile,
    });
  } catch (error) {
    console.error(error);

    // handle not found case
    if (error.code === "P2025") {
      return res.status(404).json({ message: "Profile not found" });
    }

    return res.status(500).json({ message: "Internal server error" });
  }
};