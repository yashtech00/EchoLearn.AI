"use client";

import React, { useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function QueryProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: Infinity,
            gcTime: 1000 * 60 * 60 * 24, // Keep unused cache for 24 hours
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  // Custom LocalStorage Persistence for React Query Cache (SSR safe)
  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const cached = localStorage.getItem("REACT_QUERY_PERSISTED_STATE");
      if (cached) {
        const parsed = JSON.parse(cached);
        parsed.queries?.forEach((q: any) => {
          queryClient.setQueryData(q.queryKey, q.state.data);
        });
      }
    } catch (e) {
      console.error("Failed to restore query cache from localStorage:", e);
    }

    const unsubscribe = queryClient.getQueryCache().subscribe((event) => {
      // Persist on any state updates
      if (event.type === "updated") {
        try {
          const queries = queryClient.getQueryCache().getAll().map((q) => ({
            queryKey: q.queryKey,
            state: {
              data: q.state.data,
            },
          }));
          localStorage.setItem(
            "REACT_QUERY_PERSISTED_STATE",
            JSON.stringify({ queries })
          );
        } catch (e) {
          console.error("Failed to persist query cache to localStorage:", e);
        }
      }
    });

    return () => unsubscribe();
  }, [queryClient]);

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
