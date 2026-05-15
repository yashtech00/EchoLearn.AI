
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model RefreshToken
 * 
 */
export type RefreshToken = $Result.DefaultSelection<Prisma.$RefreshTokenPayload>
/**
 * Model UserProfile
 * 
 */
export type UserProfile = $Result.DefaultSelection<Prisma.$UserProfilePayload>
/**
 * Model WritingPrompt
 * 
 */
export type WritingPrompt = $Result.DefaultSelection<Prisma.$WritingPromptPayload>
/**
 * Model Submission
 * 
 */
export type Submission = $Result.DefaultSelection<Prisma.$SubmissionPayload>
/**
 * Model AnalysisRun
 * 
 */
export type AnalysisRun = $Result.DefaultSelection<Prisma.$AnalysisRunPayload>
/**
 * Model Mistake
 * 
 */
export type Mistake = $Result.DefaultSelection<Prisma.$MistakePayload>
/**
 * Model UserStats
 * 
 */
export type UserStats = $Result.DefaultSelection<Prisma.$UserStatsPayload>
/**
 * Model XpEvent
 * 
 */
export type XpEvent = $Result.DefaultSelection<Prisma.$XpEventPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PrimaryRole: {
  STUDENT: 'STUDENT',
  WORKING_PROFESSIONAL: 'WORKING_PROFESSIONAL',
  HOBBYIST: 'HOBBYIST',
  JOB_SEEKER: 'JOB_SEEKER'
};

export type PrimaryRole = (typeof PrimaryRole)[keyof typeof PrimaryRole]


export const PrimaryGoal: {
  FLUENCY: 'FLUENCY',
  PROFICIENCY: 'PROFICIENCY',
  EXAM_PREP: 'EXAM_PREP',
  BUSINESS_ENGLISH: 'BUSINESS_ENGLISH',
  TRAVEL_AND_CULTURE_ENGLISH: 'TRAVEL_AND_CULTURE_ENGLISH',
  GRAMMAR_MASTERY: 'GRAMMAR_MASTERY'
};

export type PrimaryGoal = (typeof PrimaryGoal)[keyof typeof PrimaryGoal]


export const SubmissionGenre: {
  GENERAL: 'GENERAL',
  WORK_EMAIL: 'WORK_EMAIL',
  SHORT_ESSAY: 'SHORT_ESSAY',
  DIARY: 'DIARY',
  ACADEMIC_PARAGRAPH: 'ACADEMIC_PARAGRAPH'
};

export type SubmissionGenre = (typeof SubmissionGenre)[keyof typeof SubmissionGenre]


export const AnalysisStatus: {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED'
};

export type AnalysisStatus = (typeof AnalysisStatus)[keyof typeof AnalysisStatus]


export const SubmissionStatus: {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED'
};

export type SubmissionStatus = (typeof SubmissionStatus)[keyof typeof SubmissionStatus]


export const MistakeSeverity: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH'
};

export type MistakeSeverity = (typeof MistakeSeverity)[keyof typeof MistakeSeverity]


export const PillarCode: {
  VERB_SYSTEMS: 'VERB_SYSTEMS',
  AGREEMENT_GRAMMAR: 'AGREEMENT_GRAMMAR',
  DETERMINERS_QUANTITY: 'DETERMINERS_QUANTITY',
  PREPOSITIONS_PHRASAL: 'PREPOSITIONS_PHRASAL',
  LEXICAL_COLLOCATION: 'LEXICAL_COLLOCATION',
  CLARITY_AMBIGUITY: 'CLARITY_AMBIGUITY',
  COHESION_FLOW: 'COHESION_FLOW',
  INFO_STRUCTURE: 'INFO_STRUCTURE',
  REGISTER_TONE: 'REGISTER_TONE',
  PUNCTUATION_MECHANICS: 'PUNCTUATION_MECHANICS',
  SPELLING_ORTHOGRAPHY: 'SPELLING_ORTHOGRAPHY',
  GENRE_PRAGMATICS: 'GENRE_PRAGMATICS'
};

export type PillarCode = (typeof PillarCode)[keyof typeof PillarCode]

}

export type PrimaryRole = $Enums.PrimaryRole

export const PrimaryRole: typeof $Enums.PrimaryRole

export type PrimaryGoal = $Enums.PrimaryGoal

export const PrimaryGoal: typeof $Enums.PrimaryGoal

export type SubmissionGenre = $Enums.SubmissionGenre

export const SubmissionGenre: typeof $Enums.SubmissionGenre

export type AnalysisStatus = $Enums.AnalysisStatus

export const AnalysisStatus: typeof $Enums.AnalysisStatus

export type SubmissionStatus = $Enums.SubmissionStatus

export const SubmissionStatus: typeof $Enums.SubmissionStatus

export type MistakeSeverity = $Enums.MistakeSeverity

export const MistakeSeverity: typeof $Enums.MistakeSeverity

export type PillarCode = $Enums.PillarCode

export const PillarCode: typeof $Enums.PillarCode

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.refreshToken`: Exposes CRUD operations for the **RefreshToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RefreshTokens
    * const refreshTokens = await prisma.refreshToken.findMany()
    * ```
    */
  get refreshToken(): Prisma.RefreshTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userProfile`: Exposes CRUD operations for the **UserProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserProfiles
    * const userProfiles = await prisma.userProfile.findMany()
    * ```
    */
  get userProfile(): Prisma.UserProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.writingPrompt`: Exposes CRUD operations for the **WritingPrompt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WritingPrompts
    * const writingPrompts = await prisma.writingPrompt.findMany()
    * ```
    */
  get writingPrompt(): Prisma.WritingPromptDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.submission`: Exposes CRUD operations for the **Submission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Submissions
    * const submissions = await prisma.submission.findMany()
    * ```
    */
  get submission(): Prisma.SubmissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.analysisRun`: Exposes CRUD operations for the **AnalysisRun** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AnalysisRuns
    * const analysisRuns = await prisma.analysisRun.findMany()
    * ```
    */
  get analysisRun(): Prisma.AnalysisRunDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mistake`: Exposes CRUD operations for the **Mistake** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mistakes
    * const mistakes = await prisma.mistake.findMany()
    * ```
    */
  get mistake(): Prisma.MistakeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userStats`: Exposes CRUD operations for the **UserStats** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserStats
    * const userStats = await prisma.userStats.findMany()
    * ```
    */
  get userStats(): Prisma.UserStatsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.xpEvent`: Exposes CRUD operations for the **XpEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more XpEvents
    * const xpEvents = await prisma.xpEvent.findMany()
    * ```
    */
  get xpEvent(): Prisma.XpEventDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    RefreshToken: 'RefreshToken',
    UserProfile: 'UserProfile',
    WritingPrompt: 'WritingPrompt',
    Submission: 'Submission',
    AnalysisRun: 'AnalysisRun',
    Mistake: 'Mistake',
    UserStats: 'UserStats',
    XpEvent: 'XpEvent'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "refreshToken" | "userProfile" | "writingPrompt" | "submission" | "analysisRun" | "mistake" | "userStats" | "xpEvent"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      RefreshToken: {
        payload: Prisma.$RefreshTokenPayload<ExtArgs>
        fields: Prisma.RefreshTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RefreshTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RefreshTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findFirst: {
            args: Prisma.RefreshTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RefreshTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findMany: {
            args: Prisma.RefreshTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          create: {
            args: Prisma.RefreshTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          createMany: {
            args: Prisma.RefreshTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RefreshTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          delete: {
            args: Prisma.RefreshTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          update: {
            args: Prisma.RefreshTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          deleteMany: {
            args: Prisma.RefreshTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RefreshTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RefreshTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          upsert: {
            args: Prisma.RefreshTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          aggregate: {
            args: Prisma.RefreshTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefreshToken>
          }
          groupBy: {
            args: Prisma.RefreshTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.RefreshTokenCountArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenCountAggregateOutputType> | number
          }
        }
      }
      UserProfile: {
        payload: Prisma.$UserProfilePayload<ExtArgs>
        fields: Prisma.UserProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findFirst: {
            args: Prisma.UserProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findMany: {
            args: Prisma.UserProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          create: {
            args: Prisma.UserProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          createMany: {
            args: Prisma.UserProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          delete: {
            args: Prisma.UserProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          update: {
            args: Prisma.UserProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          deleteMany: {
            args: Prisma.UserProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          upsert: {
            args: Prisma.UserProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          aggregate: {
            args: Prisma.UserProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserProfile>
          }
          groupBy: {
            args: Prisma.UserProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserProfileCountArgs<ExtArgs>
            result: $Utils.Optional<UserProfileCountAggregateOutputType> | number
          }
        }
      }
      WritingPrompt: {
        payload: Prisma.$WritingPromptPayload<ExtArgs>
        fields: Prisma.WritingPromptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WritingPromptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WritingPromptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WritingPromptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WritingPromptPayload>
          }
          findFirst: {
            args: Prisma.WritingPromptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WritingPromptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WritingPromptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WritingPromptPayload>
          }
          findMany: {
            args: Prisma.WritingPromptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WritingPromptPayload>[]
          }
          create: {
            args: Prisma.WritingPromptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WritingPromptPayload>
          }
          createMany: {
            args: Prisma.WritingPromptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WritingPromptCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WritingPromptPayload>[]
          }
          delete: {
            args: Prisma.WritingPromptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WritingPromptPayload>
          }
          update: {
            args: Prisma.WritingPromptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WritingPromptPayload>
          }
          deleteMany: {
            args: Prisma.WritingPromptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WritingPromptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WritingPromptUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WritingPromptPayload>[]
          }
          upsert: {
            args: Prisma.WritingPromptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WritingPromptPayload>
          }
          aggregate: {
            args: Prisma.WritingPromptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWritingPrompt>
          }
          groupBy: {
            args: Prisma.WritingPromptGroupByArgs<ExtArgs>
            result: $Utils.Optional<WritingPromptGroupByOutputType>[]
          }
          count: {
            args: Prisma.WritingPromptCountArgs<ExtArgs>
            result: $Utils.Optional<WritingPromptCountAggregateOutputType> | number
          }
        }
      }
      Submission: {
        payload: Prisma.$SubmissionPayload<ExtArgs>
        fields: Prisma.SubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          findFirst: {
            args: Prisma.SubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          findMany: {
            args: Prisma.SubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          create: {
            args: Prisma.SubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          createMany: {
            args: Prisma.SubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubmissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          delete: {
            args: Prisma.SubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          update: {
            args: Prisma.SubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          deleteMany: {
            args: Prisma.SubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubmissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          upsert: {
            args: Prisma.SubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          aggregate: {
            args: Prisma.SubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubmission>
          }
          groupBy: {
            args: Prisma.SubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<SubmissionCountAggregateOutputType> | number
          }
        }
      }
      AnalysisRun: {
        payload: Prisma.$AnalysisRunPayload<ExtArgs>
        fields: Prisma.AnalysisRunFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnalysisRunFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisRunPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnalysisRunFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisRunPayload>
          }
          findFirst: {
            args: Prisma.AnalysisRunFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisRunPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnalysisRunFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisRunPayload>
          }
          findMany: {
            args: Prisma.AnalysisRunFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisRunPayload>[]
          }
          create: {
            args: Prisma.AnalysisRunCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisRunPayload>
          }
          createMany: {
            args: Prisma.AnalysisRunCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnalysisRunCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisRunPayload>[]
          }
          delete: {
            args: Prisma.AnalysisRunDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisRunPayload>
          }
          update: {
            args: Prisma.AnalysisRunUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisRunPayload>
          }
          deleteMany: {
            args: Prisma.AnalysisRunDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnalysisRunUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnalysisRunUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisRunPayload>[]
          }
          upsert: {
            args: Prisma.AnalysisRunUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisRunPayload>
          }
          aggregate: {
            args: Prisma.AnalysisRunAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnalysisRun>
          }
          groupBy: {
            args: Prisma.AnalysisRunGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnalysisRunGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnalysisRunCountArgs<ExtArgs>
            result: $Utils.Optional<AnalysisRunCountAggregateOutputType> | number
          }
        }
      }
      Mistake: {
        payload: Prisma.$MistakePayload<ExtArgs>
        fields: Prisma.MistakeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MistakeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MistakePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MistakeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MistakePayload>
          }
          findFirst: {
            args: Prisma.MistakeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MistakePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MistakeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MistakePayload>
          }
          findMany: {
            args: Prisma.MistakeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MistakePayload>[]
          }
          create: {
            args: Prisma.MistakeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MistakePayload>
          }
          createMany: {
            args: Prisma.MistakeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MistakeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MistakePayload>[]
          }
          delete: {
            args: Prisma.MistakeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MistakePayload>
          }
          update: {
            args: Prisma.MistakeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MistakePayload>
          }
          deleteMany: {
            args: Prisma.MistakeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MistakeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MistakeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MistakePayload>[]
          }
          upsert: {
            args: Prisma.MistakeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MistakePayload>
          }
          aggregate: {
            args: Prisma.MistakeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMistake>
          }
          groupBy: {
            args: Prisma.MistakeGroupByArgs<ExtArgs>
            result: $Utils.Optional<MistakeGroupByOutputType>[]
          }
          count: {
            args: Prisma.MistakeCountArgs<ExtArgs>
            result: $Utils.Optional<MistakeCountAggregateOutputType> | number
          }
        }
      }
      UserStats: {
        payload: Prisma.$UserStatsPayload<ExtArgs>
        fields: Prisma.UserStatsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserStatsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserStatsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload>
          }
          findFirst: {
            args: Prisma.UserStatsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserStatsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload>
          }
          findMany: {
            args: Prisma.UserStatsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload>[]
          }
          create: {
            args: Prisma.UserStatsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload>
          }
          createMany: {
            args: Prisma.UserStatsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserStatsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload>[]
          }
          delete: {
            args: Prisma.UserStatsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload>
          }
          update: {
            args: Prisma.UserStatsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload>
          }
          deleteMany: {
            args: Prisma.UserStatsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserStatsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserStatsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload>[]
          }
          upsert: {
            args: Prisma.UserStatsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload>
          }
          aggregate: {
            args: Prisma.UserStatsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserStats>
          }
          groupBy: {
            args: Prisma.UserStatsGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserStatsGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserStatsCountArgs<ExtArgs>
            result: $Utils.Optional<UserStatsCountAggregateOutputType> | number
          }
        }
      }
      XpEvent: {
        payload: Prisma.$XpEventPayload<ExtArgs>
        fields: Prisma.XpEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.XpEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$XpEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.XpEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$XpEventPayload>
          }
          findFirst: {
            args: Prisma.XpEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$XpEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.XpEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$XpEventPayload>
          }
          findMany: {
            args: Prisma.XpEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$XpEventPayload>[]
          }
          create: {
            args: Prisma.XpEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$XpEventPayload>
          }
          createMany: {
            args: Prisma.XpEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.XpEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$XpEventPayload>[]
          }
          delete: {
            args: Prisma.XpEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$XpEventPayload>
          }
          update: {
            args: Prisma.XpEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$XpEventPayload>
          }
          deleteMany: {
            args: Prisma.XpEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.XpEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.XpEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$XpEventPayload>[]
          }
          upsert: {
            args: Prisma.XpEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$XpEventPayload>
          }
          aggregate: {
            args: Prisma.XpEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateXpEvent>
          }
          groupBy: {
            args: Prisma.XpEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<XpEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.XpEventCountArgs<ExtArgs>
            result: $Utils.Optional<XpEventCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    refreshToken?: RefreshTokenOmit
    userProfile?: UserProfileOmit
    writingPrompt?: WritingPromptOmit
    submission?: SubmissionOmit
    analysisRun?: AnalysisRunOmit
    mistake?: MistakeOmit
    userStats?: UserStatsOmit
    xpEvent?: XpEventOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    submissions: number
    xpEvents: number
    refreshTokens: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submissions?: boolean | UserCountOutputTypeCountSubmissionsArgs
    xpEvents?: boolean | UserCountOutputTypeCountXpEventsArgs
    refreshTokens?: boolean | UserCountOutputTypeCountRefreshTokensArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountXpEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: XpEventWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRefreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
  }


  /**
   * Count Type WritingPromptCountOutputType
   */

  export type WritingPromptCountOutputType = {
    submissions: number
  }

  export type WritingPromptCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submissions?: boolean | WritingPromptCountOutputTypeCountSubmissionsArgs
  }

  // Custom InputTypes
  /**
   * WritingPromptCountOutputType without action
   */
  export type WritingPromptCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WritingPromptCountOutputType
     */
    select?: WritingPromptCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WritingPromptCountOutputType without action
   */
  export type WritingPromptCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
  }


  /**
   * Count Type SubmissionCountOutputType
   */

  export type SubmissionCountOutputType = {
    analysisRuns: number
    mistakes: number
  }

  export type SubmissionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    analysisRuns?: boolean | SubmissionCountOutputTypeCountAnalysisRunsArgs
    mistakes?: boolean | SubmissionCountOutputTypeCountMistakesArgs
  }

  // Custom InputTypes
  /**
   * SubmissionCountOutputType without action
   */
  export type SubmissionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubmissionCountOutputType
     */
    select?: SubmissionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubmissionCountOutputType without action
   */
  export type SubmissionCountOutputTypeCountAnalysisRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalysisRunWhereInput
  }

  /**
   * SubmissionCountOutputType without action
   */
  export type SubmissionCountOutputTypeCountMistakesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MistakeWhereInput
  }


  /**
   * Count Type AnalysisRunCountOutputType
   */

  export type AnalysisRunCountOutputType = {
    mistakes: number
  }

  export type AnalysisRunCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mistakes?: boolean | AnalysisRunCountOutputTypeCountMistakesArgs
  }

  // Custom InputTypes
  /**
   * AnalysisRunCountOutputType without action
   */
  export type AnalysisRunCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisRunCountOutputType
     */
    select?: AnalysisRunCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AnalysisRunCountOutputType without action
   */
  export type AnalysisRunCountOutputTypeCountMistakesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MistakeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    displayName: string | null
    image: string | null
    isNewUser: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    displayName: string | null
    image: string | null
    isNewUser: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    passwordHash: number
    displayName: number
    image: number
    isNewUser: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    displayName?: true
    image?: true
    isNewUser?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    displayName?: true
    image?: true
    isNewUser?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    displayName?: true
    image?: true
    isNewUser?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    passwordHash: string | null
    displayName: string | null
    image: string | null
    isNewUser: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    displayName?: boolean
    image?: boolean
    isNewUser?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profile?: boolean | User$profileArgs<ExtArgs>
    submissions?: boolean | User$submissionsArgs<ExtArgs>
    stats?: boolean | User$statsArgs<ExtArgs>
    xpEvents?: boolean | User$xpEventsArgs<ExtArgs>
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    displayName?: boolean
    image?: boolean
    isNewUser?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    displayName?: boolean
    image?: boolean
    isNewUser?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    displayName?: boolean
    image?: boolean
    isNewUser?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "passwordHash" | "displayName" | "image" | "isNewUser" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | User$profileArgs<ExtArgs>
    submissions?: boolean | User$submissionsArgs<ExtArgs>
    stats?: boolean | User$statsArgs<ExtArgs>
    xpEvents?: boolean | User$xpEventsArgs<ExtArgs>
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      profile: Prisma.$UserProfilePayload<ExtArgs> | null
      submissions: Prisma.$SubmissionPayload<ExtArgs>[]
      stats: Prisma.$UserStatsPayload<ExtArgs> | null
      xpEvents: Prisma.$XpEventPayload<ExtArgs>[]
      refreshTokens: Prisma.$RefreshTokenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      passwordHash: string | null
      displayName: string | null
      image: string | null
      isNewUser: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends User$profileArgs<ExtArgs> = {}>(args?: Subset<T, User$profileArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    submissions<T extends User$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, User$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stats<T extends User$statsArgs<ExtArgs> = {}>(args?: Subset<T, User$statsArgs<ExtArgs>>): Prisma__UserStatsClient<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    xpEvents<T extends User$xpEventsArgs<ExtArgs> = {}>(args?: Subset<T, User$xpEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$XpEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    refreshTokens<T extends User$refreshTokensArgs<ExtArgs> = {}>(args?: Subset<T, User$refreshTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly displayName: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly isNewUser: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.profile
   */
  export type User$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    where?: UserProfileWhereInput
  }

  /**
   * User.submissions
   */
  export type User$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    cursor?: SubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * User.stats
   */
  export type User$statsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatsInclude<ExtArgs> | null
    where?: UserStatsWhereInput
  }

  /**
   * User.xpEvents
   */
  export type User$xpEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the XpEvent
     */
    select?: XpEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the XpEvent
     */
    omit?: XpEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: XpEventInclude<ExtArgs> | null
    where?: XpEventWhereInput
    orderBy?: XpEventOrderByWithRelationInput | XpEventOrderByWithRelationInput[]
    cursor?: XpEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: XpEventScalarFieldEnum | XpEventScalarFieldEnum[]
  }

  /**
   * User.refreshTokens
   */
  export type User$refreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    cursor?: RefreshTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model RefreshToken
   */

  export type AggregateRefreshToken = {
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  export type RefreshTokenMinAggregateOutputType = {
    id: string | null
    tokenHash: string | null
    userId: string | null
    userAgent: string | null
    ip: string | null
    isRevoked: boolean | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RefreshTokenMaxAggregateOutputType = {
    id: string | null
    tokenHash: string | null
    userId: string | null
    userAgent: string | null
    ip: string | null
    isRevoked: boolean | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RefreshTokenCountAggregateOutputType = {
    id: number
    tokenHash: number
    userId: number
    userAgent: number
    ip: number
    isRevoked: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RefreshTokenMinAggregateInputType = {
    id?: true
    tokenHash?: true
    userId?: true
    userAgent?: true
    ip?: true
    isRevoked?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RefreshTokenMaxAggregateInputType = {
    id?: true
    tokenHash?: true
    userId?: true
    userAgent?: true
    ip?: true
    isRevoked?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RefreshTokenCountAggregateInputType = {
    id?: true
    tokenHash?: true
    userId?: true
    userAgent?: true
    ip?: true
    isRevoked?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RefreshTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshToken to aggregate.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RefreshTokens
    **/
    _count?: true | RefreshTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefreshTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type GetRefreshTokenAggregateType<T extends RefreshTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateRefreshToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefreshToken[P]>
      : GetScalarType<T[P], AggregateRefreshToken[P]>
  }




  export type RefreshTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithAggregationInput | RefreshTokenOrderByWithAggregationInput[]
    by: RefreshTokenScalarFieldEnum[] | RefreshTokenScalarFieldEnum
    having?: RefreshTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefreshTokenCountAggregateInputType | true
    _min?: RefreshTokenMinAggregateInputType
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type RefreshTokenGroupByOutputType = {
    id: string
    tokenHash: string
    userId: string
    userAgent: string | null
    ip: string | null
    isRevoked: boolean
    expiresAt: Date
    createdAt: Date
    updatedAt: Date
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  type GetRefreshTokenGroupByPayload<T extends RefreshTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefreshTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefreshTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
            : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
        }
      >
    >


  export type RefreshTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenHash?: boolean
    userId?: boolean
    userAgent?: boolean
    ip?: boolean
    isRevoked?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenHash?: boolean
    userId?: boolean
    userAgent?: boolean
    ip?: boolean
    isRevoked?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenHash?: boolean
    userId?: boolean
    userAgent?: boolean
    ip?: boolean
    isRevoked?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectScalar = {
    id?: boolean
    tokenHash?: boolean
    userId?: boolean
    userAgent?: boolean
    ip?: boolean
    isRevoked?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RefreshTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tokenHash" | "userId" | "userAgent" | "ip" | "isRevoked" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["refreshToken"]>
  export type RefreshTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RefreshTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RefreshTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RefreshTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RefreshToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tokenHash: string
      userId: string
      userAgent: string | null
      ip: string | null
      isRevoked: boolean
      expiresAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["refreshToken"]>
    composites: {}
  }

  type RefreshTokenGetPayload<S extends boolean | null | undefined | RefreshTokenDefaultArgs> = $Result.GetResult<Prisma.$RefreshTokenPayload, S>

  type RefreshTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RefreshTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RefreshTokenCountAggregateInputType | true
    }

  export interface RefreshTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RefreshToken'], meta: { name: 'RefreshToken' } }
    /**
     * Find zero or one RefreshToken that matches the filter.
     * @param {RefreshTokenFindUniqueArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefreshTokenFindUniqueArgs>(args: SelectSubset<T, RefreshTokenFindUniqueArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RefreshToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RefreshTokenFindUniqueOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefreshTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, RefreshTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefreshTokenFindFirstArgs>(args?: SelectSubset<T, RefreshTokenFindFirstArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefreshTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, RefreshTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RefreshTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany()
     * 
     * // Get first 10 RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RefreshTokenFindManyArgs>(args?: SelectSubset<T, RefreshTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RefreshToken.
     * @param {RefreshTokenCreateArgs} args - Arguments to create a RefreshToken.
     * @example
     * // Create one RefreshToken
     * const RefreshToken = await prisma.refreshToken.create({
     *   data: {
     *     // ... data to create a RefreshToken
     *   }
     * })
     * 
     */
    create<T extends RefreshTokenCreateArgs>(args: SelectSubset<T, RefreshTokenCreateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RefreshTokens.
     * @param {RefreshTokenCreateManyArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RefreshTokenCreateManyArgs>(args?: SelectSubset<T, RefreshTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RefreshTokens and returns the data saved in the database.
     * @param {RefreshTokenCreateManyAndReturnArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RefreshTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, RefreshTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RefreshToken.
     * @param {RefreshTokenDeleteArgs} args - Arguments to delete one RefreshToken.
     * @example
     * // Delete one RefreshToken
     * const RefreshToken = await prisma.refreshToken.delete({
     *   where: {
     *     // ... filter to delete one RefreshToken
     *   }
     * })
     * 
     */
    delete<T extends RefreshTokenDeleteArgs>(args: SelectSubset<T, RefreshTokenDeleteArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RefreshToken.
     * @param {RefreshTokenUpdateArgs} args - Arguments to update one RefreshToken.
     * @example
     * // Update one RefreshToken
     * const refreshToken = await prisma.refreshToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RefreshTokenUpdateArgs>(args: SelectSubset<T, RefreshTokenUpdateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RefreshTokens.
     * @param {RefreshTokenDeleteManyArgs} args - Arguments to filter RefreshTokens to delete.
     * @example
     * // Delete a few RefreshTokens
     * const { count } = await prisma.refreshToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RefreshTokenDeleteManyArgs>(args?: SelectSubset<T, RefreshTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RefreshTokenUpdateManyArgs>(args: SelectSubset<T, RefreshTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens and returns the data updated in the database.
     * @param {RefreshTokenUpdateManyAndReturnArgs} args - Arguments to update many RefreshTokens.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RefreshTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, RefreshTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RefreshToken.
     * @param {RefreshTokenUpsertArgs} args - Arguments to update or create a RefreshToken.
     * @example
     * // Update or create a RefreshToken
     * const refreshToken = await prisma.refreshToken.upsert({
     *   create: {
     *     // ... data to create a RefreshToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RefreshToken we want to update
     *   }
     * })
     */
    upsert<T extends RefreshTokenUpsertArgs>(args: SelectSubset<T, RefreshTokenUpsertArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenCountArgs} args - Arguments to filter RefreshTokens to count.
     * @example
     * // Count the number of RefreshTokens
     * const count = await prisma.refreshToken.count({
     *   where: {
     *     // ... the filter for the RefreshTokens we want to count
     *   }
     * })
    **/
    count<T extends RefreshTokenCountArgs>(
      args?: Subset<T, RefreshTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefreshTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RefreshTokenAggregateArgs>(args: Subset<T, RefreshTokenAggregateArgs>): Prisma.PrismaPromise<GetRefreshTokenAggregateType<T>>

    /**
     * Group by RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RefreshTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefreshTokenGroupByArgs['orderBy'] }
        : { orderBy?: RefreshTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RefreshTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefreshTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RefreshToken model
   */
  readonly fields: RefreshTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RefreshToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefreshTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RefreshToken model
   */
  interface RefreshTokenFieldRefs {
    readonly id: FieldRef<"RefreshToken", 'String'>
    readonly tokenHash: FieldRef<"RefreshToken", 'String'>
    readonly userId: FieldRef<"RefreshToken", 'String'>
    readonly userAgent: FieldRef<"RefreshToken", 'String'>
    readonly ip: FieldRef<"RefreshToken", 'String'>
    readonly isRevoked: FieldRef<"RefreshToken", 'Boolean'>
    readonly expiresAt: FieldRef<"RefreshToken", 'DateTime'>
    readonly createdAt: FieldRef<"RefreshToken", 'DateTime'>
    readonly updatedAt: FieldRef<"RefreshToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RefreshToken findUnique
   */
  export type RefreshTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findUniqueOrThrow
   */
  export type RefreshTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findFirst
   */
  export type RefreshTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findFirstOrThrow
   */
  export type RefreshTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findMany
   */
  export type RefreshTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshTokens to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken create
   */
  export type RefreshTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a RefreshToken.
     */
    data: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
  }

  /**
   * RefreshToken createMany
   */
  export type RefreshTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RefreshToken createManyAndReturn
   */
  export type RefreshTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshToken update
   */
  export type RefreshTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a RefreshToken.
     */
    data: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
    /**
     * Choose, which RefreshToken to update.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken updateMany
   */
  export type RefreshTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
  }

  /**
   * RefreshToken updateManyAndReturn
   */
  export type RefreshTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshToken upsert
   */
  export type RefreshTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the RefreshToken to update in case it exists.
     */
    where: RefreshTokenWhereUniqueInput
    /**
     * In case the RefreshToken found by the `where` argument doesn't exist, create a new RefreshToken with this data.
     */
    create: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
    /**
     * In case the RefreshToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
  }

  /**
   * RefreshToken delete
   */
  export type RefreshTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter which RefreshToken to delete.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken deleteMany
   */
  export type RefreshTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshTokens to delete
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to delete.
     */
    limit?: number
  }

  /**
   * RefreshToken without action
   */
  export type RefreshTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
  }


  /**
   * Model UserProfile
   */

  export type AggregateUserProfile = {
    _count: UserProfileCountAggregateOutputType | null
    _avg: UserProfileAvgAggregateOutputType | null
    _sum: UserProfileSumAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  export type UserProfileAvgAggregateOutputType = {
    englishReadingSelfScore: number | null
    englishWritingSelfScore: number | null
    weeklyTimeMinutes: number | null
    grammarScore: number | null
    vocabularyScore: number | null
    fluencyScore: number | null
    pronunciationScore: number | null
    targetScoreGoal: number | null
    dailyGoalMinutes: number | null
  }

  export type UserProfileSumAggregateOutputType = {
    englishReadingSelfScore: number | null
    englishWritingSelfScore: number | null
    weeklyTimeMinutes: number | null
    grammarScore: number | null
    vocabularyScore: number | null
    fluencyScore: number | null
    pronunciationScore: number | null
    targetScoreGoal: number | null
    dailyGoalMinutes: number | null
  }

  export type UserProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    primaryRole: $Enums.PrimaryRole | null
    englishReadingSelfScore: number | null
    englishWritingSelfScore: number | null
    primaryGoal: $Enums.PrimaryGoal | null
    weeklyTimeMinutes: number | null
    localePreference: string | null
    grammarScore: number | null
    vocabularyScore: number | null
    fluencyScore: number | null
    pronunciationScore: number | null
    targetScoreGoal: number | null
    dailyGoalMinutes: number | null
    preferredLearningStyle: string | null
    initialAssessmentDone: boolean | null
    onboardingCompletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    primaryRole: $Enums.PrimaryRole | null
    englishReadingSelfScore: number | null
    englishWritingSelfScore: number | null
    primaryGoal: $Enums.PrimaryGoal | null
    weeklyTimeMinutes: number | null
    localePreference: string | null
    grammarScore: number | null
    vocabularyScore: number | null
    fluencyScore: number | null
    pronunciationScore: number | null
    targetScoreGoal: number | null
    dailyGoalMinutes: number | null
    preferredLearningStyle: string | null
    initialAssessmentDone: boolean | null
    onboardingCompletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserProfileCountAggregateOutputType = {
    id: number
    userId: number
    primaryRole: number
    englishReadingSelfScore: number
    englishWritingSelfScore: number
    primaryGoal: number
    weeklyTimeMinutes: number
    interestTags: number
    preferredGenres: number
    localePreference: number
    grammarScore: number
    vocabularyScore: number
    fluencyScore: number
    pronunciationScore: number
    targetScoreGoal: number
    dailyGoalMinutes: number
    preferredLearningStyle: number
    weakAreas: number
    initialAssessmentDone: number
    onboardingCompletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserProfileAvgAggregateInputType = {
    englishReadingSelfScore?: true
    englishWritingSelfScore?: true
    weeklyTimeMinutes?: true
    grammarScore?: true
    vocabularyScore?: true
    fluencyScore?: true
    pronunciationScore?: true
    targetScoreGoal?: true
    dailyGoalMinutes?: true
  }

  export type UserProfileSumAggregateInputType = {
    englishReadingSelfScore?: true
    englishWritingSelfScore?: true
    weeklyTimeMinutes?: true
    grammarScore?: true
    vocabularyScore?: true
    fluencyScore?: true
    pronunciationScore?: true
    targetScoreGoal?: true
    dailyGoalMinutes?: true
  }

  export type UserProfileMinAggregateInputType = {
    id?: true
    userId?: true
    primaryRole?: true
    englishReadingSelfScore?: true
    englishWritingSelfScore?: true
    primaryGoal?: true
    weeklyTimeMinutes?: true
    localePreference?: true
    grammarScore?: true
    vocabularyScore?: true
    fluencyScore?: true
    pronunciationScore?: true
    targetScoreGoal?: true
    dailyGoalMinutes?: true
    preferredLearningStyle?: true
    initialAssessmentDone?: true
    onboardingCompletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    primaryRole?: true
    englishReadingSelfScore?: true
    englishWritingSelfScore?: true
    primaryGoal?: true
    weeklyTimeMinutes?: true
    localePreference?: true
    grammarScore?: true
    vocabularyScore?: true
    fluencyScore?: true
    pronunciationScore?: true
    targetScoreGoal?: true
    dailyGoalMinutes?: true
    preferredLearningStyle?: true
    initialAssessmentDone?: true
    onboardingCompletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserProfileCountAggregateInputType = {
    id?: true
    userId?: true
    primaryRole?: true
    englishReadingSelfScore?: true
    englishWritingSelfScore?: true
    primaryGoal?: true
    weeklyTimeMinutes?: true
    interestTags?: true
    preferredGenres?: true
    localePreference?: true
    grammarScore?: true
    vocabularyScore?: true
    fluencyScore?: true
    pronunciationScore?: true
    targetScoreGoal?: true
    dailyGoalMinutes?: true
    preferredLearningStyle?: true
    weakAreas?: true
    initialAssessmentDone?: true
    onboardingCompletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfile to aggregate.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserProfiles
    **/
    _count?: true | UserProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserProfileMaxAggregateInputType
  }

  export type GetUserProfileAggregateType<T extends UserProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateUserProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserProfile[P]>
      : GetScalarType<T[P], AggregateUserProfile[P]>
  }




  export type UserProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProfileWhereInput
    orderBy?: UserProfileOrderByWithAggregationInput | UserProfileOrderByWithAggregationInput[]
    by: UserProfileScalarFieldEnum[] | UserProfileScalarFieldEnum
    having?: UserProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserProfileCountAggregateInputType | true
    _avg?: UserProfileAvgAggregateInputType
    _sum?: UserProfileSumAggregateInputType
    _min?: UserProfileMinAggregateInputType
    _max?: UserProfileMaxAggregateInputType
  }

  export type UserProfileGroupByOutputType = {
    id: string
    userId: string
    primaryRole: $Enums.PrimaryRole
    englishReadingSelfScore: number
    englishWritingSelfScore: number
    primaryGoal: $Enums.PrimaryGoal | null
    weeklyTimeMinutes: number | null
    interestTags: string[]
    preferredGenres: $Enums.SubmissionGenre[]
    localePreference: string
    grammarScore: number | null
    vocabularyScore: number | null
    fluencyScore: number | null
    pronunciationScore: number | null
    targetScoreGoal: number | null
    dailyGoalMinutes: number | null
    preferredLearningStyle: string | null
    weakAreas: string[]
    initialAssessmentDone: boolean
    onboardingCompletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserProfileCountAggregateOutputType | null
    _avg: UserProfileAvgAggregateOutputType | null
    _sum: UserProfileSumAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  type GetUserProfileGroupByPayload<T extends UserProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
            : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
        }
      >
    >


  export type UserProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    primaryRole?: boolean
    englishReadingSelfScore?: boolean
    englishWritingSelfScore?: boolean
    primaryGoal?: boolean
    weeklyTimeMinutes?: boolean
    interestTags?: boolean
    preferredGenres?: boolean
    localePreference?: boolean
    grammarScore?: boolean
    vocabularyScore?: boolean
    fluencyScore?: boolean
    pronunciationScore?: boolean
    targetScoreGoal?: boolean
    dailyGoalMinutes?: boolean
    preferredLearningStyle?: boolean
    weakAreas?: boolean
    initialAssessmentDone?: boolean
    onboardingCompletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    primaryRole?: boolean
    englishReadingSelfScore?: boolean
    englishWritingSelfScore?: boolean
    primaryGoal?: boolean
    weeklyTimeMinutes?: boolean
    interestTags?: boolean
    preferredGenres?: boolean
    localePreference?: boolean
    grammarScore?: boolean
    vocabularyScore?: boolean
    fluencyScore?: boolean
    pronunciationScore?: boolean
    targetScoreGoal?: boolean
    dailyGoalMinutes?: boolean
    preferredLearningStyle?: boolean
    weakAreas?: boolean
    initialAssessmentDone?: boolean
    onboardingCompletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    primaryRole?: boolean
    englishReadingSelfScore?: boolean
    englishWritingSelfScore?: boolean
    primaryGoal?: boolean
    weeklyTimeMinutes?: boolean
    interestTags?: boolean
    preferredGenres?: boolean
    localePreference?: boolean
    grammarScore?: boolean
    vocabularyScore?: boolean
    fluencyScore?: boolean
    pronunciationScore?: boolean
    targetScoreGoal?: boolean
    dailyGoalMinutes?: boolean
    preferredLearningStyle?: boolean
    weakAreas?: boolean
    initialAssessmentDone?: boolean
    onboardingCompletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    primaryRole?: boolean
    englishReadingSelfScore?: boolean
    englishWritingSelfScore?: boolean
    primaryGoal?: boolean
    weeklyTimeMinutes?: boolean
    interestTags?: boolean
    preferredGenres?: boolean
    localePreference?: boolean
    grammarScore?: boolean
    vocabularyScore?: boolean
    fluencyScore?: boolean
    pronunciationScore?: boolean
    targetScoreGoal?: boolean
    dailyGoalMinutes?: boolean
    preferredLearningStyle?: boolean
    weakAreas?: boolean
    initialAssessmentDone?: boolean
    onboardingCompletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "primaryRole" | "englishReadingSelfScore" | "englishWritingSelfScore" | "primaryGoal" | "weeklyTimeMinutes" | "interestTags" | "preferredGenres" | "localePreference" | "grammarScore" | "vocabularyScore" | "fluencyScore" | "pronunciationScore" | "targetScoreGoal" | "dailyGoalMinutes" | "preferredLearningStyle" | "weakAreas" | "initialAssessmentDone" | "onboardingCompletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["userProfile"]>
  export type UserProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      primaryRole: $Enums.PrimaryRole
      englishReadingSelfScore: number
      englishWritingSelfScore: number
      primaryGoal: $Enums.PrimaryGoal | null
      weeklyTimeMinutes: number | null
      interestTags: string[]
      preferredGenres: $Enums.SubmissionGenre[]
      localePreference: string
      grammarScore: number | null
      vocabularyScore: number | null
      fluencyScore: number | null
      pronunciationScore: number | null
      targetScoreGoal: number | null
      dailyGoalMinutes: number | null
      preferredLearningStyle: string | null
      weakAreas: string[]
      initialAssessmentDone: boolean
      onboardingCompletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userProfile"]>
    composites: {}
  }

  type UserProfileGetPayload<S extends boolean | null | undefined | UserProfileDefaultArgs> = $Result.GetResult<Prisma.$UserProfilePayload, S>

  type UserProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserProfileCountAggregateInputType | true
    }

  export interface UserProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserProfile'], meta: { name: 'UserProfile' } }
    /**
     * Find zero or one UserProfile that matches the filter.
     * @param {UserProfileFindUniqueArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserProfileFindUniqueArgs>(args: SelectSubset<T, UserProfileFindUniqueArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserProfileFindUniqueOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, UserProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserProfileFindFirstArgs>(args?: SelectSubset<T, UserProfileFindFirstArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, UserProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserProfiles
     * const userProfiles = await prisma.userProfile.findMany()
     * 
     * // Get first 10 UserProfiles
     * const userProfiles = await prisma.userProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserProfileFindManyArgs>(args?: SelectSubset<T, UserProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserProfile.
     * @param {UserProfileCreateArgs} args - Arguments to create a UserProfile.
     * @example
     * // Create one UserProfile
     * const UserProfile = await prisma.userProfile.create({
     *   data: {
     *     // ... data to create a UserProfile
     *   }
     * })
     * 
     */
    create<T extends UserProfileCreateArgs>(args: SelectSubset<T, UserProfileCreateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserProfiles.
     * @param {UserProfileCreateManyArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserProfileCreateManyArgs>(args?: SelectSubset<T, UserProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserProfiles and returns the data saved in the database.
     * @param {UserProfileCreateManyAndReturnArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserProfiles and only return the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, UserProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserProfile.
     * @param {UserProfileDeleteArgs} args - Arguments to delete one UserProfile.
     * @example
     * // Delete one UserProfile
     * const UserProfile = await prisma.userProfile.delete({
     *   where: {
     *     // ... filter to delete one UserProfile
     *   }
     * })
     * 
     */
    delete<T extends UserProfileDeleteArgs>(args: SelectSubset<T, UserProfileDeleteArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserProfile.
     * @param {UserProfileUpdateArgs} args - Arguments to update one UserProfile.
     * @example
     * // Update one UserProfile
     * const userProfile = await prisma.userProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserProfileUpdateArgs>(args: SelectSubset<T, UserProfileUpdateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserProfiles.
     * @param {UserProfileDeleteManyArgs} args - Arguments to filter UserProfiles to delete.
     * @example
     * // Delete a few UserProfiles
     * const { count } = await prisma.userProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserProfileDeleteManyArgs>(args?: SelectSubset<T, UserProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserProfileUpdateManyArgs>(args: SelectSubset<T, UserProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles and returns the data updated in the database.
     * @param {UserProfileUpdateManyAndReturnArgs} args - Arguments to update many UserProfiles.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserProfiles and only return the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, UserProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserProfile.
     * @param {UserProfileUpsertArgs} args - Arguments to update or create a UserProfile.
     * @example
     * // Update or create a UserProfile
     * const userProfile = await prisma.userProfile.upsert({
     *   create: {
     *     // ... data to create a UserProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserProfile we want to update
     *   }
     * })
     */
    upsert<T extends UserProfileUpsertArgs>(args: SelectSubset<T, UserProfileUpsertArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileCountArgs} args - Arguments to filter UserProfiles to count.
     * @example
     * // Count the number of UserProfiles
     * const count = await prisma.userProfile.count({
     *   where: {
     *     // ... the filter for the UserProfiles we want to count
     *   }
     * })
    **/
    count<T extends UserProfileCountArgs>(
      args?: Subset<T, UserProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserProfileAggregateArgs>(args: Subset<T, UserProfileAggregateArgs>): Prisma.PrismaPromise<GetUserProfileAggregateType<T>>

    /**
     * Group by UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserProfileGroupByArgs['orderBy'] }
        : { orderBy?: UserProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserProfile model
   */
  readonly fields: UserProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserProfile model
   */
  interface UserProfileFieldRefs {
    readonly id: FieldRef<"UserProfile", 'String'>
    readonly userId: FieldRef<"UserProfile", 'String'>
    readonly primaryRole: FieldRef<"UserProfile", 'PrimaryRole'>
    readonly englishReadingSelfScore: FieldRef<"UserProfile", 'Int'>
    readonly englishWritingSelfScore: FieldRef<"UserProfile", 'Int'>
    readonly primaryGoal: FieldRef<"UserProfile", 'PrimaryGoal'>
    readonly weeklyTimeMinutes: FieldRef<"UserProfile", 'Int'>
    readonly interestTags: FieldRef<"UserProfile", 'String[]'>
    readonly preferredGenres: FieldRef<"UserProfile", 'SubmissionGenre[]'>
    readonly localePreference: FieldRef<"UserProfile", 'String'>
    readonly grammarScore: FieldRef<"UserProfile", 'Int'>
    readonly vocabularyScore: FieldRef<"UserProfile", 'Int'>
    readonly fluencyScore: FieldRef<"UserProfile", 'Int'>
    readonly pronunciationScore: FieldRef<"UserProfile", 'Int'>
    readonly targetScoreGoal: FieldRef<"UserProfile", 'Int'>
    readonly dailyGoalMinutes: FieldRef<"UserProfile", 'Int'>
    readonly preferredLearningStyle: FieldRef<"UserProfile", 'String'>
    readonly weakAreas: FieldRef<"UserProfile", 'String[]'>
    readonly initialAssessmentDone: FieldRef<"UserProfile", 'Boolean'>
    readonly onboardingCompletedAt: FieldRef<"UserProfile", 'DateTime'>
    readonly createdAt: FieldRef<"UserProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"UserProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserProfile findUnique
   */
  export type UserProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findUniqueOrThrow
   */
  export type UserProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findFirst
   */
  export type UserProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findFirstOrThrow
   */
  export type UserProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findMany
   */
  export type UserProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfiles to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile create
   */
  export type UserProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a UserProfile.
     */
    data: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
  }

  /**
   * UserProfile createMany
   */
  export type UserProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserProfile createManyAndReturn
   */
  export type UserProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProfile update
   */
  export type UserProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a UserProfile.
     */
    data: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
    /**
     * Choose, which UserProfile to update.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile updateMany
   */
  export type UserProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number
  }

  /**
   * UserProfile updateManyAndReturn
   */
  export type UserProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProfile upsert
   */
  export type UserProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the UserProfile to update in case it exists.
     */
    where: UserProfileWhereUniqueInput
    /**
     * In case the UserProfile found by the `where` argument doesn't exist, create a new UserProfile with this data.
     */
    create: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
    /**
     * In case the UserProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
  }

  /**
   * UserProfile delete
   */
  export type UserProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter which UserProfile to delete.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile deleteMany
   */
  export type UserProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfiles to delete
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to delete.
     */
    limit?: number
  }

  /**
   * UserProfile without action
   */
  export type UserProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
  }


  /**
   * Model WritingPrompt
   */

  export type AggregateWritingPrompt = {
    _count: WritingPromptCountAggregateOutputType | null
    _avg: WritingPromptAvgAggregateOutputType | null
    _sum: WritingPromptSumAggregateOutputType | null
    _min: WritingPromptMinAggregateOutputType | null
    _max: WritingPromptMaxAggregateOutputType | null
  }

  export type WritingPromptAvgAggregateOutputType = {
    targetLevel: number | null
  }

  export type WritingPromptSumAggregateOutputType = {
    targetLevel: number | null
  }

  export type WritingPromptMinAggregateOutputType = {
    id: string | null
    title: string | null
    genre: $Enums.SubmissionGenre | null
    body: string | null
    targetLevel: number | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type WritingPromptMaxAggregateOutputType = {
    id: string | null
    title: string | null
    genre: $Enums.SubmissionGenre | null
    body: string | null
    targetLevel: number | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type WritingPromptCountAggregateOutputType = {
    id: number
    title: number
    genre: number
    body: number
    topicTags: number
    targetLevel: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type WritingPromptAvgAggregateInputType = {
    targetLevel?: true
  }

  export type WritingPromptSumAggregateInputType = {
    targetLevel?: true
  }

  export type WritingPromptMinAggregateInputType = {
    id?: true
    title?: true
    genre?: true
    body?: true
    targetLevel?: true
    isActive?: true
    createdAt?: true
  }

  export type WritingPromptMaxAggregateInputType = {
    id?: true
    title?: true
    genre?: true
    body?: true
    targetLevel?: true
    isActive?: true
    createdAt?: true
  }

  export type WritingPromptCountAggregateInputType = {
    id?: true
    title?: true
    genre?: true
    body?: true
    topicTags?: true
    targetLevel?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type WritingPromptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WritingPrompt to aggregate.
     */
    where?: WritingPromptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WritingPrompts to fetch.
     */
    orderBy?: WritingPromptOrderByWithRelationInput | WritingPromptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WritingPromptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WritingPrompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WritingPrompts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WritingPrompts
    **/
    _count?: true | WritingPromptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WritingPromptAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WritingPromptSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WritingPromptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WritingPromptMaxAggregateInputType
  }

  export type GetWritingPromptAggregateType<T extends WritingPromptAggregateArgs> = {
        [P in keyof T & keyof AggregateWritingPrompt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWritingPrompt[P]>
      : GetScalarType<T[P], AggregateWritingPrompt[P]>
  }




  export type WritingPromptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WritingPromptWhereInput
    orderBy?: WritingPromptOrderByWithAggregationInput | WritingPromptOrderByWithAggregationInput[]
    by: WritingPromptScalarFieldEnum[] | WritingPromptScalarFieldEnum
    having?: WritingPromptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WritingPromptCountAggregateInputType | true
    _avg?: WritingPromptAvgAggregateInputType
    _sum?: WritingPromptSumAggregateInputType
    _min?: WritingPromptMinAggregateInputType
    _max?: WritingPromptMaxAggregateInputType
  }

  export type WritingPromptGroupByOutputType = {
    id: string
    title: string
    genre: $Enums.SubmissionGenre
    body: string
    topicTags: string[]
    targetLevel: number | null
    isActive: boolean
    createdAt: Date
    _count: WritingPromptCountAggregateOutputType | null
    _avg: WritingPromptAvgAggregateOutputType | null
    _sum: WritingPromptSumAggregateOutputType | null
    _min: WritingPromptMinAggregateOutputType | null
    _max: WritingPromptMaxAggregateOutputType | null
  }

  type GetWritingPromptGroupByPayload<T extends WritingPromptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WritingPromptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WritingPromptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WritingPromptGroupByOutputType[P]>
            : GetScalarType<T[P], WritingPromptGroupByOutputType[P]>
        }
      >
    >


  export type WritingPromptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    genre?: boolean
    body?: boolean
    topicTags?: boolean
    targetLevel?: boolean
    isActive?: boolean
    createdAt?: boolean
    submissions?: boolean | WritingPrompt$submissionsArgs<ExtArgs>
    _count?: boolean | WritingPromptCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["writingPrompt"]>

  export type WritingPromptSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    genre?: boolean
    body?: boolean
    topicTags?: boolean
    targetLevel?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["writingPrompt"]>

  export type WritingPromptSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    genre?: boolean
    body?: boolean
    topicTags?: boolean
    targetLevel?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["writingPrompt"]>

  export type WritingPromptSelectScalar = {
    id?: boolean
    title?: boolean
    genre?: boolean
    body?: boolean
    topicTags?: boolean
    targetLevel?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type WritingPromptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "genre" | "body" | "topicTags" | "targetLevel" | "isActive" | "createdAt", ExtArgs["result"]["writingPrompt"]>
  export type WritingPromptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submissions?: boolean | WritingPrompt$submissionsArgs<ExtArgs>
    _count?: boolean | WritingPromptCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WritingPromptIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type WritingPromptIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WritingPromptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WritingPrompt"
    objects: {
      submissions: Prisma.$SubmissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      genre: $Enums.SubmissionGenre
      body: string
      topicTags: string[]
      targetLevel: number | null
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["writingPrompt"]>
    composites: {}
  }

  type WritingPromptGetPayload<S extends boolean | null | undefined | WritingPromptDefaultArgs> = $Result.GetResult<Prisma.$WritingPromptPayload, S>

  type WritingPromptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WritingPromptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WritingPromptCountAggregateInputType | true
    }

  export interface WritingPromptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WritingPrompt'], meta: { name: 'WritingPrompt' } }
    /**
     * Find zero or one WritingPrompt that matches the filter.
     * @param {WritingPromptFindUniqueArgs} args - Arguments to find a WritingPrompt
     * @example
     * // Get one WritingPrompt
     * const writingPrompt = await prisma.writingPrompt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WritingPromptFindUniqueArgs>(args: SelectSubset<T, WritingPromptFindUniqueArgs<ExtArgs>>): Prisma__WritingPromptClient<$Result.GetResult<Prisma.$WritingPromptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WritingPrompt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WritingPromptFindUniqueOrThrowArgs} args - Arguments to find a WritingPrompt
     * @example
     * // Get one WritingPrompt
     * const writingPrompt = await prisma.writingPrompt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WritingPromptFindUniqueOrThrowArgs>(args: SelectSubset<T, WritingPromptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WritingPromptClient<$Result.GetResult<Prisma.$WritingPromptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WritingPrompt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WritingPromptFindFirstArgs} args - Arguments to find a WritingPrompt
     * @example
     * // Get one WritingPrompt
     * const writingPrompt = await prisma.writingPrompt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WritingPromptFindFirstArgs>(args?: SelectSubset<T, WritingPromptFindFirstArgs<ExtArgs>>): Prisma__WritingPromptClient<$Result.GetResult<Prisma.$WritingPromptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WritingPrompt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WritingPromptFindFirstOrThrowArgs} args - Arguments to find a WritingPrompt
     * @example
     * // Get one WritingPrompt
     * const writingPrompt = await prisma.writingPrompt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WritingPromptFindFirstOrThrowArgs>(args?: SelectSubset<T, WritingPromptFindFirstOrThrowArgs<ExtArgs>>): Prisma__WritingPromptClient<$Result.GetResult<Prisma.$WritingPromptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WritingPrompts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WritingPromptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WritingPrompts
     * const writingPrompts = await prisma.writingPrompt.findMany()
     * 
     * // Get first 10 WritingPrompts
     * const writingPrompts = await prisma.writingPrompt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const writingPromptWithIdOnly = await prisma.writingPrompt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WritingPromptFindManyArgs>(args?: SelectSubset<T, WritingPromptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WritingPromptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WritingPrompt.
     * @param {WritingPromptCreateArgs} args - Arguments to create a WritingPrompt.
     * @example
     * // Create one WritingPrompt
     * const WritingPrompt = await prisma.writingPrompt.create({
     *   data: {
     *     // ... data to create a WritingPrompt
     *   }
     * })
     * 
     */
    create<T extends WritingPromptCreateArgs>(args: SelectSubset<T, WritingPromptCreateArgs<ExtArgs>>): Prisma__WritingPromptClient<$Result.GetResult<Prisma.$WritingPromptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WritingPrompts.
     * @param {WritingPromptCreateManyArgs} args - Arguments to create many WritingPrompts.
     * @example
     * // Create many WritingPrompts
     * const writingPrompt = await prisma.writingPrompt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WritingPromptCreateManyArgs>(args?: SelectSubset<T, WritingPromptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WritingPrompts and returns the data saved in the database.
     * @param {WritingPromptCreateManyAndReturnArgs} args - Arguments to create many WritingPrompts.
     * @example
     * // Create many WritingPrompts
     * const writingPrompt = await prisma.writingPrompt.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WritingPrompts and only return the `id`
     * const writingPromptWithIdOnly = await prisma.writingPrompt.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WritingPromptCreateManyAndReturnArgs>(args?: SelectSubset<T, WritingPromptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WritingPromptPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WritingPrompt.
     * @param {WritingPromptDeleteArgs} args - Arguments to delete one WritingPrompt.
     * @example
     * // Delete one WritingPrompt
     * const WritingPrompt = await prisma.writingPrompt.delete({
     *   where: {
     *     // ... filter to delete one WritingPrompt
     *   }
     * })
     * 
     */
    delete<T extends WritingPromptDeleteArgs>(args: SelectSubset<T, WritingPromptDeleteArgs<ExtArgs>>): Prisma__WritingPromptClient<$Result.GetResult<Prisma.$WritingPromptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WritingPrompt.
     * @param {WritingPromptUpdateArgs} args - Arguments to update one WritingPrompt.
     * @example
     * // Update one WritingPrompt
     * const writingPrompt = await prisma.writingPrompt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WritingPromptUpdateArgs>(args: SelectSubset<T, WritingPromptUpdateArgs<ExtArgs>>): Prisma__WritingPromptClient<$Result.GetResult<Prisma.$WritingPromptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WritingPrompts.
     * @param {WritingPromptDeleteManyArgs} args - Arguments to filter WritingPrompts to delete.
     * @example
     * // Delete a few WritingPrompts
     * const { count } = await prisma.writingPrompt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WritingPromptDeleteManyArgs>(args?: SelectSubset<T, WritingPromptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WritingPrompts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WritingPromptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WritingPrompts
     * const writingPrompt = await prisma.writingPrompt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WritingPromptUpdateManyArgs>(args: SelectSubset<T, WritingPromptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WritingPrompts and returns the data updated in the database.
     * @param {WritingPromptUpdateManyAndReturnArgs} args - Arguments to update many WritingPrompts.
     * @example
     * // Update many WritingPrompts
     * const writingPrompt = await prisma.writingPrompt.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WritingPrompts and only return the `id`
     * const writingPromptWithIdOnly = await prisma.writingPrompt.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WritingPromptUpdateManyAndReturnArgs>(args: SelectSubset<T, WritingPromptUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WritingPromptPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WritingPrompt.
     * @param {WritingPromptUpsertArgs} args - Arguments to update or create a WritingPrompt.
     * @example
     * // Update or create a WritingPrompt
     * const writingPrompt = await prisma.writingPrompt.upsert({
     *   create: {
     *     // ... data to create a WritingPrompt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WritingPrompt we want to update
     *   }
     * })
     */
    upsert<T extends WritingPromptUpsertArgs>(args: SelectSubset<T, WritingPromptUpsertArgs<ExtArgs>>): Prisma__WritingPromptClient<$Result.GetResult<Prisma.$WritingPromptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WritingPrompts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WritingPromptCountArgs} args - Arguments to filter WritingPrompts to count.
     * @example
     * // Count the number of WritingPrompts
     * const count = await prisma.writingPrompt.count({
     *   where: {
     *     // ... the filter for the WritingPrompts we want to count
     *   }
     * })
    **/
    count<T extends WritingPromptCountArgs>(
      args?: Subset<T, WritingPromptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WritingPromptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WritingPrompt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WritingPromptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WritingPromptAggregateArgs>(args: Subset<T, WritingPromptAggregateArgs>): Prisma.PrismaPromise<GetWritingPromptAggregateType<T>>

    /**
     * Group by WritingPrompt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WritingPromptGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WritingPromptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WritingPromptGroupByArgs['orderBy'] }
        : { orderBy?: WritingPromptGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WritingPromptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWritingPromptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WritingPrompt model
   */
  readonly fields: WritingPromptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WritingPrompt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WritingPromptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    submissions<T extends WritingPrompt$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, WritingPrompt$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WritingPrompt model
   */
  interface WritingPromptFieldRefs {
    readonly id: FieldRef<"WritingPrompt", 'String'>
    readonly title: FieldRef<"WritingPrompt", 'String'>
    readonly genre: FieldRef<"WritingPrompt", 'SubmissionGenre'>
    readonly body: FieldRef<"WritingPrompt", 'String'>
    readonly topicTags: FieldRef<"WritingPrompt", 'String[]'>
    readonly targetLevel: FieldRef<"WritingPrompt", 'Int'>
    readonly isActive: FieldRef<"WritingPrompt", 'Boolean'>
    readonly createdAt: FieldRef<"WritingPrompt", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WritingPrompt findUnique
   */
  export type WritingPromptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WritingPrompt
     */
    select?: WritingPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WritingPrompt
     */
    omit?: WritingPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WritingPromptInclude<ExtArgs> | null
    /**
     * Filter, which WritingPrompt to fetch.
     */
    where: WritingPromptWhereUniqueInput
  }

  /**
   * WritingPrompt findUniqueOrThrow
   */
  export type WritingPromptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WritingPrompt
     */
    select?: WritingPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WritingPrompt
     */
    omit?: WritingPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WritingPromptInclude<ExtArgs> | null
    /**
     * Filter, which WritingPrompt to fetch.
     */
    where: WritingPromptWhereUniqueInput
  }

  /**
   * WritingPrompt findFirst
   */
  export type WritingPromptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WritingPrompt
     */
    select?: WritingPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WritingPrompt
     */
    omit?: WritingPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WritingPromptInclude<ExtArgs> | null
    /**
     * Filter, which WritingPrompt to fetch.
     */
    where?: WritingPromptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WritingPrompts to fetch.
     */
    orderBy?: WritingPromptOrderByWithRelationInput | WritingPromptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WritingPrompts.
     */
    cursor?: WritingPromptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WritingPrompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WritingPrompts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WritingPrompts.
     */
    distinct?: WritingPromptScalarFieldEnum | WritingPromptScalarFieldEnum[]
  }

  /**
   * WritingPrompt findFirstOrThrow
   */
  export type WritingPromptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WritingPrompt
     */
    select?: WritingPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WritingPrompt
     */
    omit?: WritingPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WritingPromptInclude<ExtArgs> | null
    /**
     * Filter, which WritingPrompt to fetch.
     */
    where?: WritingPromptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WritingPrompts to fetch.
     */
    orderBy?: WritingPromptOrderByWithRelationInput | WritingPromptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WritingPrompts.
     */
    cursor?: WritingPromptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WritingPrompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WritingPrompts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WritingPrompts.
     */
    distinct?: WritingPromptScalarFieldEnum | WritingPromptScalarFieldEnum[]
  }

  /**
   * WritingPrompt findMany
   */
  export type WritingPromptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WritingPrompt
     */
    select?: WritingPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WritingPrompt
     */
    omit?: WritingPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WritingPromptInclude<ExtArgs> | null
    /**
     * Filter, which WritingPrompts to fetch.
     */
    where?: WritingPromptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WritingPrompts to fetch.
     */
    orderBy?: WritingPromptOrderByWithRelationInput | WritingPromptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WritingPrompts.
     */
    cursor?: WritingPromptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WritingPrompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WritingPrompts.
     */
    skip?: number
    distinct?: WritingPromptScalarFieldEnum | WritingPromptScalarFieldEnum[]
  }

  /**
   * WritingPrompt create
   */
  export type WritingPromptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WritingPrompt
     */
    select?: WritingPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WritingPrompt
     */
    omit?: WritingPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WritingPromptInclude<ExtArgs> | null
    /**
     * The data needed to create a WritingPrompt.
     */
    data: XOR<WritingPromptCreateInput, WritingPromptUncheckedCreateInput>
  }

  /**
   * WritingPrompt createMany
   */
  export type WritingPromptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WritingPrompts.
     */
    data: WritingPromptCreateManyInput | WritingPromptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WritingPrompt createManyAndReturn
   */
  export type WritingPromptCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WritingPrompt
     */
    select?: WritingPromptSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WritingPrompt
     */
    omit?: WritingPromptOmit<ExtArgs> | null
    /**
     * The data used to create many WritingPrompts.
     */
    data: WritingPromptCreateManyInput | WritingPromptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WritingPrompt update
   */
  export type WritingPromptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WritingPrompt
     */
    select?: WritingPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WritingPrompt
     */
    omit?: WritingPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WritingPromptInclude<ExtArgs> | null
    /**
     * The data needed to update a WritingPrompt.
     */
    data: XOR<WritingPromptUpdateInput, WritingPromptUncheckedUpdateInput>
    /**
     * Choose, which WritingPrompt to update.
     */
    where: WritingPromptWhereUniqueInput
  }

  /**
   * WritingPrompt updateMany
   */
  export type WritingPromptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WritingPrompts.
     */
    data: XOR<WritingPromptUpdateManyMutationInput, WritingPromptUncheckedUpdateManyInput>
    /**
     * Filter which WritingPrompts to update
     */
    where?: WritingPromptWhereInput
    /**
     * Limit how many WritingPrompts to update.
     */
    limit?: number
  }

  /**
   * WritingPrompt updateManyAndReturn
   */
  export type WritingPromptUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WritingPrompt
     */
    select?: WritingPromptSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WritingPrompt
     */
    omit?: WritingPromptOmit<ExtArgs> | null
    /**
     * The data used to update WritingPrompts.
     */
    data: XOR<WritingPromptUpdateManyMutationInput, WritingPromptUncheckedUpdateManyInput>
    /**
     * Filter which WritingPrompts to update
     */
    where?: WritingPromptWhereInput
    /**
     * Limit how many WritingPrompts to update.
     */
    limit?: number
  }

  /**
   * WritingPrompt upsert
   */
  export type WritingPromptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WritingPrompt
     */
    select?: WritingPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WritingPrompt
     */
    omit?: WritingPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WritingPromptInclude<ExtArgs> | null
    /**
     * The filter to search for the WritingPrompt to update in case it exists.
     */
    where: WritingPromptWhereUniqueInput
    /**
     * In case the WritingPrompt found by the `where` argument doesn't exist, create a new WritingPrompt with this data.
     */
    create: XOR<WritingPromptCreateInput, WritingPromptUncheckedCreateInput>
    /**
     * In case the WritingPrompt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WritingPromptUpdateInput, WritingPromptUncheckedUpdateInput>
  }

  /**
   * WritingPrompt delete
   */
  export type WritingPromptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WritingPrompt
     */
    select?: WritingPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WritingPrompt
     */
    omit?: WritingPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WritingPromptInclude<ExtArgs> | null
    /**
     * Filter which WritingPrompt to delete.
     */
    where: WritingPromptWhereUniqueInput
  }

  /**
   * WritingPrompt deleteMany
   */
  export type WritingPromptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WritingPrompts to delete
     */
    where?: WritingPromptWhereInput
    /**
     * Limit how many WritingPrompts to delete.
     */
    limit?: number
  }

  /**
   * WritingPrompt.submissions
   */
  export type WritingPrompt$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    cursor?: SubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * WritingPrompt without action
   */
  export type WritingPromptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WritingPrompt
     */
    select?: WritingPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WritingPrompt
     */
    omit?: WritingPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WritingPromptInclude<ExtArgs> | null
  }


  /**
   * Model Submission
   */

  export type AggregateSubmission = {
    _count: SubmissionCountAggregateOutputType | null
    _avg: SubmissionAvgAggregateOutputType | null
    _sum: SubmissionSumAggregateOutputType | null
    _min: SubmissionMinAggregateOutputType | null
    _max: SubmissionMaxAggregateOutputType | null
  }

  export type SubmissionAvgAggregateOutputType = {
    wordCount: number | null
  }

  export type SubmissionSumAggregateOutputType = {
    wordCount: number | null
  }

  export type SubmissionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    promptId: string | null
    title: string | null
    genre: $Enums.SubmissionGenre | null
    body: string | null
    wordCount: number | null
    status: $Enums.SubmissionStatus | null
    rawAIResponse: string | null
    errorMessage: string | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubmissionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    promptId: string | null
    title: string | null
    genre: $Enums.SubmissionGenre | null
    body: string | null
    wordCount: number | null
    status: $Enums.SubmissionStatus | null
    rawAIResponse: string | null
    errorMessage: string | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubmissionCountAggregateOutputType = {
    id: number
    userId: number
    promptId: number
    title: number
    genre: number
    body: number
    wordCount: number
    status: number
    analysisJson: number
    rawAIResponse: number
    errorMessage: number
    completedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubmissionAvgAggregateInputType = {
    wordCount?: true
  }

  export type SubmissionSumAggregateInputType = {
    wordCount?: true
  }

  export type SubmissionMinAggregateInputType = {
    id?: true
    userId?: true
    promptId?: true
    title?: true
    genre?: true
    body?: true
    wordCount?: true
    status?: true
    rawAIResponse?: true
    errorMessage?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubmissionMaxAggregateInputType = {
    id?: true
    userId?: true
    promptId?: true
    title?: true
    genre?: true
    body?: true
    wordCount?: true
    status?: true
    rawAIResponse?: true
    errorMessage?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubmissionCountAggregateInputType = {
    id?: true
    userId?: true
    promptId?: true
    title?: true
    genre?: true
    body?: true
    wordCount?: true
    status?: true
    analysisJson?: true
    rawAIResponse?: true
    errorMessage?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Submission to aggregate.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Submissions
    **/
    _count?: true | SubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubmissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubmissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubmissionMaxAggregateInputType
  }

  export type GetSubmissionAggregateType<T extends SubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubmission[P]>
      : GetScalarType<T[P], AggregateSubmission[P]>
  }




  export type SubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithAggregationInput | SubmissionOrderByWithAggregationInput[]
    by: SubmissionScalarFieldEnum[] | SubmissionScalarFieldEnum
    having?: SubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubmissionCountAggregateInputType | true
    _avg?: SubmissionAvgAggregateInputType
    _sum?: SubmissionSumAggregateInputType
    _min?: SubmissionMinAggregateInputType
    _max?: SubmissionMaxAggregateInputType
  }

  export type SubmissionGroupByOutputType = {
    id: string
    userId: string
    promptId: string | null
    title: string | null
    genre: $Enums.SubmissionGenre
    body: string
    wordCount: number
    status: $Enums.SubmissionStatus
    analysisJson: JsonValue | null
    rawAIResponse: string | null
    errorMessage: string | null
    completedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: SubmissionCountAggregateOutputType | null
    _avg: SubmissionAvgAggregateOutputType | null
    _sum: SubmissionSumAggregateOutputType | null
    _min: SubmissionMinAggregateOutputType | null
    _max: SubmissionMaxAggregateOutputType | null
  }

  type GetSubmissionGroupByPayload<T extends SubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], SubmissionGroupByOutputType[P]>
        }
      >
    >


  export type SubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    promptId?: boolean
    title?: boolean
    genre?: boolean
    body?: boolean
    wordCount?: boolean
    status?: boolean
    analysisJson?: boolean
    rawAIResponse?: boolean
    errorMessage?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    prompt?: boolean | Submission$promptArgs<ExtArgs>
    analysisRuns?: boolean | Submission$analysisRunsArgs<ExtArgs>
    mistakes?: boolean | Submission$mistakesArgs<ExtArgs>
    _count?: boolean | SubmissionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    promptId?: boolean
    title?: boolean
    genre?: boolean
    body?: boolean
    wordCount?: boolean
    status?: boolean
    analysisJson?: boolean
    rawAIResponse?: boolean
    errorMessage?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    prompt?: boolean | Submission$promptArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    promptId?: boolean
    title?: boolean
    genre?: boolean
    body?: boolean
    wordCount?: boolean
    status?: boolean
    analysisJson?: boolean
    rawAIResponse?: boolean
    errorMessage?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    prompt?: boolean | Submission$promptArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectScalar = {
    id?: boolean
    userId?: boolean
    promptId?: boolean
    title?: boolean
    genre?: boolean
    body?: boolean
    wordCount?: boolean
    status?: boolean
    analysisJson?: boolean
    rawAIResponse?: boolean
    errorMessage?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "promptId" | "title" | "genre" | "body" | "wordCount" | "status" | "analysisJson" | "rawAIResponse" | "errorMessage" | "completedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["submission"]>
  export type SubmissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    prompt?: boolean | Submission$promptArgs<ExtArgs>
    analysisRuns?: boolean | Submission$analysisRunsArgs<ExtArgs>
    mistakes?: boolean | Submission$mistakesArgs<ExtArgs>
    _count?: boolean | SubmissionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubmissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    prompt?: boolean | Submission$promptArgs<ExtArgs>
  }
  export type SubmissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    prompt?: boolean | Submission$promptArgs<ExtArgs>
  }

  export type $SubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Submission"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      prompt: Prisma.$WritingPromptPayload<ExtArgs> | null
      analysisRuns: Prisma.$AnalysisRunPayload<ExtArgs>[]
      mistakes: Prisma.$MistakePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      promptId: string | null
      title: string | null
      genre: $Enums.SubmissionGenre
      body: string
      wordCount: number
      status: $Enums.SubmissionStatus
      analysisJson: Prisma.JsonValue | null
      rawAIResponse: string | null
      errorMessage: string | null
      completedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["submission"]>
    composites: {}
  }

  type SubmissionGetPayload<S extends boolean | null | undefined | SubmissionDefaultArgs> = $Result.GetResult<Prisma.$SubmissionPayload, S>

  type SubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubmissionCountAggregateInputType | true
    }

  export interface SubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Submission'], meta: { name: 'Submission' } }
    /**
     * Find zero or one Submission that matches the filter.
     * @param {SubmissionFindUniqueArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubmissionFindUniqueArgs>(args: SelectSubset<T, SubmissionFindUniqueArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Submission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubmissionFindUniqueOrThrowArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Submission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindFirstArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubmissionFindFirstArgs>(args?: SelectSubset<T, SubmissionFindFirstArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Submission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindFirstOrThrowArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Submissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Submissions
     * const submissions = await prisma.submission.findMany()
     * 
     * // Get first 10 Submissions
     * const submissions = await prisma.submission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const submissionWithIdOnly = await prisma.submission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubmissionFindManyArgs>(args?: SelectSubset<T, SubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Submission.
     * @param {SubmissionCreateArgs} args - Arguments to create a Submission.
     * @example
     * // Create one Submission
     * const Submission = await prisma.submission.create({
     *   data: {
     *     // ... data to create a Submission
     *   }
     * })
     * 
     */
    create<T extends SubmissionCreateArgs>(args: SelectSubset<T, SubmissionCreateArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Submissions.
     * @param {SubmissionCreateManyArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submission = await prisma.submission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubmissionCreateManyArgs>(args?: SelectSubset<T, SubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Submissions and returns the data saved in the database.
     * @param {SubmissionCreateManyAndReturnArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submission = await prisma.submission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Submissions and only return the `id`
     * const submissionWithIdOnly = await prisma.submission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubmissionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Submission.
     * @param {SubmissionDeleteArgs} args - Arguments to delete one Submission.
     * @example
     * // Delete one Submission
     * const Submission = await prisma.submission.delete({
     *   where: {
     *     // ... filter to delete one Submission
     *   }
     * })
     * 
     */
    delete<T extends SubmissionDeleteArgs>(args: SelectSubset<T, SubmissionDeleteArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Submission.
     * @param {SubmissionUpdateArgs} args - Arguments to update one Submission.
     * @example
     * // Update one Submission
     * const submission = await prisma.submission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubmissionUpdateArgs>(args: SelectSubset<T, SubmissionUpdateArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Submissions.
     * @param {SubmissionDeleteManyArgs} args - Arguments to filter Submissions to delete.
     * @example
     * // Delete a few Submissions
     * const { count } = await prisma.submission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubmissionDeleteManyArgs>(args?: SelectSubset<T, SubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Submissions
     * const submission = await prisma.submission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubmissionUpdateManyArgs>(args: SelectSubset<T, SubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submissions and returns the data updated in the database.
     * @param {SubmissionUpdateManyAndReturnArgs} args - Arguments to update many Submissions.
     * @example
     * // Update many Submissions
     * const submission = await prisma.submission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Submissions and only return the `id`
     * const submissionWithIdOnly = await prisma.submission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubmissionUpdateManyAndReturnArgs>(args: SelectSubset<T, SubmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Submission.
     * @param {SubmissionUpsertArgs} args - Arguments to update or create a Submission.
     * @example
     * // Update or create a Submission
     * const submission = await prisma.submission.upsert({
     *   create: {
     *     // ... data to create a Submission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Submission we want to update
     *   }
     * })
     */
    upsert<T extends SubmissionUpsertArgs>(args: SelectSubset<T, SubmissionUpsertArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionCountArgs} args - Arguments to filter Submissions to count.
     * @example
     * // Count the number of Submissions
     * const count = await prisma.submission.count({
     *   where: {
     *     // ... the filter for the Submissions we want to count
     *   }
     * })
    **/
    count<T extends SubmissionCountArgs>(
      args?: Subset<T, SubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubmissionAggregateArgs>(args: Subset<T, SubmissionAggregateArgs>): Prisma.PrismaPromise<GetSubmissionAggregateType<T>>

    /**
     * Group by Submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubmissionGroupByArgs['orderBy'] }
        : { orderBy?: SubmissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Submission model
   */
  readonly fields: SubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Submission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    prompt<T extends Submission$promptArgs<ExtArgs> = {}>(args?: Subset<T, Submission$promptArgs<ExtArgs>>): Prisma__WritingPromptClient<$Result.GetResult<Prisma.$WritingPromptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    analysisRuns<T extends Submission$analysisRunsArgs<ExtArgs> = {}>(args?: Subset<T, Submission$analysisRunsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysisRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mistakes<T extends Submission$mistakesArgs<ExtArgs> = {}>(args?: Subset<T, Submission$mistakesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MistakePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Submission model
   */
  interface SubmissionFieldRefs {
    readonly id: FieldRef<"Submission", 'String'>
    readonly userId: FieldRef<"Submission", 'String'>
    readonly promptId: FieldRef<"Submission", 'String'>
    readonly title: FieldRef<"Submission", 'String'>
    readonly genre: FieldRef<"Submission", 'SubmissionGenre'>
    readonly body: FieldRef<"Submission", 'String'>
    readonly wordCount: FieldRef<"Submission", 'Int'>
    readonly status: FieldRef<"Submission", 'SubmissionStatus'>
    readonly analysisJson: FieldRef<"Submission", 'Json'>
    readonly rawAIResponse: FieldRef<"Submission", 'String'>
    readonly errorMessage: FieldRef<"Submission", 'String'>
    readonly completedAt: FieldRef<"Submission", 'DateTime'>
    readonly createdAt: FieldRef<"Submission", 'DateTime'>
    readonly updatedAt: FieldRef<"Submission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Submission findUnique
   */
  export type SubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission findUniqueOrThrow
   */
  export type SubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission findFirst
   */
  export type SubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission findFirstOrThrow
   */
  export type SubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission findMany
   */
  export type SubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submissions to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission create
   */
  export type SubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Submission.
     */
    data: XOR<SubmissionCreateInput, SubmissionUncheckedCreateInput>
  }

  /**
   * Submission createMany
   */
  export type SubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Submissions.
     */
    data: SubmissionCreateManyInput | SubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Submission createManyAndReturn
   */
  export type SubmissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * The data used to create many Submissions.
     */
    data: SubmissionCreateManyInput | SubmissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Submission update
   */
  export type SubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Submission.
     */
    data: XOR<SubmissionUpdateInput, SubmissionUncheckedUpdateInput>
    /**
     * Choose, which Submission to update.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission updateMany
   */
  export type SubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Submissions.
     */
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyInput>
    /**
     * Filter which Submissions to update
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to update.
     */
    limit?: number
  }

  /**
   * Submission updateManyAndReturn
   */
  export type SubmissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * The data used to update Submissions.
     */
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyInput>
    /**
     * Filter which Submissions to update
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Submission upsert
   */
  export type SubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Submission to update in case it exists.
     */
    where: SubmissionWhereUniqueInput
    /**
     * In case the Submission found by the `where` argument doesn't exist, create a new Submission with this data.
     */
    create: XOR<SubmissionCreateInput, SubmissionUncheckedCreateInput>
    /**
     * In case the Submission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubmissionUpdateInput, SubmissionUncheckedUpdateInput>
  }

  /**
   * Submission delete
   */
  export type SubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter which Submission to delete.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission deleteMany
   */
  export type SubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Submissions to delete
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to delete.
     */
    limit?: number
  }

  /**
   * Submission.prompt
   */
  export type Submission$promptArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WritingPrompt
     */
    select?: WritingPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WritingPrompt
     */
    omit?: WritingPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WritingPromptInclude<ExtArgs> | null
    where?: WritingPromptWhereInput
  }

  /**
   * Submission.analysisRuns
   */
  export type Submission$analysisRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisRun
     */
    select?: AnalysisRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisRun
     */
    omit?: AnalysisRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisRunInclude<ExtArgs> | null
    where?: AnalysisRunWhereInput
    orderBy?: AnalysisRunOrderByWithRelationInput | AnalysisRunOrderByWithRelationInput[]
    cursor?: AnalysisRunWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnalysisRunScalarFieldEnum | AnalysisRunScalarFieldEnum[]
  }

  /**
   * Submission.mistakes
   */
  export type Submission$mistakesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mistake
     */
    select?: MistakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mistake
     */
    omit?: MistakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MistakeInclude<ExtArgs> | null
    where?: MistakeWhereInput
    orderBy?: MistakeOrderByWithRelationInput | MistakeOrderByWithRelationInput[]
    cursor?: MistakeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MistakeScalarFieldEnum | MistakeScalarFieldEnum[]
  }

  /**
   * Submission without action
   */
  export type SubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
  }


  /**
   * Model AnalysisRun
   */

  export type AggregateAnalysisRun = {
    _count: AnalysisRunCountAggregateOutputType | null
    _min: AnalysisRunMinAggregateOutputType | null
    _max: AnalysisRunMaxAggregateOutputType | null
  }

  export type AnalysisRunMinAggregateOutputType = {
    id: string | null
    submissionId: string | null
    status: $Enums.AnalysisStatus | null
    analyzerModel: string | null
    analyzerVersion: string | null
    rulesetVersion: string | null
    errorMessage: string | null
    startedAt: Date | null
    completedAt: Date | null
  }

  export type AnalysisRunMaxAggregateOutputType = {
    id: string | null
    submissionId: string | null
    status: $Enums.AnalysisStatus | null
    analyzerModel: string | null
    analyzerVersion: string | null
    rulesetVersion: string | null
    errorMessage: string | null
    startedAt: Date | null
    completedAt: Date | null
  }

  export type AnalysisRunCountAggregateOutputType = {
    id: number
    submissionId: number
    status: number
    analyzerModel: number
    analyzerVersion: number
    rulesetVersion: number
    summaryJson: number
    rawModelOutput: number
    errorMessage: number
    startedAt: number
    completedAt: number
    _all: number
  }


  export type AnalysisRunMinAggregateInputType = {
    id?: true
    submissionId?: true
    status?: true
    analyzerModel?: true
    analyzerVersion?: true
    rulesetVersion?: true
    errorMessage?: true
    startedAt?: true
    completedAt?: true
  }

  export type AnalysisRunMaxAggregateInputType = {
    id?: true
    submissionId?: true
    status?: true
    analyzerModel?: true
    analyzerVersion?: true
    rulesetVersion?: true
    errorMessage?: true
    startedAt?: true
    completedAt?: true
  }

  export type AnalysisRunCountAggregateInputType = {
    id?: true
    submissionId?: true
    status?: true
    analyzerModel?: true
    analyzerVersion?: true
    rulesetVersion?: true
    summaryJson?: true
    rawModelOutput?: true
    errorMessage?: true
    startedAt?: true
    completedAt?: true
    _all?: true
  }

  export type AnalysisRunAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnalysisRun to aggregate.
     */
    where?: AnalysisRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalysisRuns to fetch.
     */
    orderBy?: AnalysisRunOrderByWithRelationInput | AnalysisRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnalysisRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalysisRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalysisRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AnalysisRuns
    **/
    _count?: true | AnalysisRunCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnalysisRunMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnalysisRunMaxAggregateInputType
  }

  export type GetAnalysisRunAggregateType<T extends AnalysisRunAggregateArgs> = {
        [P in keyof T & keyof AggregateAnalysisRun]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnalysisRun[P]>
      : GetScalarType<T[P], AggregateAnalysisRun[P]>
  }




  export type AnalysisRunGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalysisRunWhereInput
    orderBy?: AnalysisRunOrderByWithAggregationInput | AnalysisRunOrderByWithAggregationInput[]
    by: AnalysisRunScalarFieldEnum[] | AnalysisRunScalarFieldEnum
    having?: AnalysisRunScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnalysisRunCountAggregateInputType | true
    _min?: AnalysisRunMinAggregateInputType
    _max?: AnalysisRunMaxAggregateInputType
  }

  export type AnalysisRunGroupByOutputType = {
    id: string
    submissionId: string
    status: $Enums.AnalysisStatus
    analyzerModel: string | null
    analyzerVersion: string | null
    rulesetVersion: string | null
    summaryJson: JsonValue | null
    rawModelOutput: JsonValue | null
    errorMessage: string | null
    startedAt: Date
    completedAt: Date | null
    _count: AnalysisRunCountAggregateOutputType | null
    _min: AnalysisRunMinAggregateOutputType | null
    _max: AnalysisRunMaxAggregateOutputType | null
  }

  type GetAnalysisRunGroupByPayload<T extends AnalysisRunGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnalysisRunGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnalysisRunGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnalysisRunGroupByOutputType[P]>
            : GetScalarType<T[P], AnalysisRunGroupByOutputType[P]>
        }
      >
    >


  export type AnalysisRunSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    submissionId?: boolean
    status?: boolean
    analyzerModel?: boolean
    analyzerVersion?: boolean
    rulesetVersion?: boolean
    summaryJson?: boolean
    rawModelOutput?: boolean
    errorMessage?: boolean
    startedAt?: boolean
    completedAt?: boolean
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
    mistakes?: boolean | AnalysisRun$mistakesArgs<ExtArgs>
    _count?: boolean | AnalysisRunCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["analysisRun"]>

  export type AnalysisRunSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    submissionId?: boolean
    status?: boolean
    analyzerModel?: boolean
    analyzerVersion?: boolean
    rulesetVersion?: boolean
    summaryJson?: boolean
    rawModelOutput?: boolean
    errorMessage?: boolean
    startedAt?: boolean
    completedAt?: boolean
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["analysisRun"]>

  export type AnalysisRunSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    submissionId?: boolean
    status?: boolean
    analyzerModel?: boolean
    analyzerVersion?: boolean
    rulesetVersion?: boolean
    summaryJson?: boolean
    rawModelOutput?: boolean
    errorMessage?: boolean
    startedAt?: boolean
    completedAt?: boolean
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["analysisRun"]>

  export type AnalysisRunSelectScalar = {
    id?: boolean
    submissionId?: boolean
    status?: boolean
    analyzerModel?: boolean
    analyzerVersion?: boolean
    rulesetVersion?: boolean
    summaryJson?: boolean
    rawModelOutput?: boolean
    errorMessage?: boolean
    startedAt?: boolean
    completedAt?: boolean
  }

  export type AnalysisRunOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "submissionId" | "status" | "analyzerModel" | "analyzerVersion" | "rulesetVersion" | "summaryJson" | "rawModelOutput" | "errorMessage" | "startedAt" | "completedAt", ExtArgs["result"]["analysisRun"]>
  export type AnalysisRunInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
    mistakes?: boolean | AnalysisRun$mistakesArgs<ExtArgs>
    _count?: boolean | AnalysisRunCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AnalysisRunIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
  }
  export type AnalysisRunIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
  }

  export type $AnalysisRunPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AnalysisRun"
    objects: {
      submission: Prisma.$SubmissionPayload<ExtArgs>
      mistakes: Prisma.$MistakePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      submissionId: string
      status: $Enums.AnalysisStatus
      analyzerModel: string | null
      analyzerVersion: string | null
      rulesetVersion: string | null
      summaryJson: Prisma.JsonValue | null
      rawModelOutput: Prisma.JsonValue | null
      errorMessage: string | null
      startedAt: Date
      completedAt: Date | null
    }, ExtArgs["result"]["analysisRun"]>
    composites: {}
  }

  type AnalysisRunGetPayload<S extends boolean | null | undefined | AnalysisRunDefaultArgs> = $Result.GetResult<Prisma.$AnalysisRunPayload, S>

  type AnalysisRunCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnalysisRunFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnalysisRunCountAggregateInputType | true
    }

  export interface AnalysisRunDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AnalysisRun'], meta: { name: 'AnalysisRun' } }
    /**
     * Find zero or one AnalysisRun that matches the filter.
     * @param {AnalysisRunFindUniqueArgs} args - Arguments to find a AnalysisRun
     * @example
     * // Get one AnalysisRun
     * const analysisRun = await prisma.analysisRun.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnalysisRunFindUniqueArgs>(args: SelectSubset<T, AnalysisRunFindUniqueArgs<ExtArgs>>): Prisma__AnalysisRunClient<$Result.GetResult<Prisma.$AnalysisRunPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AnalysisRun that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnalysisRunFindUniqueOrThrowArgs} args - Arguments to find a AnalysisRun
     * @example
     * // Get one AnalysisRun
     * const analysisRun = await prisma.analysisRun.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnalysisRunFindUniqueOrThrowArgs>(args: SelectSubset<T, AnalysisRunFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnalysisRunClient<$Result.GetResult<Prisma.$AnalysisRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnalysisRun that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisRunFindFirstArgs} args - Arguments to find a AnalysisRun
     * @example
     * // Get one AnalysisRun
     * const analysisRun = await prisma.analysisRun.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnalysisRunFindFirstArgs>(args?: SelectSubset<T, AnalysisRunFindFirstArgs<ExtArgs>>): Prisma__AnalysisRunClient<$Result.GetResult<Prisma.$AnalysisRunPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnalysisRun that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisRunFindFirstOrThrowArgs} args - Arguments to find a AnalysisRun
     * @example
     * // Get one AnalysisRun
     * const analysisRun = await prisma.analysisRun.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnalysisRunFindFirstOrThrowArgs>(args?: SelectSubset<T, AnalysisRunFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnalysisRunClient<$Result.GetResult<Prisma.$AnalysisRunPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AnalysisRuns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisRunFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AnalysisRuns
     * const analysisRuns = await prisma.analysisRun.findMany()
     * 
     * // Get first 10 AnalysisRuns
     * const analysisRuns = await prisma.analysisRun.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const analysisRunWithIdOnly = await prisma.analysisRun.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnalysisRunFindManyArgs>(args?: SelectSubset<T, AnalysisRunFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysisRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AnalysisRun.
     * @param {AnalysisRunCreateArgs} args - Arguments to create a AnalysisRun.
     * @example
     * // Create one AnalysisRun
     * const AnalysisRun = await prisma.analysisRun.create({
     *   data: {
     *     // ... data to create a AnalysisRun
     *   }
     * })
     * 
     */
    create<T extends AnalysisRunCreateArgs>(args: SelectSubset<T, AnalysisRunCreateArgs<ExtArgs>>): Prisma__AnalysisRunClient<$Result.GetResult<Prisma.$AnalysisRunPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AnalysisRuns.
     * @param {AnalysisRunCreateManyArgs} args - Arguments to create many AnalysisRuns.
     * @example
     * // Create many AnalysisRuns
     * const analysisRun = await prisma.analysisRun.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnalysisRunCreateManyArgs>(args?: SelectSubset<T, AnalysisRunCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AnalysisRuns and returns the data saved in the database.
     * @param {AnalysisRunCreateManyAndReturnArgs} args - Arguments to create many AnalysisRuns.
     * @example
     * // Create many AnalysisRuns
     * const analysisRun = await prisma.analysisRun.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AnalysisRuns and only return the `id`
     * const analysisRunWithIdOnly = await prisma.analysisRun.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnalysisRunCreateManyAndReturnArgs>(args?: SelectSubset<T, AnalysisRunCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysisRunPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AnalysisRun.
     * @param {AnalysisRunDeleteArgs} args - Arguments to delete one AnalysisRun.
     * @example
     * // Delete one AnalysisRun
     * const AnalysisRun = await prisma.analysisRun.delete({
     *   where: {
     *     // ... filter to delete one AnalysisRun
     *   }
     * })
     * 
     */
    delete<T extends AnalysisRunDeleteArgs>(args: SelectSubset<T, AnalysisRunDeleteArgs<ExtArgs>>): Prisma__AnalysisRunClient<$Result.GetResult<Prisma.$AnalysisRunPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AnalysisRun.
     * @param {AnalysisRunUpdateArgs} args - Arguments to update one AnalysisRun.
     * @example
     * // Update one AnalysisRun
     * const analysisRun = await prisma.analysisRun.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnalysisRunUpdateArgs>(args: SelectSubset<T, AnalysisRunUpdateArgs<ExtArgs>>): Prisma__AnalysisRunClient<$Result.GetResult<Prisma.$AnalysisRunPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AnalysisRuns.
     * @param {AnalysisRunDeleteManyArgs} args - Arguments to filter AnalysisRuns to delete.
     * @example
     * // Delete a few AnalysisRuns
     * const { count } = await prisma.analysisRun.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnalysisRunDeleteManyArgs>(args?: SelectSubset<T, AnalysisRunDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnalysisRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisRunUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AnalysisRuns
     * const analysisRun = await prisma.analysisRun.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnalysisRunUpdateManyArgs>(args: SelectSubset<T, AnalysisRunUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnalysisRuns and returns the data updated in the database.
     * @param {AnalysisRunUpdateManyAndReturnArgs} args - Arguments to update many AnalysisRuns.
     * @example
     * // Update many AnalysisRuns
     * const analysisRun = await prisma.analysisRun.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AnalysisRuns and only return the `id`
     * const analysisRunWithIdOnly = await prisma.analysisRun.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AnalysisRunUpdateManyAndReturnArgs>(args: SelectSubset<T, AnalysisRunUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysisRunPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AnalysisRun.
     * @param {AnalysisRunUpsertArgs} args - Arguments to update or create a AnalysisRun.
     * @example
     * // Update or create a AnalysisRun
     * const analysisRun = await prisma.analysisRun.upsert({
     *   create: {
     *     // ... data to create a AnalysisRun
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AnalysisRun we want to update
     *   }
     * })
     */
    upsert<T extends AnalysisRunUpsertArgs>(args: SelectSubset<T, AnalysisRunUpsertArgs<ExtArgs>>): Prisma__AnalysisRunClient<$Result.GetResult<Prisma.$AnalysisRunPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AnalysisRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisRunCountArgs} args - Arguments to filter AnalysisRuns to count.
     * @example
     * // Count the number of AnalysisRuns
     * const count = await prisma.analysisRun.count({
     *   where: {
     *     // ... the filter for the AnalysisRuns we want to count
     *   }
     * })
    **/
    count<T extends AnalysisRunCountArgs>(
      args?: Subset<T, AnalysisRunCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnalysisRunCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AnalysisRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisRunAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnalysisRunAggregateArgs>(args: Subset<T, AnalysisRunAggregateArgs>): Prisma.PrismaPromise<GetAnalysisRunAggregateType<T>>

    /**
     * Group by AnalysisRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisRunGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnalysisRunGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnalysisRunGroupByArgs['orderBy'] }
        : { orderBy?: AnalysisRunGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnalysisRunGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnalysisRunGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AnalysisRun model
   */
  readonly fields: AnalysisRunFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AnalysisRun.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnalysisRunClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    submission<T extends SubmissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubmissionDefaultArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mistakes<T extends AnalysisRun$mistakesArgs<ExtArgs> = {}>(args?: Subset<T, AnalysisRun$mistakesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MistakePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AnalysisRun model
   */
  interface AnalysisRunFieldRefs {
    readonly id: FieldRef<"AnalysisRun", 'String'>
    readonly submissionId: FieldRef<"AnalysisRun", 'String'>
    readonly status: FieldRef<"AnalysisRun", 'AnalysisStatus'>
    readonly analyzerModel: FieldRef<"AnalysisRun", 'String'>
    readonly analyzerVersion: FieldRef<"AnalysisRun", 'String'>
    readonly rulesetVersion: FieldRef<"AnalysisRun", 'String'>
    readonly summaryJson: FieldRef<"AnalysisRun", 'Json'>
    readonly rawModelOutput: FieldRef<"AnalysisRun", 'Json'>
    readonly errorMessage: FieldRef<"AnalysisRun", 'String'>
    readonly startedAt: FieldRef<"AnalysisRun", 'DateTime'>
    readonly completedAt: FieldRef<"AnalysisRun", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AnalysisRun findUnique
   */
  export type AnalysisRunFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisRun
     */
    select?: AnalysisRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisRun
     */
    omit?: AnalysisRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisRunInclude<ExtArgs> | null
    /**
     * Filter, which AnalysisRun to fetch.
     */
    where: AnalysisRunWhereUniqueInput
  }

  /**
   * AnalysisRun findUniqueOrThrow
   */
  export type AnalysisRunFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisRun
     */
    select?: AnalysisRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisRun
     */
    omit?: AnalysisRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisRunInclude<ExtArgs> | null
    /**
     * Filter, which AnalysisRun to fetch.
     */
    where: AnalysisRunWhereUniqueInput
  }

  /**
   * AnalysisRun findFirst
   */
  export type AnalysisRunFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisRun
     */
    select?: AnalysisRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisRun
     */
    omit?: AnalysisRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisRunInclude<ExtArgs> | null
    /**
     * Filter, which AnalysisRun to fetch.
     */
    where?: AnalysisRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalysisRuns to fetch.
     */
    orderBy?: AnalysisRunOrderByWithRelationInput | AnalysisRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnalysisRuns.
     */
    cursor?: AnalysisRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalysisRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalysisRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnalysisRuns.
     */
    distinct?: AnalysisRunScalarFieldEnum | AnalysisRunScalarFieldEnum[]
  }

  /**
   * AnalysisRun findFirstOrThrow
   */
  export type AnalysisRunFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisRun
     */
    select?: AnalysisRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisRun
     */
    omit?: AnalysisRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisRunInclude<ExtArgs> | null
    /**
     * Filter, which AnalysisRun to fetch.
     */
    where?: AnalysisRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalysisRuns to fetch.
     */
    orderBy?: AnalysisRunOrderByWithRelationInput | AnalysisRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnalysisRuns.
     */
    cursor?: AnalysisRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalysisRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalysisRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnalysisRuns.
     */
    distinct?: AnalysisRunScalarFieldEnum | AnalysisRunScalarFieldEnum[]
  }

  /**
   * AnalysisRun findMany
   */
  export type AnalysisRunFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisRun
     */
    select?: AnalysisRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisRun
     */
    omit?: AnalysisRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisRunInclude<ExtArgs> | null
    /**
     * Filter, which AnalysisRuns to fetch.
     */
    where?: AnalysisRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalysisRuns to fetch.
     */
    orderBy?: AnalysisRunOrderByWithRelationInput | AnalysisRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AnalysisRuns.
     */
    cursor?: AnalysisRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalysisRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalysisRuns.
     */
    skip?: number
    distinct?: AnalysisRunScalarFieldEnum | AnalysisRunScalarFieldEnum[]
  }

  /**
   * AnalysisRun create
   */
  export type AnalysisRunCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisRun
     */
    select?: AnalysisRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisRun
     */
    omit?: AnalysisRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisRunInclude<ExtArgs> | null
    /**
     * The data needed to create a AnalysisRun.
     */
    data: XOR<AnalysisRunCreateInput, AnalysisRunUncheckedCreateInput>
  }

  /**
   * AnalysisRun createMany
   */
  export type AnalysisRunCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AnalysisRuns.
     */
    data: AnalysisRunCreateManyInput | AnalysisRunCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnalysisRun createManyAndReturn
   */
  export type AnalysisRunCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisRun
     */
    select?: AnalysisRunSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisRun
     */
    omit?: AnalysisRunOmit<ExtArgs> | null
    /**
     * The data used to create many AnalysisRuns.
     */
    data: AnalysisRunCreateManyInput | AnalysisRunCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisRunIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnalysisRun update
   */
  export type AnalysisRunUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisRun
     */
    select?: AnalysisRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisRun
     */
    omit?: AnalysisRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisRunInclude<ExtArgs> | null
    /**
     * The data needed to update a AnalysisRun.
     */
    data: XOR<AnalysisRunUpdateInput, AnalysisRunUncheckedUpdateInput>
    /**
     * Choose, which AnalysisRun to update.
     */
    where: AnalysisRunWhereUniqueInput
  }

  /**
   * AnalysisRun updateMany
   */
  export type AnalysisRunUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AnalysisRuns.
     */
    data: XOR<AnalysisRunUpdateManyMutationInput, AnalysisRunUncheckedUpdateManyInput>
    /**
     * Filter which AnalysisRuns to update
     */
    where?: AnalysisRunWhereInput
    /**
     * Limit how many AnalysisRuns to update.
     */
    limit?: number
  }

  /**
   * AnalysisRun updateManyAndReturn
   */
  export type AnalysisRunUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisRun
     */
    select?: AnalysisRunSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisRun
     */
    omit?: AnalysisRunOmit<ExtArgs> | null
    /**
     * The data used to update AnalysisRuns.
     */
    data: XOR<AnalysisRunUpdateManyMutationInput, AnalysisRunUncheckedUpdateManyInput>
    /**
     * Filter which AnalysisRuns to update
     */
    where?: AnalysisRunWhereInput
    /**
     * Limit how many AnalysisRuns to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisRunIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnalysisRun upsert
   */
  export type AnalysisRunUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisRun
     */
    select?: AnalysisRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisRun
     */
    omit?: AnalysisRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisRunInclude<ExtArgs> | null
    /**
     * The filter to search for the AnalysisRun to update in case it exists.
     */
    where: AnalysisRunWhereUniqueInput
    /**
     * In case the AnalysisRun found by the `where` argument doesn't exist, create a new AnalysisRun with this data.
     */
    create: XOR<AnalysisRunCreateInput, AnalysisRunUncheckedCreateInput>
    /**
     * In case the AnalysisRun was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnalysisRunUpdateInput, AnalysisRunUncheckedUpdateInput>
  }

  /**
   * AnalysisRun delete
   */
  export type AnalysisRunDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisRun
     */
    select?: AnalysisRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisRun
     */
    omit?: AnalysisRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisRunInclude<ExtArgs> | null
    /**
     * Filter which AnalysisRun to delete.
     */
    where: AnalysisRunWhereUniqueInput
  }

  /**
   * AnalysisRun deleteMany
   */
  export type AnalysisRunDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnalysisRuns to delete
     */
    where?: AnalysisRunWhereInput
    /**
     * Limit how many AnalysisRuns to delete.
     */
    limit?: number
  }

  /**
   * AnalysisRun.mistakes
   */
  export type AnalysisRun$mistakesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mistake
     */
    select?: MistakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mistake
     */
    omit?: MistakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MistakeInclude<ExtArgs> | null
    where?: MistakeWhereInput
    orderBy?: MistakeOrderByWithRelationInput | MistakeOrderByWithRelationInput[]
    cursor?: MistakeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MistakeScalarFieldEnum | MistakeScalarFieldEnum[]
  }

  /**
   * AnalysisRun without action
   */
  export type AnalysisRunDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisRun
     */
    select?: AnalysisRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisRun
     */
    omit?: AnalysisRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisRunInclude<ExtArgs> | null
  }


  /**
   * Model Mistake
   */

  export type AggregateMistake = {
    _count: MistakeCountAggregateOutputType | null
    _avg: MistakeAvgAggregateOutputType | null
    _sum: MistakeSumAggregateOutputType | null
    _min: MistakeMinAggregateOutputType | null
    _max: MistakeMaxAggregateOutputType | null
  }

  export type MistakeAvgAggregateOutputType = {
    startOffset: number | null
    endOffset: number | null
    confidence: number | null
  }

  export type MistakeSumAggregateOutputType = {
    startOffset: number | null
    endOffset: number | null
    confidence: number | null
  }

  export type MistakeMinAggregateOutputType = {
    id: string | null
    submissionId: string | null
    analysisRunId: string | null
    pillar: $Enums.PillarCode | null
    subtype: string | null
    severity: $Enums.MistakeSeverity | null
    startOffset: number | null
    endOffset: number | null
    surfaceText: string | null
    message: string | null
    suggestion: string | null
    canonicalRuleId: string | null
    confidence: number | null
    createdAt: Date | null
  }

  export type MistakeMaxAggregateOutputType = {
    id: string | null
    submissionId: string | null
    analysisRunId: string | null
    pillar: $Enums.PillarCode | null
    subtype: string | null
    severity: $Enums.MistakeSeverity | null
    startOffset: number | null
    endOffset: number | null
    surfaceText: string | null
    message: string | null
    suggestion: string | null
    canonicalRuleId: string | null
    confidence: number | null
    createdAt: Date | null
  }

  export type MistakeCountAggregateOutputType = {
    id: number
    submissionId: number
    analysisRunId: number
    pillar: number
    subtype: number
    severity: number
    startOffset: number
    endOffset: number
    surfaceText: number
    message: number
    suggestion: number
    canonicalRuleId: number
    confidence: number
    createdAt: number
    _all: number
  }


  export type MistakeAvgAggregateInputType = {
    startOffset?: true
    endOffset?: true
    confidence?: true
  }

  export type MistakeSumAggregateInputType = {
    startOffset?: true
    endOffset?: true
    confidence?: true
  }

  export type MistakeMinAggregateInputType = {
    id?: true
    submissionId?: true
    analysisRunId?: true
    pillar?: true
    subtype?: true
    severity?: true
    startOffset?: true
    endOffset?: true
    surfaceText?: true
    message?: true
    suggestion?: true
    canonicalRuleId?: true
    confidence?: true
    createdAt?: true
  }

  export type MistakeMaxAggregateInputType = {
    id?: true
    submissionId?: true
    analysisRunId?: true
    pillar?: true
    subtype?: true
    severity?: true
    startOffset?: true
    endOffset?: true
    surfaceText?: true
    message?: true
    suggestion?: true
    canonicalRuleId?: true
    confidence?: true
    createdAt?: true
  }

  export type MistakeCountAggregateInputType = {
    id?: true
    submissionId?: true
    analysisRunId?: true
    pillar?: true
    subtype?: true
    severity?: true
    startOffset?: true
    endOffset?: true
    surfaceText?: true
    message?: true
    suggestion?: true
    canonicalRuleId?: true
    confidence?: true
    createdAt?: true
    _all?: true
  }

  export type MistakeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mistake to aggregate.
     */
    where?: MistakeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mistakes to fetch.
     */
    orderBy?: MistakeOrderByWithRelationInput | MistakeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MistakeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mistakes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mistakes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mistakes
    **/
    _count?: true | MistakeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MistakeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MistakeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MistakeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MistakeMaxAggregateInputType
  }

  export type GetMistakeAggregateType<T extends MistakeAggregateArgs> = {
        [P in keyof T & keyof AggregateMistake]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMistake[P]>
      : GetScalarType<T[P], AggregateMistake[P]>
  }




  export type MistakeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MistakeWhereInput
    orderBy?: MistakeOrderByWithAggregationInput | MistakeOrderByWithAggregationInput[]
    by: MistakeScalarFieldEnum[] | MistakeScalarFieldEnum
    having?: MistakeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MistakeCountAggregateInputType | true
    _avg?: MistakeAvgAggregateInputType
    _sum?: MistakeSumAggregateInputType
    _min?: MistakeMinAggregateInputType
    _max?: MistakeMaxAggregateInputType
  }

  export type MistakeGroupByOutputType = {
    id: string
    submissionId: string
    analysisRunId: string
    pillar: $Enums.PillarCode
    subtype: string
    severity: $Enums.MistakeSeverity | null
    startOffset: number
    endOffset: number
    surfaceText: string | null
    message: string
    suggestion: string | null
    canonicalRuleId: string | null
    confidence: number | null
    createdAt: Date
    _count: MistakeCountAggregateOutputType | null
    _avg: MistakeAvgAggregateOutputType | null
    _sum: MistakeSumAggregateOutputType | null
    _min: MistakeMinAggregateOutputType | null
    _max: MistakeMaxAggregateOutputType | null
  }

  type GetMistakeGroupByPayload<T extends MistakeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MistakeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MistakeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MistakeGroupByOutputType[P]>
            : GetScalarType<T[P], MistakeGroupByOutputType[P]>
        }
      >
    >


  export type MistakeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    submissionId?: boolean
    analysisRunId?: boolean
    pillar?: boolean
    subtype?: boolean
    severity?: boolean
    startOffset?: boolean
    endOffset?: boolean
    surfaceText?: boolean
    message?: boolean
    suggestion?: boolean
    canonicalRuleId?: boolean
    confidence?: boolean
    createdAt?: boolean
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
    analysisRun?: boolean | AnalysisRunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mistake"]>

  export type MistakeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    submissionId?: boolean
    analysisRunId?: boolean
    pillar?: boolean
    subtype?: boolean
    severity?: boolean
    startOffset?: boolean
    endOffset?: boolean
    surfaceText?: boolean
    message?: boolean
    suggestion?: boolean
    canonicalRuleId?: boolean
    confidence?: boolean
    createdAt?: boolean
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
    analysisRun?: boolean | AnalysisRunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mistake"]>

  export type MistakeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    submissionId?: boolean
    analysisRunId?: boolean
    pillar?: boolean
    subtype?: boolean
    severity?: boolean
    startOffset?: boolean
    endOffset?: boolean
    surfaceText?: boolean
    message?: boolean
    suggestion?: boolean
    canonicalRuleId?: boolean
    confidence?: boolean
    createdAt?: boolean
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
    analysisRun?: boolean | AnalysisRunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mistake"]>

  export type MistakeSelectScalar = {
    id?: boolean
    submissionId?: boolean
    analysisRunId?: boolean
    pillar?: boolean
    subtype?: boolean
    severity?: boolean
    startOffset?: boolean
    endOffset?: boolean
    surfaceText?: boolean
    message?: boolean
    suggestion?: boolean
    canonicalRuleId?: boolean
    confidence?: boolean
    createdAt?: boolean
  }

  export type MistakeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "submissionId" | "analysisRunId" | "pillar" | "subtype" | "severity" | "startOffset" | "endOffset" | "surfaceText" | "message" | "suggestion" | "canonicalRuleId" | "confidence" | "createdAt", ExtArgs["result"]["mistake"]>
  export type MistakeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
    analysisRun?: boolean | AnalysisRunDefaultArgs<ExtArgs>
  }
  export type MistakeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
    analysisRun?: boolean | AnalysisRunDefaultArgs<ExtArgs>
  }
  export type MistakeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
    analysisRun?: boolean | AnalysisRunDefaultArgs<ExtArgs>
  }

  export type $MistakePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mistake"
    objects: {
      submission: Prisma.$SubmissionPayload<ExtArgs>
      analysisRun: Prisma.$AnalysisRunPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      submissionId: string
      analysisRunId: string
      pillar: $Enums.PillarCode
      subtype: string
      severity: $Enums.MistakeSeverity | null
      startOffset: number
      endOffset: number
      surfaceText: string | null
      message: string
      suggestion: string | null
      canonicalRuleId: string | null
      confidence: number | null
      createdAt: Date
    }, ExtArgs["result"]["mistake"]>
    composites: {}
  }

  type MistakeGetPayload<S extends boolean | null | undefined | MistakeDefaultArgs> = $Result.GetResult<Prisma.$MistakePayload, S>

  type MistakeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MistakeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MistakeCountAggregateInputType | true
    }

  export interface MistakeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mistake'], meta: { name: 'Mistake' } }
    /**
     * Find zero or one Mistake that matches the filter.
     * @param {MistakeFindUniqueArgs} args - Arguments to find a Mistake
     * @example
     * // Get one Mistake
     * const mistake = await prisma.mistake.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MistakeFindUniqueArgs>(args: SelectSubset<T, MistakeFindUniqueArgs<ExtArgs>>): Prisma__MistakeClient<$Result.GetResult<Prisma.$MistakePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mistake that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MistakeFindUniqueOrThrowArgs} args - Arguments to find a Mistake
     * @example
     * // Get one Mistake
     * const mistake = await prisma.mistake.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MistakeFindUniqueOrThrowArgs>(args: SelectSubset<T, MistakeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MistakeClient<$Result.GetResult<Prisma.$MistakePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mistake that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MistakeFindFirstArgs} args - Arguments to find a Mistake
     * @example
     * // Get one Mistake
     * const mistake = await prisma.mistake.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MistakeFindFirstArgs>(args?: SelectSubset<T, MistakeFindFirstArgs<ExtArgs>>): Prisma__MistakeClient<$Result.GetResult<Prisma.$MistakePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mistake that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MistakeFindFirstOrThrowArgs} args - Arguments to find a Mistake
     * @example
     * // Get one Mistake
     * const mistake = await prisma.mistake.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MistakeFindFirstOrThrowArgs>(args?: SelectSubset<T, MistakeFindFirstOrThrowArgs<ExtArgs>>): Prisma__MistakeClient<$Result.GetResult<Prisma.$MistakePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mistakes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MistakeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mistakes
     * const mistakes = await prisma.mistake.findMany()
     * 
     * // Get first 10 Mistakes
     * const mistakes = await prisma.mistake.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mistakeWithIdOnly = await prisma.mistake.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MistakeFindManyArgs>(args?: SelectSubset<T, MistakeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MistakePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mistake.
     * @param {MistakeCreateArgs} args - Arguments to create a Mistake.
     * @example
     * // Create one Mistake
     * const Mistake = await prisma.mistake.create({
     *   data: {
     *     // ... data to create a Mistake
     *   }
     * })
     * 
     */
    create<T extends MistakeCreateArgs>(args: SelectSubset<T, MistakeCreateArgs<ExtArgs>>): Prisma__MistakeClient<$Result.GetResult<Prisma.$MistakePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mistakes.
     * @param {MistakeCreateManyArgs} args - Arguments to create many Mistakes.
     * @example
     * // Create many Mistakes
     * const mistake = await prisma.mistake.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MistakeCreateManyArgs>(args?: SelectSubset<T, MistakeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Mistakes and returns the data saved in the database.
     * @param {MistakeCreateManyAndReturnArgs} args - Arguments to create many Mistakes.
     * @example
     * // Create many Mistakes
     * const mistake = await prisma.mistake.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Mistakes and only return the `id`
     * const mistakeWithIdOnly = await prisma.mistake.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MistakeCreateManyAndReturnArgs>(args?: SelectSubset<T, MistakeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MistakePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mistake.
     * @param {MistakeDeleteArgs} args - Arguments to delete one Mistake.
     * @example
     * // Delete one Mistake
     * const Mistake = await prisma.mistake.delete({
     *   where: {
     *     // ... filter to delete one Mistake
     *   }
     * })
     * 
     */
    delete<T extends MistakeDeleteArgs>(args: SelectSubset<T, MistakeDeleteArgs<ExtArgs>>): Prisma__MistakeClient<$Result.GetResult<Prisma.$MistakePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mistake.
     * @param {MistakeUpdateArgs} args - Arguments to update one Mistake.
     * @example
     * // Update one Mistake
     * const mistake = await prisma.mistake.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MistakeUpdateArgs>(args: SelectSubset<T, MistakeUpdateArgs<ExtArgs>>): Prisma__MistakeClient<$Result.GetResult<Prisma.$MistakePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mistakes.
     * @param {MistakeDeleteManyArgs} args - Arguments to filter Mistakes to delete.
     * @example
     * // Delete a few Mistakes
     * const { count } = await prisma.mistake.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MistakeDeleteManyArgs>(args?: SelectSubset<T, MistakeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mistakes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MistakeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mistakes
     * const mistake = await prisma.mistake.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MistakeUpdateManyArgs>(args: SelectSubset<T, MistakeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mistakes and returns the data updated in the database.
     * @param {MistakeUpdateManyAndReturnArgs} args - Arguments to update many Mistakes.
     * @example
     * // Update many Mistakes
     * const mistake = await prisma.mistake.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Mistakes and only return the `id`
     * const mistakeWithIdOnly = await prisma.mistake.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MistakeUpdateManyAndReturnArgs>(args: SelectSubset<T, MistakeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MistakePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mistake.
     * @param {MistakeUpsertArgs} args - Arguments to update or create a Mistake.
     * @example
     * // Update or create a Mistake
     * const mistake = await prisma.mistake.upsert({
     *   create: {
     *     // ... data to create a Mistake
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mistake we want to update
     *   }
     * })
     */
    upsert<T extends MistakeUpsertArgs>(args: SelectSubset<T, MistakeUpsertArgs<ExtArgs>>): Prisma__MistakeClient<$Result.GetResult<Prisma.$MistakePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mistakes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MistakeCountArgs} args - Arguments to filter Mistakes to count.
     * @example
     * // Count the number of Mistakes
     * const count = await prisma.mistake.count({
     *   where: {
     *     // ... the filter for the Mistakes we want to count
     *   }
     * })
    **/
    count<T extends MistakeCountArgs>(
      args?: Subset<T, MistakeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MistakeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mistake.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MistakeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MistakeAggregateArgs>(args: Subset<T, MistakeAggregateArgs>): Prisma.PrismaPromise<GetMistakeAggregateType<T>>

    /**
     * Group by Mistake.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MistakeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MistakeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MistakeGroupByArgs['orderBy'] }
        : { orderBy?: MistakeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MistakeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMistakeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mistake model
   */
  readonly fields: MistakeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mistake.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MistakeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    submission<T extends SubmissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubmissionDefaultArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    analysisRun<T extends AnalysisRunDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnalysisRunDefaultArgs<ExtArgs>>): Prisma__AnalysisRunClient<$Result.GetResult<Prisma.$AnalysisRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Mistake model
   */
  interface MistakeFieldRefs {
    readonly id: FieldRef<"Mistake", 'String'>
    readonly submissionId: FieldRef<"Mistake", 'String'>
    readonly analysisRunId: FieldRef<"Mistake", 'String'>
    readonly pillar: FieldRef<"Mistake", 'PillarCode'>
    readonly subtype: FieldRef<"Mistake", 'String'>
    readonly severity: FieldRef<"Mistake", 'MistakeSeverity'>
    readonly startOffset: FieldRef<"Mistake", 'Int'>
    readonly endOffset: FieldRef<"Mistake", 'Int'>
    readonly surfaceText: FieldRef<"Mistake", 'String'>
    readonly message: FieldRef<"Mistake", 'String'>
    readonly suggestion: FieldRef<"Mistake", 'String'>
    readonly canonicalRuleId: FieldRef<"Mistake", 'String'>
    readonly confidence: FieldRef<"Mistake", 'Float'>
    readonly createdAt: FieldRef<"Mistake", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Mistake findUnique
   */
  export type MistakeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mistake
     */
    select?: MistakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mistake
     */
    omit?: MistakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MistakeInclude<ExtArgs> | null
    /**
     * Filter, which Mistake to fetch.
     */
    where: MistakeWhereUniqueInput
  }

  /**
   * Mistake findUniqueOrThrow
   */
  export type MistakeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mistake
     */
    select?: MistakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mistake
     */
    omit?: MistakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MistakeInclude<ExtArgs> | null
    /**
     * Filter, which Mistake to fetch.
     */
    where: MistakeWhereUniqueInput
  }

  /**
   * Mistake findFirst
   */
  export type MistakeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mistake
     */
    select?: MistakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mistake
     */
    omit?: MistakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MistakeInclude<ExtArgs> | null
    /**
     * Filter, which Mistake to fetch.
     */
    where?: MistakeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mistakes to fetch.
     */
    orderBy?: MistakeOrderByWithRelationInput | MistakeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mistakes.
     */
    cursor?: MistakeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mistakes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mistakes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mistakes.
     */
    distinct?: MistakeScalarFieldEnum | MistakeScalarFieldEnum[]
  }

  /**
   * Mistake findFirstOrThrow
   */
  export type MistakeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mistake
     */
    select?: MistakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mistake
     */
    omit?: MistakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MistakeInclude<ExtArgs> | null
    /**
     * Filter, which Mistake to fetch.
     */
    where?: MistakeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mistakes to fetch.
     */
    orderBy?: MistakeOrderByWithRelationInput | MistakeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mistakes.
     */
    cursor?: MistakeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mistakes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mistakes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mistakes.
     */
    distinct?: MistakeScalarFieldEnum | MistakeScalarFieldEnum[]
  }

  /**
   * Mistake findMany
   */
  export type MistakeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mistake
     */
    select?: MistakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mistake
     */
    omit?: MistakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MistakeInclude<ExtArgs> | null
    /**
     * Filter, which Mistakes to fetch.
     */
    where?: MistakeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mistakes to fetch.
     */
    orderBy?: MistakeOrderByWithRelationInput | MistakeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mistakes.
     */
    cursor?: MistakeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mistakes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mistakes.
     */
    skip?: number
    distinct?: MistakeScalarFieldEnum | MistakeScalarFieldEnum[]
  }

  /**
   * Mistake create
   */
  export type MistakeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mistake
     */
    select?: MistakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mistake
     */
    omit?: MistakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MistakeInclude<ExtArgs> | null
    /**
     * The data needed to create a Mistake.
     */
    data: XOR<MistakeCreateInput, MistakeUncheckedCreateInput>
  }

  /**
   * Mistake createMany
   */
  export type MistakeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Mistakes.
     */
    data: MistakeCreateManyInput | MistakeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mistake createManyAndReturn
   */
  export type MistakeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mistake
     */
    select?: MistakeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mistake
     */
    omit?: MistakeOmit<ExtArgs> | null
    /**
     * The data used to create many Mistakes.
     */
    data: MistakeCreateManyInput | MistakeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MistakeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Mistake update
   */
  export type MistakeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mistake
     */
    select?: MistakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mistake
     */
    omit?: MistakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MistakeInclude<ExtArgs> | null
    /**
     * The data needed to update a Mistake.
     */
    data: XOR<MistakeUpdateInput, MistakeUncheckedUpdateInput>
    /**
     * Choose, which Mistake to update.
     */
    where: MistakeWhereUniqueInput
  }

  /**
   * Mistake updateMany
   */
  export type MistakeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Mistakes.
     */
    data: XOR<MistakeUpdateManyMutationInput, MistakeUncheckedUpdateManyInput>
    /**
     * Filter which Mistakes to update
     */
    where?: MistakeWhereInput
    /**
     * Limit how many Mistakes to update.
     */
    limit?: number
  }

  /**
   * Mistake updateManyAndReturn
   */
  export type MistakeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mistake
     */
    select?: MistakeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mistake
     */
    omit?: MistakeOmit<ExtArgs> | null
    /**
     * The data used to update Mistakes.
     */
    data: XOR<MistakeUpdateManyMutationInput, MistakeUncheckedUpdateManyInput>
    /**
     * Filter which Mistakes to update
     */
    where?: MistakeWhereInput
    /**
     * Limit how many Mistakes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MistakeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Mistake upsert
   */
  export type MistakeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mistake
     */
    select?: MistakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mistake
     */
    omit?: MistakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MistakeInclude<ExtArgs> | null
    /**
     * The filter to search for the Mistake to update in case it exists.
     */
    where: MistakeWhereUniqueInput
    /**
     * In case the Mistake found by the `where` argument doesn't exist, create a new Mistake with this data.
     */
    create: XOR<MistakeCreateInput, MistakeUncheckedCreateInput>
    /**
     * In case the Mistake was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MistakeUpdateInput, MistakeUncheckedUpdateInput>
  }

  /**
   * Mistake delete
   */
  export type MistakeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mistake
     */
    select?: MistakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mistake
     */
    omit?: MistakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MistakeInclude<ExtArgs> | null
    /**
     * Filter which Mistake to delete.
     */
    where: MistakeWhereUniqueInput
  }

  /**
   * Mistake deleteMany
   */
  export type MistakeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mistakes to delete
     */
    where?: MistakeWhereInput
    /**
     * Limit how many Mistakes to delete.
     */
    limit?: number
  }

  /**
   * Mistake without action
   */
  export type MistakeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mistake
     */
    select?: MistakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mistake
     */
    omit?: MistakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MistakeInclude<ExtArgs> | null
  }


  /**
   * Model UserStats
   */

  export type AggregateUserStats = {
    _count: UserStatsCountAggregateOutputType | null
    _avg: UserStatsAvgAggregateOutputType | null
    _sum: UserStatsSumAggregateOutputType | null
    _min: UserStatsMinAggregateOutputType | null
    _max: UserStatsMaxAggregateOutputType | null
  }

  export type UserStatsAvgAggregateOutputType = {
    totalXp: number | null
    level: number | null
    currentStreak: number | null
    longestStreak: number | null
  }

  export type UserStatsSumAggregateOutputType = {
    totalXp: number | null
    level: number | null
    currentStreak: number | null
    longestStreak: number | null
  }

  export type UserStatsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    totalXp: number | null
    level: number | null
    currentStreak: number | null
    longestStreak: number | null
    lastActiveDate: Date | null
    updatedAt: Date | null
  }

  export type UserStatsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    totalXp: number | null
    level: number | null
    currentStreak: number | null
    longestStreak: number | null
    lastActiveDate: Date | null
    updatedAt: Date | null
  }

  export type UserStatsCountAggregateOutputType = {
    id: number
    userId: number
    totalXp: number
    level: number
    currentStreak: number
    longestStreak: number
    lastActiveDate: number
    updatedAt: number
    _all: number
  }


  export type UserStatsAvgAggregateInputType = {
    totalXp?: true
    level?: true
    currentStreak?: true
    longestStreak?: true
  }

  export type UserStatsSumAggregateInputType = {
    totalXp?: true
    level?: true
    currentStreak?: true
    longestStreak?: true
  }

  export type UserStatsMinAggregateInputType = {
    id?: true
    userId?: true
    totalXp?: true
    level?: true
    currentStreak?: true
    longestStreak?: true
    lastActiveDate?: true
    updatedAt?: true
  }

  export type UserStatsMaxAggregateInputType = {
    id?: true
    userId?: true
    totalXp?: true
    level?: true
    currentStreak?: true
    longestStreak?: true
    lastActiveDate?: true
    updatedAt?: true
  }

  export type UserStatsCountAggregateInputType = {
    id?: true
    userId?: true
    totalXp?: true
    level?: true
    currentStreak?: true
    longestStreak?: true
    lastActiveDate?: true
    updatedAt?: true
    _all?: true
  }

  export type UserStatsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserStats to aggregate.
     */
    where?: UserStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStats to fetch.
     */
    orderBy?: UserStatsOrderByWithRelationInput | UserStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserStats
    **/
    _count?: true | UserStatsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserStatsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserStatsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserStatsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserStatsMaxAggregateInputType
  }

  export type GetUserStatsAggregateType<T extends UserStatsAggregateArgs> = {
        [P in keyof T & keyof AggregateUserStats]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserStats[P]>
      : GetScalarType<T[P], AggregateUserStats[P]>
  }




  export type UserStatsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserStatsWhereInput
    orderBy?: UserStatsOrderByWithAggregationInput | UserStatsOrderByWithAggregationInput[]
    by: UserStatsScalarFieldEnum[] | UserStatsScalarFieldEnum
    having?: UserStatsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserStatsCountAggregateInputType | true
    _avg?: UserStatsAvgAggregateInputType
    _sum?: UserStatsSumAggregateInputType
    _min?: UserStatsMinAggregateInputType
    _max?: UserStatsMaxAggregateInputType
  }

  export type UserStatsGroupByOutputType = {
    id: string
    userId: string
    totalXp: number
    level: number
    currentStreak: number
    longestStreak: number
    lastActiveDate: Date | null
    updatedAt: Date
    _count: UserStatsCountAggregateOutputType | null
    _avg: UserStatsAvgAggregateOutputType | null
    _sum: UserStatsSumAggregateOutputType | null
    _min: UserStatsMinAggregateOutputType | null
    _max: UserStatsMaxAggregateOutputType | null
  }

  type GetUserStatsGroupByPayload<T extends UserStatsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserStatsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserStatsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserStatsGroupByOutputType[P]>
            : GetScalarType<T[P], UserStatsGroupByOutputType[P]>
        }
      >
    >


  export type UserStatsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    totalXp?: boolean
    level?: boolean
    currentStreak?: boolean
    longestStreak?: boolean
    lastActiveDate?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userStats"]>

  export type UserStatsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    totalXp?: boolean
    level?: boolean
    currentStreak?: boolean
    longestStreak?: boolean
    lastActiveDate?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userStats"]>

  export type UserStatsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    totalXp?: boolean
    level?: boolean
    currentStreak?: boolean
    longestStreak?: boolean
    lastActiveDate?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userStats"]>

  export type UserStatsSelectScalar = {
    id?: boolean
    userId?: boolean
    totalXp?: boolean
    level?: boolean
    currentStreak?: boolean
    longestStreak?: boolean
    lastActiveDate?: boolean
    updatedAt?: boolean
  }

  export type UserStatsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "totalXp" | "level" | "currentStreak" | "longestStreak" | "lastActiveDate" | "updatedAt", ExtArgs["result"]["userStats"]>
  export type UserStatsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserStatsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserStatsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserStatsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserStats"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      totalXp: number
      level: number
      currentStreak: number
      longestStreak: number
      lastActiveDate: Date | null
      updatedAt: Date
    }, ExtArgs["result"]["userStats"]>
    composites: {}
  }

  type UserStatsGetPayload<S extends boolean | null | undefined | UserStatsDefaultArgs> = $Result.GetResult<Prisma.$UserStatsPayload, S>

  type UserStatsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserStatsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserStatsCountAggregateInputType | true
    }

  export interface UserStatsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserStats'], meta: { name: 'UserStats' } }
    /**
     * Find zero or one UserStats that matches the filter.
     * @param {UserStatsFindUniqueArgs} args - Arguments to find a UserStats
     * @example
     * // Get one UserStats
     * const userStats = await prisma.userStats.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserStatsFindUniqueArgs>(args: SelectSubset<T, UserStatsFindUniqueArgs<ExtArgs>>): Prisma__UserStatsClient<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserStats that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserStatsFindUniqueOrThrowArgs} args - Arguments to find a UserStats
     * @example
     * // Get one UserStats
     * const userStats = await prisma.userStats.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserStatsFindUniqueOrThrowArgs>(args: SelectSubset<T, UserStatsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserStatsClient<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatsFindFirstArgs} args - Arguments to find a UserStats
     * @example
     * // Get one UserStats
     * const userStats = await prisma.userStats.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserStatsFindFirstArgs>(args?: SelectSubset<T, UserStatsFindFirstArgs<ExtArgs>>): Prisma__UserStatsClient<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserStats that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatsFindFirstOrThrowArgs} args - Arguments to find a UserStats
     * @example
     * // Get one UserStats
     * const userStats = await prisma.userStats.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserStatsFindFirstOrThrowArgs>(args?: SelectSubset<T, UserStatsFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserStatsClient<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserStats
     * const userStats = await prisma.userStats.findMany()
     * 
     * // Get first 10 UserStats
     * const userStats = await prisma.userStats.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userStatsWithIdOnly = await prisma.userStats.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserStatsFindManyArgs>(args?: SelectSubset<T, UserStatsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserStats.
     * @param {UserStatsCreateArgs} args - Arguments to create a UserStats.
     * @example
     * // Create one UserStats
     * const UserStats = await prisma.userStats.create({
     *   data: {
     *     // ... data to create a UserStats
     *   }
     * })
     * 
     */
    create<T extends UserStatsCreateArgs>(args: SelectSubset<T, UserStatsCreateArgs<ExtArgs>>): Prisma__UserStatsClient<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserStats.
     * @param {UserStatsCreateManyArgs} args - Arguments to create many UserStats.
     * @example
     * // Create many UserStats
     * const userStats = await prisma.userStats.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserStatsCreateManyArgs>(args?: SelectSubset<T, UserStatsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserStats and returns the data saved in the database.
     * @param {UserStatsCreateManyAndReturnArgs} args - Arguments to create many UserStats.
     * @example
     * // Create many UserStats
     * const userStats = await prisma.userStats.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserStats and only return the `id`
     * const userStatsWithIdOnly = await prisma.userStats.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserStatsCreateManyAndReturnArgs>(args?: SelectSubset<T, UserStatsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserStats.
     * @param {UserStatsDeleteArgs} args - Arguments to delete one UserStats.
     * @example
     * // Delete one UserStats
     * const UserStats = await prisma.userStats.delete({
     *   where: {
     *     // ... filter to delete one UserStats
     *   }
     * })
     * 
     */
    delete<T extends UserStatsDeleteArgs>(args: SelectSubset<T, UserStatsDeleteArgs<ExtArgs>>): Prisma__UserStatsClient<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserStats.
     * @param {UserStatsUpdateArgs} args - Arguments to update one UserStats.
     * @example
     * // Update one UserStats
     * const userStats = await prisma.userStats.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserStatsUpdateArgs>(args: SelectSubset<T, UserStatsUpdateArgs<ExtArgs>>): Prisma__UserStatsClient<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserStats.
     * @param {UserStatsDeleteManyArgs} args - Arguments to filter UserStats to delete.
     * @example
     * // Delete a few UserStats
     * const { count } = await prisma.userStats.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserStatsDeleteManyArgs>(args?: SelectSubset<T, UserStatsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserStats
     * const userStats = await prisma.userStats.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserStatsUpdateManyArgs>(args: SelectSubset<T, UserStatsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserStats and returns the data updated in the database.
     * @param {UserStatsUpdateManyAndReturnArgs} args - Arguments to update many UserStats.
     * @example
     * // Update many UserStats
     * const userStats = await prisma.userStats.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserStats and only return the `id`
     * const userStatsWithIdOnly = await prisma.userStats.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserStatsUpdateManyAndReturnArgs>(args: SelectSubset<T, UserStatsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserStats.
     * @param {UserStatsUpsertArgs} args - Arguments to update or create a UserStats.
     * @example
     * // Update or create a UserStats
     * const userStats = await prisma.userStats.upsert({
     *   create: {
     *     // ... data to create a UserStats
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserStats we want to update
     *   }
     * })
     */
    upsert<T extends UserStatsUpsertArgs>(args: SelectSubset<T, UserStatsUpsertArgs<ExtArgs>>): Prisma__UserStatsClient<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatsCountArgs} args - Arguments to filter UserStats to count.
     * @example
     * // Count the number of UserStats
     * const count = await prisma.userStats.count({
     *   where: {
     *     // ... the filter for the UserStats we want to count
     *   }
     * })
    **/
    count<T extends UserStatsCountArgs>(
      args?: Subset<T, UserStatsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserStatsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserStatsAggregateArgs>(args: Subset<T, UserStatsAggregateArgs>): Prisma.PrismaPromise<GetUserStatsAggregateType<T>>

    /**
     * Group by UserStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserStatsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserStatsGroupByArgs['orderBy'] }
        : { orderBy?: UserStatsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserStatsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserStatsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserStats model
   */
  readonly fields: UserStatsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserStats.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserStatsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserStats model
   */
  interface UserStatsFieldRefs {
    readonly id: FieldRef<"UserStats", 'String'>
    readonly userId: FieldRef<"UserStats", 'String'>
    readonly totalXp: FieldRef<"UserStats", 'Int'>
    readonly level: FieldRef<"UserStats", 'Int'>
    readonly currentStreak: FieldRef<"UserStats", 'Int'>
    readonly longestStreak: FieldRef<"UserStats", 'Int'>
    readonly lastActiveDate: FieldRef<"UserStats", 'DateTime'>
    readonly updatedAt: FieldRef<"UserStats", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserStats findUnique
   */
  export type UserStatsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatsInclude<ExtArgs> | null
    /**
     * Filter, which UserStats to fetch.
     */
    where: UserStatsWhereUniqueInput
  }

  /**
   * UserStats findUniqueOrThrow
   */
  export type UserStatsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatsInclude<ExtArgs> | null
    /**
     * Filter, which UserStats to fetch.
     */
    where: UserStatsWhereUniqueInput
  }

  /**
   * UserStats findFirst
   */
  export type UserStatsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatsInclude<ExtArgs> | null
    /**
     * Filter, which UserStats to fetch.
     */
    where?: UserStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStats to fetch.
     */
    orderBy?: UserStatsOrderByWithRelationInput | UserStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserStats.
     */
    cursor?: UserStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserStats.
     */
    distinct?: UserStatsScalarFieldEnum | UserStatsScalarFieldEnum[]
  }

  /**
   * UserStats findFirstOrThrow
   */
  export type UserStatsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatsInclude<ExtArgs> | null
    /**
     * Filter, which UserStats to fetch.
     */
    where?: UserStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStats to fetch.
     */
    orderBy?: UserStatsOrderByWithRelationInput | UserStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserStats.
     */
    cursor?: UserStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserStats.
     */
    distinct?: UserStatsScalarFieldEnum | UserStatsScalarFieldEnum[]
  }

  /**
   * UserStats findMany
   */
  export type UserStatsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatsInclude<ExtArgs> | null
    /**
     * Filter, which UserStats to fetch.
     */
    where?: UserStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStats to fetch.
     */
    orderBy?: UserStatsOrderByWithRelationInput | UserStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserStats.
     */
    cursor?: UserStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStats.
     */
    skip?: number
    distinct?: UserStatsScalarFieldEnum | UserStatsScalarFieldEnum[]
  }

  /**
   * UserStats create
   */
  export type UserStatsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatsInclude<ExtArgs> | null
    /**
     * The data needed to create a UserStats.
     */
    data: XOR<UserStatsCreateInput, UserStatsUncheckedCreateInput>
  }

  /**
   * UserStats createMany
   */
  export type UserStatsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserStats.
     */
    data: UserStatsCreateManyInput | UserStatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserStats createManyAndReturn
   */
  export type UserStatsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * The data used to create many UserStats.
     */
    data: UserStatsCreateManyInput | UserStatsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserStats update
   */
  export type UserStatsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatsInclude<ExtArgs> | null
    /**
     * The data needed to update a UserStats.
     */
    data: XOR<UserStatsUpdateInput, UserStatsUncheckedUpdateInput>
    /**
     * Choose, which UserStats to update.
     */
    where: UserStatsWhereUniqueInput
  }

  /**
   * UserStats updateMany
   */
  export type UserStatsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserStats.
     */
    data: XOR<UserStatsUpdateManyMutationInput, UserStatsUncheckedUpdateManyInput>
    /**
     * Filter which UserStats to update
     */
    where?: UserStatsWhereInput
    /**
     * Limit how many UserStats to update.
     */
    limit?: number
  }

  /**
   * UserStats updateManyAndReturn
   */
  export type UserStatsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * The data used to update UserStats.
     */
    data: XOR<UserStatsUpdateManyMutationInput, UserStatsUncheckedUpdateManyInput>
    /**
     * Filter which UserStats to update
     */
    where?: UserStatsWhereInput
    /**
     * Limit how many UserStats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserStats upsert
   */
  export type UserStatsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatsInclude<ExtArgs> | null
    /**
     * The filter to search for the UserStats to update in case it exists.
     */
    where: UserStatsWhereUniqueInput
    /**
     * In case the UserStats found by the `where` argument doesn't exist, create a new UserStats with this data.
     */
    create: XOR<UserStatsCreateInput, UserStatsUncheckedCreateInput>
    /**
     * In case the UserStats was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserStatsUpdateInput, UserStatsUncheckedUpdateInput>
  }

  /**
   * UserStats delete
   */
  export type UserStatsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatsInclude<ExtArgs> | null
    /**
     * Filter which UserStats to delete.
     */
    where: UserStatsWhereUniqueInput
  }

  /**
   * UserStats deleteMany
   */
  export type UserStatsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserStats to delete
     */
    where?: UserStatsWhereInput
    /**
     * Limit how many UserStats to delete.
     */
    limit?: number
  }

  /**
   * UserStats without action
   */
  export type UserStatsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatsInclude<ExtArgs> | null
  }


  /**
   * Model XpEvent
   */

  export type AggregateXpEvent = {
    _count: XpEventCountAggregateOutputType | null
    _avg: XpEventAvgAggregateOutputType | null
    _sum: XpEventSumAggregateOutputType | null
    _min: XpEventMinAggregateOutputType | null
    _max: XpEventMaxAggregateOutputType | null
  }

  export type XpEventAvgAggregateOutputType = {
    xpDelta: number | null
  }

  export type XpEventSumAggregateOutputType = {
    xpDelta: number | null
  }

  export type XpEventMinAggregateOutputType = {
    id: string | null
    userId: string | null
    eventType: string | null
    xpDelta: number | null
    createdAt: Date | null
  }

  export type XpEventMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    eventType: string | null
    xpDelta: number | null
    createdAt: Date | null
  }

  export type XpEventCountAggregateOutputType = {
    id: number
    userId: number
    eventType: number
    xpDelta: number
    payload: number
    createdAt: number
    _all: number
  }


  export type XpEventAvgAggregateInputType = {
    xpDelta?: true
  }

  export type XpEventSumAggregateInputType = {
    xpDelta?: true
  }

  export type XpEventMinAggregateInputType = {
    id?: true
    userId?: true
    eventType?: true
    xpDelta?: true
    createdAt?: true
  }

  export type XpEventMaxAggregateInputType = {
    id?: true
    userId?: true
    eventType?: true
    xpDelta?: true
    createdAt?: true
  }

  export type XpEventCountAggregateInputType = {
    id?: true
    userId?: true
    eventType?: true
    xpDelta?: true
    payload?: true
    createdAt?: true
    _all?: true
  }

  export type XpEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which XpEvent to aggregate.
     */
    where?: XpEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of XpEvents to fetch.
     */
    orderBy?: XpEventOrderByWithRelationInput | XpEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: XpEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` XpEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` XpEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned XpEvents
    **/
    _count?: true | XpEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: XpEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: XpEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: XpEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: XpEventMaxAggregateInputType
  }

  export type GetXpEventAggregateType<T extends XpEventAggregateArgs> = {
        [P in keyof T & keyof AggregateXpEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateXpEvent[P]>
      : GetScalarType<T[P], AggregateXpEvent[P]>
  }




  export type XpEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: XpEventWhereInput
    orderBy?: XpEventOrderByWithAggregationInput | XpEventOrderByWithAggregationInput[]
    by: XpEventScalarFieldEnum[] | XpEventScalarFieldEnum
    having?: XpEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: XpEventCountAggregateInputType | true
    _avg?: XpEventAvgAggregateInputType
    _sum?: XpEventSumAggregateInputType
    _min?: XpEventMinAggregateInputType
    _max?: XpEventMaxAggregateInputType
  }

  export type XpEventGroupByOutputType = {
    id: string
    userId: string
    eventType: string
    xpDelta: number
    payload: JsonValue | null
    createdAt: Date
    _count: XpEventCountAggregateOutputType | null
    _avg: XpEventAvgAggregateOutputType | null
    _sum: XpEventSumAggregateOutputType | null
    _min: XpEventMinAggregateOutputType | null
    _max: XpEventMaxAggregateOutputType | null
  }

  type GetXpEventGroupByPayload<T extends XpEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<XpEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof XpEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], XpEventGroupByOutputType[P]>
            : GetScalarType<T[P], XpEventGroupByOutputType[P]>
        }
      >
    >


  export type XpEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    eventType?: boolean
    xpDelta?: boolean
    payload?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["xpEvent"]>

  export type XpEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    eventType?: boolean
    xpDelta?: boolean
    payload?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["xpEvent"]>

  export type XpEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    eventType?: boolean
    xpDelta?: boolean
    payload?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["xpEvent"]>

  export type XpEventSelectScalar = {
    id?: boolean
    userId?: boolean
    eventType?: boolean
    xpDelta?: boolean
    payload?: boolean
    createdAt?: boolean
  }

  export type XpEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "eventType" | "xpDelta" | "payload" | "createdAt", ExtArgs["result"]["xpEvent"]>
  export type XpEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type XpEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type XpEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $XpEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "XpEvent"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      eventType: string
      xpDelta: number
      payload: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["xpEvent"]>
    composites: {}
  }

  type XpEventGetPayload<S extends boolean | null | undefined | XpEventDefaultArgs> = $Result.GetResult<Prisma.$XpEventPayload, S>

  type XpEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<XpEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: XpEventCountAggregateInputType | true
    }

  export interface XpEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['XpEvent'], meta: { name: 'XpEvent' } }
    /**
     * Find zero or one XpEvent that matches the filter.
     * @param {XpEventFindUniqueArgs} args - Arguments to find a XpEvent
     * @example
     * // Get one XpEvent
     * const xpEvent = await prisma.xpEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends XpEventFindUniqueArgs>(args: SelectSubset<T, XpEventFindUniqueArgs<ExtArgs>>): Prisma__XpEventClient<$Result.GetResult<Prisma.$XpEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one XpEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {XpEventFindUniqueOrThrowArgs} args - Arguments to find a XpEvent
     * @example
     * // Get one XpEvent
     * const xpEvent = await prisma.xpEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends XpEventFindUniqueOrThrowArgs>(args: SelectSubset<T, XpEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__XpEventClient<$Result.GetResult<Prisma.$XpEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first XpEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {XpEventFindFirstArgs} args - Arguments to find a XpEvent
     * @example
     * // Get one XpEvent
     * const xpEvent = await prisma.xpEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends XpEventFindFirstArgs>(args?: SelectSubset<T, XpEventFindFirstArgs<ExtArgs>>): Prisma__XpEventClient<$Result.GetResult<Prisma.$XpEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first XpEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {XpEventFindFirstOrThrowArgs} args - Arguments to find a XpEvent
     * @example
     * // Get one XpEvent
     * const xpEvent = await prisma.xpEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends XpEventFindFirstOrThrowArgs>(args?: SelectSubset<T, XpEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__XpEventClient<$Result.GetResult<Prisma.$XpEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more XpEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {XpEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all XpEvents
     * const xpEvents = await prisma.xpEvent.findMany()
     * 
     * // Get first 10 XpEvents
     * const xpEvents = await prisma.xpEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const xpEventWithIdOnly = await prisma.xpEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends XpEventFindManyArgs>(args?: SelectSubset<T, XpEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$XpEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a XpEvent.
     * @param {XpEventCreateArgs} args - Arguments to create a XpEvent.
     * @example
     * // Create one XpEvent
     * const XpEvent = await prisma.xpEvent.create({
     *   data: {
     *     // ... data to create a XpEvent
     *   }
     * })
     * 
     */
    create<T extends XpEventCreateArgs>(args: SelectSubset<T, XpEventCreateArgs<ExtArgs>>): Prisma__XpEventClient<$Result.GetResult<Prisma.$XpEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many XpEvents.
     * @param {XpEventCreateManyArgs} args - Arguments to create many XpEvents.
     * @example
     * // Create many XpEvents
     * const xpEvent = await prisma.xpEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends XpEventCreateManyArgs>(args?: SelectSubset<T, XpEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many XpEvents and returns the data saved in the database.
     * @param {XpEventCreateManyAndReturnArgs} args - Arguments to create many XpEvents.
     * @example
     * // Create many XpEvents
     * const xpEvent = await prisma.xpEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many XpEvents and only return the `id`
     * const xpEventWithIdOnly = await prisma.xpEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends XpEventCreateManyAndReturnArgs>(args?: SelectSubset<T, XpEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$XpEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a XpEvent.
     * @param {XpEventDeleteArgs} args - Arguments to delete one XpEvent.
     * @example
     * // Delete one XpEvent
     * const XpEvent = await prisma.xpEvent.delete({
     *   where: {
     *     // ... filter to delete one XpEvent
     *   }
     * })
     * 
     */
    delete<T extends XpEventDeleteArgs>(args: SelectSubset<T, XpEventDeleteArgs<ExtArgs>>): Prisma__XpEventClient<$Result.GetResult<Prisma.$XpEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one XpEvent.
     * @param {XpEventUpdateArgs} args - Arguments to update one XpEvent.
     * @example
     * // Update one XpEvent
     * const xpEvent = await prisma.xpEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends XpEventUpdateArgs>(args: SelectSubset<T, XpEventUpdateArgs<ExtArgs>>): Prisma__XpEventClient<$Result.GetResult<Prisma.$XpEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more XpEvents.
     * @param {XpEventDeleteManyArgs} args - Arguments to filter XpEvents to delete.
     * @example
     * // Delete a few XpEvents
     * const { count } = await prisma.xpEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends XpEventDeleteManyArgs>(args?: SelectSubset<T, XpEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more XpEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {XpEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many XpEvents
     * const xpEvent = await prisma.xpEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends XpEventUpdateManyArgs>(args: SelectSubset<T, XpEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more XpEvents and returns the data updated in the database.
     * @param {XpEventUpdateManyAndReturnArgs} args - Arguments to update many XpEvents.
     * @example
     * // Update many XpEvents
     * const xpEvent = await prisma.xpEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more XpEvents and only return the `id`
     * const xpEventWithIdOnly = await prisma.xpEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends XpEventUpdateManyAndReturnArgs>(args: SelectSubset<T, XpEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$XpEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one XpEvent.
     * @param {XpEventUpsertArgs} args - Arguments to update or create a XpEvent.
     * @example
     * // Update or create a XpEvent
     * const xpEvent = await prisma.xpEvent.upsert({
     *   create: {
     *     // ... data to create a XpEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the XpEvent we want to update
     *   }
     * })
     */
    upsert<T extends XpEventUpsertArgs>(args: SelectSubset<T, XpEventUpsertArgs<ExtArgs>>): Prisma__XpEventClient<$Result.GetResult<Prisma.$XpEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of XpEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {XpEventCountArgs} args - Arguments to filter XpEvents to count.
     * @example
     * // Count the number of XpEvents
     * const count = await prisma.xpEvent.count({
     *   where: {
     *     // ... the filter for the XpEvents we want to count
     *   }
     * })
    **/
    count<T extends XpEventCountArgs>(
      args?: Subset<T, XpEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], XpEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a XpEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {XpEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends XpEventAggregateArgs>(args: Subset<T, XpEventAggregateArgs>): Prisma.PrismaPromise<GetXpEventAggregateType<T>>

    /**
     * Group by XpEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {XpEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends XpEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: XpEventGroupByArgs['orderBy'] }
        : { orderBy?: XpEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, XpEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetXpEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the XpEvent model
   */
  readonly fields: XpEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for XpEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__XpEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the XpEvent model
   */
  interface XpEventFieldRefs {
    readonly id: FieldRef<"XpEvent", 'String'>
    readonly userId: FieldRef<"XpEvent", 'String'>
    readonly eventType: FieldRef<"XpEvent", 'String'>
    readonly xpDelta: FieldRef<"XpEvent", 'Int'>
    readonly payload: FieldRef<"XpEvent", 'Json'>
    readonly createdAt: FieldRef<"XpEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * XpEvent findUnique
   */
  export type XpEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the XpEvent
     */
    select?: XpEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the XpEvent
     */
    omit?: XpEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: XpEventInclude<ExtArgs> | null
    /**
     * Filter, which XpEvent to fetch.
     */
    where: XpEventWhereUniqueInput
  }

  /**
   * XpEvent findUniqueOrThrow
   */
  export type XpEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the XpEvent
     */
    select?: XpEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the XpEvent
     */
    omit?: XpEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: XpEventInclude<ExtArgs> | null
    /**
     * Filter, which XpEvent to fetch.
     */
    where: XpEventWhereUniqueInput
  }

  /**
   * XpEvent findFirst
   */
  export type XpEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the XpEvent
     */
    select?: XpEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the XpEvent
     */
    omit?: XpEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: XpEventInclude<ExtArgs> | null
    /**
     * Filter, which XpEvent to fetch.
     */
    where?: XpEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of XpEvents to fetch.
     */
    orderBy?: XpEventOrderByWithRelationInput | XpEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for XpEvents.
     */
    cursor?: XpEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` XpEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` XpEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of XpEvents.
     */
    distinct?: XpEventScalarFieldEnum | XpEventScalarFieldEnum[]
  }

  /**
   * XpEvent findFirstOrThrow
   */
  export type XpEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the XpEvent
     */
    select?: XpEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the XpEvent
     */
    omit?: XpEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: XpEventInclude<ExtArgs> | null
    /**
     * Filter, which XpEvent to fetch.
     */
    where?: XpEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of XpEvents to fetch.
     */
    orderBy?: XpEventOrderByWithRelationInput | XpEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for XpEvents.
     */
    cursor?: XpEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` XpEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` XpEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of XpEvents.
     */
    distinct?: XpEventScalarFieldEnum | XpEventScalarFieldEnum[]
  }

  /**
   * XpEvent findMany
   */
  export type XpEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the XpEvent
     */
    select?: XpEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the XpEvent
     */
    omit?: XpEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: XpEventInclude<ExtArgs> | null
    /**
     * Filter, which XpEvents to fetch.
     */
    where?: XpEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of XpEvents to fetch.
     */
    orderBy?: XpEventOrderByWithRelationInput | XpEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing XpEvents.
     */
    cursor?: XpEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` XpEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` XpEvents.
     */
    skip?: number
    distinct?: XpEventScalarFieldEnum | XpEventScalarFieldEnum[]
  }

  /**
   * XpEvent create
   */
  export type XpEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the XpEvent
     */
    select?: XpEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the XpEvent
     */
    omit?: XpEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: XpEventInclude<ExtArgs> | null
    /**
     * The data needed to create a XpEvent.
     */
    data: XOR<XpEventCreateInput, XpEventUncheckedCreateInput>
  }

  /**
   * XpEvent createMany
   */
  export type XpEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many XpEvents.
     */
    data: XpEventCreateManyInput | XpEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * XpEvent createManyAndReturn
   */
  export type XpEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the XpEvent
     */
    select?: XpEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the XpEvent
     */
    omit?: XpEventOmit<ExtArgs> | null
    /**
     * The data used to create many XpEvents.
     */
    data: XpEventCreateManyInput | XpEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: XpEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * XpEvent update
   */
  export type XpEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the XpEvent
     */
    select?: XpEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the XpEvent
     */
    omit?: XpEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: XpEventInclude<ExtArgs> | null
    /**
     * The data needed to update a XpEvent.
     */
    data: XOR<XpEventUpdateInput, XpEventUncheckedUpdateInput>
    /**
     * Choose, which XpEvent to update.
     */
    where: XpEventWhereUniqueInput
  }

  /**
   * XpEvent updateMany
   */
  export type XpEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update XpEvents.
     */
    data: XOR<XpEventUpdateManyMutationInput, XpEventUncheckedUpdateManyInput>
    /**
     * Filter which XpEvents to update
     */
    where?: XpEventWhereInput
    /**
     * Limit how many XpEvents to update.
     */
    limit?: number
  }

  /**
   * XpEvent updateManyAndReturn
   */
  export type XpEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the XpEvent
     */
    select?: XpEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the XpEvent
     */
    omit?: XpEventOmit<ExtArgs> | null
    /**
     * The data used to update XpEvents.
     */
    data: XOR<XpEventUpdateManyMutationInput, XpEventUncheckedUpdateManyInput>
    /**
     * Filter which XpEvents to update
     */
    where?: XpEventWhereInput
    /**
     * Limit how many XpEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: XpEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * XpEvent upsert
   */
  export type XpEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the XpEvent
     */
    select?: XpEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the XpEvent
     */
    omit?: XpEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: XpEventInclude<ExtArgs> | null
    /**
     * The filter to search for the XpEvent to update in case it exists.
     */
    where: XpEventWhereUniqueInput
    /**
     * In case the XpEvent found by the `where` argument doesn't exist, create a new XpEvent with this data.
     */
    create: XOR<XpEventCreateInput, XpEventUncheckedCreateInput>
    /**
     * In case the XpEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<XpEventUpdateInput, XpEventUncheckedUpdateInput>
  }

  /**
   * XpEvent delete
   */
  export type XpEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the XpEvent
     */
    select?: XpEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the XpEvent
     */
    omit?: XpEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: XpEventInclude<ExtArgs> | null
    /**
     * Filter which XpEvent to delete.
     */
    where: XpEventWhereUniqueInput
  }

  /**
   * XpEvent deleteMany
   */
  export type XpEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which XpEvents to delete
     */
    where?: XpEventWhereInput
    /**
     * Limit how many XpEvents to delete.
     */
    limit?: number
  }

  /**
   * XpEvent without action
   */
  export type XpEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the XpEvent
     */
    select?: XpEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the XpEvent
     */
    omit?: XpEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: XpEventInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash',
    displayName: 'displayName',
    image: 'image',
    isNewUser: 'isNewUser',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RefreshTokenScalarFieldEnum: {
    id: 'id',
    tokenHash: 'tokenHash',
    userId: 'userId',
    userAgent: 'userAgent',
    ip: 'ip',
    isRevoked: 'isRevoked',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum]


  export const UserProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    primaryRole: 'primaryRole',
    englishReadingSelfScore: 'englishReadingSelfScore',
    englishWritingSelfScore: 'englishWritingSelfScore',
    primaryGoal: 'primaryGoal',
    weeklyTimeMinutes: 'weeklyTimeMinutes',
    interestTags: 'interestTags',
    preferredGenres: 'preferredGenres',
    localePreference: 'localePreference',
    grammarScore: 'grammarScore',
    vocabularyScore: 'vocabularyScore',
    fluencyScore: 'fluencyScore',
    pronunciationScore: 'pronunciationScore',
    targetScoreGoal: 'targetScoreGoal',
    dailyGoalMinutes: 'dailyGoalMinutes',
    preferredLearningStyle: 'preferredLearningStyle',
    weakAreas: 'weakAreas',
    initialAssessmentDone: 'initialAssessmentDone',
    onboardingCompletedAt: 'onboardingCompletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserProfileScalarFieldEnum = (typeof UserProfileScalarFieldEnum)[keyof typeof UserProfileScalarFieldEnum]


  export const WritingPromptScalarFieldEnum: {
    id: 'id',
    title: 'title',
    genre: 'genre',
    body: 'body',
    topicTags: 'topicTags',
    targetLevel: 'targetLevel',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type WritingPromptScalarFieldEnum = (typeof WritingPromptScalarFieldEnum)[keyof typeof WritingPromptScalarFieldEnum]


  export const SubmissionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    promptId: 'promptId',
    title: 'title',
    genre: 'genre',
    body: 'body',
    wordCount: 'wordCount',
    status: 'status',
    analysisJson: 'analysisJson',
    rawAIResponse: 'rawAIResponse',
    errorMessage: 'errorMessage',
    completedAt: 'completedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubmissionScalarFieldEnum = (typeof SubmissionScalarFieldEnum)[keyof typeof SubmissionScalarFieldEnum]


  export const AnalysisRunScalarFieldEnum: {
    id: 'id',
    submissionId: 'submissionId',
    status: 'status',
    analyzerModel: 'analyzerModel',
    analyzerVersion: 'analyzerVersion',
    rulesetVersion: 'rulesetVersion',
    summaryJson: 'summaryJson',
    rawModelOutput: 'rawModelOutput',
    errorMessage: 'errorMessage',
    startedAt: 'startedAt',
    completedAt: 'completedAt'
  };

  export type AnalysisRunScalarFieldEnum = (typeof AnalysisRunScalarFieldEnum)[keyof typeof AnalysisRunScalarFieldEnum]


  export const MistakeScalarFieldEnum: {
    id: 'id',
    submissionId: 'submissionId',
    analysisRunId: 'analysisRunId',
    pillar: 'pillar',
    subtype: 'subtype',
    severity: 'severity',
    startOffset: 'startOffset',
    endOffset: 'endOffset',
    surfaceText: 'surfaceText',
    message: 'message',
    suggestion: 'suggestion',
    canonicalRuleId: 'canonicalRuleId',
    confidence: 'confidence',
    createdAt: 'createdAt'
  };

  export type MistakeScalarFieldEnum = (typeof MistakeScalarFieldEnum)[keyof typeof MistakeScalarFieldEnum]


  export const UserStatsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    totalXp: 'totalXp',
    level: 'level',
    currentStreak: 'currentStreak',
    longestStreak: 'longestStreak',
    lastActiveDate: 'lastActiveDate',
    updatedAt: 'updatedAt'
  };

  export type UserStatsScalarFieldEnum = (typeof UserStatsScalarFieldEnum)[keyof typeof UserStatsScalarFieldEnum]


  export const XpEventScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    eventType: 'eventType',
    xpDelta: 'xpDelta',
    payload: 'payload',
    createdAt: 'createdAt'
  };

  export type XpEventScalarFieldEnum = (typeof XpEventScalarFieldEnum)[keyof typeof XpEventScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'PrimaryRole'
   */
  export type EnumPrimaryRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PrimaryRole'>
    


  /**
   * Reference to a field of type 'PrimaryRole[]'
   */
  export type ListEnumPrimaryRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PrimaryRole[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'PrimaryGoal'
   */
  export type EnumPrimaryGoalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PrimaryGoal'>
    


  /**
   * Reference to a field of type 'PrimaryGoal[]'
   */
  export type ListEnumPrimaryGoalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PrimaryGoal[]'>
    


  /**
   * Reference to a field of type 'SubmissionGenre[]'
   */
  export type ListEnumSubmissionGenreFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubmissionGenre[]'>
    


  /**
   * Reference to a field of type 'SubmissionGenre'
   */
  export type EnumSubmissionGenreFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubmissionGenre'>
    


  /**
   * Reference to a field of type 'SubmissionStatus'
   */
  export type EnumSubmissionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubmissionStatus'>
    


  /**
   * Reference to a field of type 'SubmissionStatus[]'
   */
  export type ListEnumSubmissionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubmissionStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'AnalysisStatus'
   */
  export type EnumAnalysisStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnalysisStatus'>
    


  /**
   * Reference to a field of type 'AnalysisStatus[]'
   */
  export type ListEnumAnalysisStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnalysisStatus[]'>
    


  /**
   * Reference to a field of type 'PillarCode'
   */
  export type EnumPillarCodeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PillarCode'>
    


  /**
   * Reference to a field of type 'PillarCode[]'
   */
  export type ListEnumPillarCodeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PillarCode[]'>
    


  /**
   * Reference to a field of type 'MistakeSeverity'
   */
  export type EnumMistakeSeverityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MistakeSeverity'>
    


  /**
   * Reference to a field of type 'MistakeSeverity[]'
   */
  export type ListEnumMistakeSeverityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MistakeSeverity[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringNullableFilter<"User"> | string | null
    displayName?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    isNewUser?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    profile?: XOR<UserProfileNullableScalarRelationFilter, UserProfileWhereInput> | null
    submissions?: SubmissionListRelationFilter
    stats?: XOR<UserStatsNullableScalarRelationFilter, UserStatsWhereInput> | null
    xpEvents?: XpEventListRelationFilter
    refreshTokens?: RefreshTokenListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    displayName?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    isNewUser?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profile?: UserProfileOrderByWithRelationInput
    submissions?: SubmissionOrderByRelationAggregateInput
    stats?: UserStatsOrderByWithRelationInput
    xpEvents?: XpEventOrderByRelationAggregateInput
    refreshTokens?: RefreshTokenOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    passwordHash?: StringNullableFilter<"User"> | string | null
    displayName?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    isNewUser?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    profile?: XOR<UserProfileNullableScalarRelationFilter, UserProfileWhereInput> | null
    submissions?: SubmissionListRelationFilter
    stats?: XOR<UserStatsNullableScalarRelationFilter, UserStatsWhereInput> | null
    xpEvents?: XpEventListRelationFilter
    refreshTokens?: RefreshTokenListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    displayName?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    isNewUser?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringNullableWithAggregatesFilter<"User"> | string | null
    displayName?: StringNullableWithAggregatesFilter<"User"> | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    isNewUser?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RefreshTokenWhereInput = {
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    id?: StringFilter<"RefreshToken"> | string
    tokenHash?: StringFilter<"RefreshToken"> | string
    userId?: StringFilter<"RefreshToken"> | string
    userAgent?: StringNullableFilter<"RefreshToken"> | string | null
    ip?: StringNullableFilter<"RefreshToken"> | string | null
    isRevoked?: BoolFilter<"RefreshToken"> | boolean
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    updatedAt?: DateTimeFilter<"RefreshToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RefreshTokenOrderByWithRelationInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    userId?: SortOrder
    userAgent?: SortOrderInput | SortOrder
    ip?: SortOrderInput | SortOrder
    isRevoked?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type RefreshTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    tokenHash?: StringFilter<"RefreshToken"> | string
    userId?: StringFilter<"RefreshToken"> | string
    userAgent?: StringNullableFilter<"RefreshToken"> | string | null
    ip?: StringNullableFilter<"RefreshToken"> | string | null
    isRevoked?: BoolFilter<"RefreshToken"> | boolean
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    updatedAt?: DateTimeFilter<"RefreshToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type RefreshTokenOrderByWithAggregationInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    userId?: SortOrder
    userAgent?: SortOrderInput | SortOrder
    ip?: SortOrderInput | SortOrder
    isRevoked?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RefreshTokenCountOrderByAggregateInput
    _max?: RefreshTokenMaxOrderByAggregateInput
    _min?: RefreshTokenMinOrderByAggregateInput
  }

  export type RefreshTokenScalarWhereWithAggregatesInput = {
    AND?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    OR?: RefreshTokenScalarWhereWithAggregatesInput[]
    NOT?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RefreshToken"> | string
    tokenHash?: StringWithAggregatesFilter<"RefreshToken"> | string
    userId?: StringWithAggregatesFilter<"RefreshToken"> | string
    userAgent?: StringNullableWithAggregatesFilter<"RefreshToken"> | string | null
    ip?: StringNullableWithAggregatesFilter<"RefreshToken"> | string | null
    isRevoked?: BoolWithAggregatesFilter<"RefreshToken"> | boolean
    expiresAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
  }

  export type UserProfileWhereInput = {
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    id?: StringFilter<"UserProfile"> | string
    userId?: StringFilter<"UserProfile"> | string
    primaryRole?: EnumPrimaryRoleFilter<"UserProfile"> | $Enums.PrimaryRole
    englishReadingSelfScore?: IntFilter<"UserProfile"> | number
    englishWritingSelfScore?: IntFilter<"UserProfile"> | number
    primaryGoal?: EnumPrimaryGoalNullableFilter<"UserProfile"> | $Enums.PrimaryGoal | null
    weeklyTimeMinutes?: IntNullableFilter<"UserProfile"> | number | null
    interestTags?: StringNullableListFilter<"UserProfile">
    preferredGenres?: EnumSubmissionGenreNullableListFilter<"UserProfile">
    localePreference?: StringFilter<"UserProfile"> | string
    grammarScore?: IntNullableFilter<"UserProfile"> | number | null
    vocabularyScore?: IntNullableFilter<"UserProfile"> | number | null
    fluencyScore?: IntNullableFilter<"UserProfile"> | number | null
    pronunciationScore?: IntNullableFilter<"UserProfile"> | number | null
    targetScoreGoal?: IntNullableFilter<"UserProfile"> | number | null
    dailyGoalMinutes?: IntNullableFilter<"UserProfile"> | number | null
    preferredLearningStyle?: StringNullableFilter<"UserProfile"> | string | null
    weakAreas?: StringNullableListFilter<"UserProfile">
    initialAssessmentDone?: BoolFilter<"UserProfile"> | boolean
    onboardingCompletedAt?: DateTimeNullableFilter<"UserProfile"> | Date | string | null
    createdAt?: DateTimeFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeFilter<"UserProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    primaryRole?: SortOrder
    englishReadingSelfScore?: SortOrder
    englishWritingSelfScore?: SortOrder
    primaryGoal?: SortOrderInput | SortOrder
    weeklyTimeMinutes?: SortOrderInput | SortOrder
    interestTags?: SortOrder
    preferredGenres?: SortOrder
    localePreference?: SortOrder
    grammarScore?: SortOrderInput | SortOrder
    vocabularyScore?: SortOrderInput | SortOrder
    fluencyScore?: SortOrderInput | SortOrder
    pronunciationScore?: SortOrderInput | SortOrder
    targetScoreGoal?: SortOrderInput | SortOrder
    dailyGoalMinutes?: SortOrderInput | SortOrder
    preferredLearningStyle?: SortOrderInput | SortOrder
    weakAreas?: SortOrder
    initialAssessmentDone?: SortOrder
    onboardingCompletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    primaryRole?: EnumPrimaryRoleFilter<"UserProfile"> | $Enums.PrimaryRole
    englishReadingSelfScore?: IntFilter<"UserProfile"> | number
    englishWritingSelfScore?: IntFilter<"UserProfile"> | number
    primaryGoal?: EnumPrimaryGoalNullableFilter<"UserProfile"> | $Enums.PrimaryGoal | null
    weeklyTimeMinutes?: IntNullableFilter<"UserProfile"> | number | null
    interestTags?: StringNullableListFilter<"UserProfile">
    preferredGenres?: EnumSubmissionGenreNullableListFilter<"UserProfile">
    localePreference?: StringFilter<"UserProfile"> | string
    grammarScore?: IntNullableFilter<"UserProfile"> | number | null
    vocabularyScore?: IntNullableFilter<"UserProfile"> | number | null
    fluencyScore?: IntNullableFilter<"UserProfile"> | number | null
    pronunciationScore?: IntNullableFilter<"UserProfile"> | number | null
    targetScoreGoal?: IntNullableFilter<"UserProfile"> | number | null
    dailyGoalMinutes?: IntNullableFilter<"UserProfile"> | number | null
    preferredLearningStyle?: StringNullableFilter<"UserProfile"> | string | null
    weakAreas?: StringNullableListFilter<"UserProfile">
    initialAssessmentDone?: BoolFilter<"UserProfile"> | boolean
    onboardingCompletedAt?: DateTimeNullableFilter<"UserProfile"> | Date | string | null
    createdAt?: DateTimeFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeFilter<"UserProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type UserProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    primaryRole?: SortOrder
    englishReadingSelfScore?: SortOrder
    englishWritingSelfScore?: SortOrder
    primaryGoal?: SortOrderInput | SortOrder
    weeklyTimeMinutes?: SortOrderInput | SortOrder
    interestTags?: SortOrder
    preferredGenres?: SortOrder
    localePreference?: SortOrder
    grammarScore?: SortOrderInput | SortOrder
    vocabularyScore?: SortOrderInput | SortOrder
    fluencyScore?: SortOrderInput | SortOrder
    pronunciationScore?: SortOrderInput | SortOrder
    targetScoreGoal?: SortOrderInput | SortOrder
    dailyGoalMinutes?: SortOrderInput | SortOrder
    preferredLearningStyle?: SortOrderInput | SortOrder
    weakAreas?: SortOrder
    initialAssessmentDone?: SortOrder
    onboardingCompletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserProfileCountOrderByAggregateInput
    _avg?: UserProfileAvgOrderByAggregateInput
    _max?: UserProfileMaxOrderByAggregateInput
    _min?: UserProfileMinOrderByAggregateInput
    _sum?: UserProfileSumOrderByAggregateInput
  }

  export type UserProfileScalarWhereWithAggregatesInput = {
    AND?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    OR?: UserProfileScalarWhereWithAggregatesInput[]
    NOT?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserProfile"> | string
    userId?: StringWithAggregatesFilter<"UserProfile"> | string
    primaryRole?: EnumPrimaryRoleWithAggregatesFilter<"UserProfile"> | $Enums.PrimaryRole
    englishReadingSelfScore?: IntWithAggregatesFilter<"UserProfile"> | number
    englishWritingSelfScore?: IntWithAggregatesFilter<"UserProfile"> | number
    primaryGoal?: EnumPrimaryGoalNullableWithAggregatesFilter<"UserProfile"> | $Enums.PrimaryGoal | null
    weeklyTimeMinutes?: IntNullableWithAggregatesFilter<"UserProfile"> | number | null
    interestTags?: StringNullableListFilter<"UserProfile">
    preferredGenres?: EnumSubmissionGenreNullableListFilter<"UserProfile">
    localePreference?: StringWithAggregatesFilter<"UserProfile"> | string
    grammarScore?: IntNullableWithAggregatesFilter<"UserProfile"> | number | null
    vocabularyScore?: IntNullableWithAggregatesFilter<"UserProfile"> | number | null
    fluencyScore?: IntNullableWithAggregatesFilter<"UserProfile"> | number | null
    pronunciationScore?: IntNullableWithAggregatesFilter<"UserProfile"> | number | null
    targetScoreGoal?: IntNullableWithAggregatesFilter<"UserProfile"> | number | null
    dailyGoalMinutes?: IntNullableWithAggregatesFilter<"UserProfile"> | number | null
    preferredLearningStyle?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    weakAreas?: StringNullableListFilter<"UserProfile">
    initialAssessmentDone?: BoolWithAggregatesFilter<"UserProfile"> | boolean
    onboardingCompletedAt?: DateTimeNullableWithAggregatesFilter<"UserProfile"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserProfile"> | Date | string
  }

  export type WritingPromptWhereInput = {
    AND?: WritingPromptWhereInput | WritingPromptWhereInput[]
    OR?: WritingPromptWhereInput[]
    NOT?: WritingPromptWhereInput | WritingPromptWhereInput[]
    id?: StringFilter<"WritingPrompt"> | string
    title?: StringFilter<"WritingPrompt"> | string
    genre?: EnumSubmissionGenreFilter<"WritingPrompt"> | $Enums.SubmissionGenre
    body?: StringFilter<"WritingPrompt"> | string
    topicTags?: StringNullableListFilter<"WritingPrompt">
    targetLevel?: IntNullableFilter<"WritingPrompt"> | number | null
    isActive?: BoolFilter<"WritingPrompt"> | boolean
    createdAt?: DateTimeFilter<"WritingPrompt"> | Date | string
    submissions?: SubmissionListRelationFilter
  }

  export type WritingPromptOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    genre?: SortOrder
    body?: SortOrder
    topicTags?: SortOrder
    targetLevel?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    submissions?: SubmissionOrderByRelationAggregateInput
  }

  export type WritingPromptWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WritingPromptWhereInput | WritingPromptWhereInput[]
    OR?: WritingPromptWhereInput[]
    NOT?: WritingPromptWhereInput | WritingPromptWhereInput[]
    title?: StringFilter<"WritingPrompt"> | string
    genre?: EnumSubmissionGenreFilter<"WritingPrompt"> | $Enums.SubmissionGenre
    body?: StringFilter<"WritingPrompt"> | string
    topicTags?: StringNullableListFilter<"WritingPrompt">
    targetLevel?: IntNullableFilter<"WritingPrompt"> | number | null
    isActive?: BoolFilter<"WritingPrompt"> | boolean
    createdAt?: DateTimeFilter<"WritingPrompt"> | Date | string
    submissions?: SubmissionListRelationFilter
  }, "id">

  export type WritingPromptOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    genre?: SortOrder
    body?: SortOrder
    topicTags?: SortOrder
    targetLevel?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: WritingPromptCountOrderByAggregateInput
    _avg?: WritingPromptAvgOrderByAggregateInput
    _max?: WritingPromptMaxOrderByAggregateInput
    _min?: WritingPromptMinOrderByAggregateInput
    _sum?: WritingPromptSumOrderByAggregateInput
  }

  export type WritingPromptScalarWhereWithAggregatesInput = {
    AND?: WritingPromptScalarWhereWithAggregatesInput | WritingPromptScalarWhereWithAggregatesInput[]
    OR?: WritingPromptScalarWhereWithAggregatesInput[]
    NOT?: WritingPromptScalarWhereWithAggregatesInput | WritingPromptScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WritingPrompt"> | string
    title?: StringWithAggregatesFilter<"WritingPrompt"> | string
    genre?: EnumSubmissionGenreWithAggregatesFilter<"WritingPrompt"> | $Enums.SubmissionGenre
    body?: StringWithAggregatesFilter<"WritingPrompt"> | string
    topicTags?: StringNullableListFilter<"WritingPrompt">
    targetLevel?: IntNullableWithAggregatesFilter<"WritingPrompt"> | number | null
    isActive?: BoolWithAggregatesFilter<"WritingPrompt"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"WritingPrompt"> | Date | string
  }

  export type SubmissionWhereInput = {
    AND?: SubmissionWhereInput | SubmissionWhereInput[]
    OR?: SubmissionWhereInput[]
    NOT?: SubmissionWhereInput | SubmissionWhereInput[]
    id?: StringFilter<"Submission"> | string
    userId?: StringFilter<"Submission"> | string
    promptId?: StringNullableFilter<"Submission"> | string | null
    title?: StringNullableFilter<"Submission"> | string | null
    genre?: EnumSubmissionGenreFilter<"Submission"> | $Enums.SubmissionGenre
    body?: StringFilter<"Submission"> | string
    wordCount?: IntFilter<"Submission"> | number
    status?: EnumSubmissionStatusFilter<"Submission"> | $Enums.SubmissionStatus
    analysisJson?: JsonNullableFilter<"Submission">
    rawAIResponse?: StringNullableFilter<"Submission"> | string | null
    errorMessage?: StringNullableFilter<"Submission"> | string | null
    completedAt?: DateTimeNullableFilter<"Submission"> | Date | string | null
    createdAt?: DateTimeFilter<"Submission"> | Date | string
    updatedAt?: DateTimeFilter<"Submission"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    prompt?: XOR<WritingPromptNullableScalarRelationFilter, WritingPromptWhereInput> | null
    analysisRuns?: AnalysisRunListRelationFilter
    mistakes?: MistakeListRelationFilter
  }

  export type SubmissionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    promptId?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    genre?: SortOrder
    body?: SortOrder
    wordCount?: SortOrder
    status?: SortOrder
    analysisJson?: SortOrderInput | SortOrder
    rawAIResponse?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    prompt?: WritingPromptOrderByWithRelationInput
    analysisRuns?: AnalysisRunOrderByRelationAggregateInput
    mistakes?: MistakeOrderByRelationAggregateInput
  }

  export type SubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubmissionWhereInput | SubmissionWhereInput[]
    OR?: SubmissionWhereInput[]
    NOT?: SubmissionWhereInput | SubmissionWhereInput[]
    userId?: StringFilter<"Submission"> | string
    promptId?: StringNullableFilter<"Submission"> | string | null
    title?: StringNullableFilter<"Submission"> | string | null
    genre?: EnumSubmissionGenreFilter<"Submission"> | $Enums.SubmissionGenre
    body?: StringFilter<"Submission"> | string
    wordCount?: IntFilter<"Submission"> | number
    status?: EnumSubmissionStatusFilter<"Submission"> | $Enums.SubmissionStatus
    analysisJson?: JsonNullableFilter<"Submission">
    rawAIResponse?: StringNullableFilter<"Submission"> | string | null
    errorMessage?: StringNullableFilter<"Submission"> | string | null
    completedAt?: DateTimeNullableFilter<"Submission"> | Date | string | null
    createdAt?: DateTimeFilter<"Submission"> | Date | string
    updatedAt?: DateTimeFilter<"Submission"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    prompt?: XOR<WritingPromptNullableScalarRelationFilter, WritingPromptWhereInput> | null
    analysisRuns?: AnalysisRunListRelationFilter
    mistakes?: MistakeListRelationFilter
  }, "id">

  export type SubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    promptId?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    genre?: SortOrder
    body?: SortOrder
    wordCount?: SortOrder
    status?: SortOrder
    analysisJson?: SortOrderInput | SortOrder
    rawAIResponse?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubmissionCountOrderByAggregateInput
    _avg?: SubmissionAvgOrderByAggregateInput
    _max?: SubmissionMaxOrderByAggregateInput
    _min?: SubmissionMinOrderByAggregateInput
    _sum?: SubmissionSumOrderByAggregateInput
  }

  export type SubmissionScalarWhereWithAggregatesInput = {
    AND?: SubmissionScalarWhereWithAggregatesInput | SubmissionScalarWhereWithAggregatesInput[]
    OR?: SubmissionScalarWhereWithAggregatesInput[]
    NOT?: SubmissionScalarWhereWithAggregatesInput | SubmissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Submission"> | string
    userId?: StringWithAggregatesFilter<"Submission"> | string
    promptId?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    title?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    genre?: EnumSubmissionGenreWithAggregatesFilter<"Submission"> | $Enums.SubmissionGenre
    body?: StringWithAggregatesFilter<"Submission"> | string
    wordCount?: IntWithAggregatesFilter<"Submission"> | number
    status?: EnumSubmissionStatusWithAggregatesFilter<"Submission"> | $Enums.SubmissionStatus
    analysisJson?: JsonNullableWithAggregatesFilter<"Submission">
    rawAIResponse?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    errorMessage?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"Submission"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Submission"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Submission"> | Date | string
  }

  export type AnalysisRunWhereInput = {
    AND?: AnalysisRunWhereInput | AnalysisRunWhereInput[]
    OR?: AnalysisRunWhereInput[]
    NOT?: AnalysisRunWhereInput | AnalysisRunWhereInput[]
    id?: StringFilter<"AnalysisRun"> | string
    submissionId?: StringFilter<"AnalysisRun"> | string
    status?: EnumAnalysisStatusFilter<"AnalysisRun"> | $Enums.AnalysisStatus
    analyzerModel?: StringNullableFilter<"AnalysisRun"> | string | null
    analyzerVersion?: StringNullableFilter<"AnalysisRun"> | string | null
    rulesetVersion?: StringNullableFilter<"AnalysisRun"> | string | null
    summaryJson?: JsonNullableFilter<"AnalysisRun">
    rawModelOutput?: JsonNullableFilter<"AnalysisRun">
    errorMessage?: StringNullableFilter<"AnalysisRun"> | string | null
    startedAt?: DateTimeFilter<"AnalysisRun"> | Date | string
    completedAt?: DateTimeNullableFilter<"AnalysisRun"> | Date | string | null
    submission?: XOR<SubmissionScalarRelationFilter, SubmissionWhereInput>
    mistakes?: MistakeListRelationFilter
  }

  export type AnalysisRunOrderByWithRelationInput = {
    id?: SortOrder
    submissionId?: SortOrder
    status?: SortOrder
    analyzerModel?: SortOrderInput | SortOrder
    analyzerVersion?: SortOrderInput | SortOrder
    rulesetVersion?: SortOrderInput | SortOrder
    summaryJson?: SortOrderInput | SortOrder
    rawModelOutput?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    submission?: SubmissionOrderByWithRelationInput
    mistakes?: MistakeOrderByRelationAggregateInput
  }

  export type AnalysisRunWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AnalysisRunWhereInput | AnalysisRunWhereInput[]
    OR?: AnalysisRunWhereInput[]
    NOT?: AnalysisRunWhereInput | AnalysisRunWhereInput[]
    submissionId?: StringFilter<"AnalysisRun"> | string
    status?: EnumAnalysisStatusFilter<"AnalysisRun"> | $Enums.AnalysisStatus
    analyzerModel?: StringNullableFilter<"AnalysisRun"> | string | null
    analyzerVersion?: StringNullableFilter<"AnalysisRun"> | string | null
    rulesetVersion?: StringNullableFilter<"AnalysisRun"> | string | null
    summaryJson?: JsonNullableFilter<"AnalysisRun">
    rawModelOutput?: JsonNullableFilter<"AnalysisRun">
    errorMessage?: StringNullableFilter<"AnalysisRun"> | string | null
    startedAt?: DateTimeFilter<"AnalysisRun"> | Date | string
    completedAt?: DateTimeNullableFilter<"AnalysisRun"> | Date | string | null
    submission?: XOR<SubmissionScalarRelationFilter, SubmissionWhereInput>
    mistakes?: MistakeListRelationFilter
  }, "id">

  export type AnalysisRunOrderByWithAggregationInput = {
    id?: SortOrder
    submissionId?: SortOrder
    status?: SortOrder
    analyzerModel?: SortOrderInput | SortOrder
    analyzerVersion?: SortOrderInput | SortOrder
    rulesetVersion?: SortOrderInput | SortOrder
    summaryJson?: SortOrderInput | SortOrder
    rawModelOutput?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    _count?: AnalysisRunCountOrderByAggregateInput
    _max?: AnalysisRunMaxOrderByAggregateInput
    _min?: AnalysisRunMinOrderByAggregateInput
  }

  export type AnalysisRunScalarWhereWithAggregatesInput = {
    AND?: AnalysisRunScalarWhereWithAggregatesInput | AnalysisRunScalarWhereWithAggregatesInput[]
    OR?: AnalysisRunScalarWhereWithAggregatesInput[]
    NOT?: AnalysisRunScalarWhereWithAggregatesInput | AnalysisRunScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AnalysisRun"> | string
    submissionId?: StringWithAggregatesFilter<"AnalysisRun"> | string
    status?: EnumAnalysisStatusWithAggregatesFilter<"AnalysisRun"> | $Enums.AnalysisStatus
    analyzerModel?: StringNullableWithAggregatesFilter<"AnalysisRun"> | string | null
    analyzerVersion?: StringNullableWithAggregatesFilter<"AnalysisRun"> | string | null
    rulesetVersion?: StringNullableWithAggregatesFilter<"AnalysisRun"> | string | null
    summaryJson?: JsonNullableWithAggregatesFilter<"AnalysisRun">
    rawModelOutput?: JsonNullableWithAggregatesFilter<"AnalysisRun">
    errorMessage?: StringNullableWithAggregatesFilter<"AnalysisRun"> | string | null
    startedAt?: DateTimeWithAggregatesFilter<"AnalysisRun"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"AnalysisRun"> | Date | string | null
  }

  export type MistakeWhereInput = {
    AND?: MistakeWhereInput | MistakeWhereInput[]
    OR?: MistakeWhereInput[]
    NOT?: MistakeWhereInput | MistakeWhereInput[]
    id?: StringFilter<"Mistake"> | string
    submissionId?: StringFilter<"Mistake"> | string
    analysisRunId?: StringFilter<"Mistake"> | string
    pillar?: EnumPillarCodeFilter<"Mistake"> | $Enums.PillarCode
    subtype?: StringFilter<"Mistake"> | string
    severity?: EnumMistakeSeverityNullableFilter<"Mistake"> | $Enums.MistakeSeverity | null
    startOffset?: IntFilter<"Mistake"> | number
    endOffset?: IntFilter<"Mistake"> | number
    surfaceText?: StringNullableFilter<"Mistake"> | string | null
    message?: StringFilter<"Mistake"> | string
    suggestion?: StringNullableFilter<"Mistake"> | string | null
    canonicalRuleId?: StringNullableFilter<"Mistake"> | string | null
    confidence?: FloatNullableFilter<"Mistake"> | number | null
    createdAt?: DateTimeFilter<"Mistake"> | Date | string
    submission?: XOR<SubmissionScalarRelationFilter, SubmissionWhereInput>
    analysisRun?: XOR<AnalysisRunScalarRelationFilter, AnalysisRunWhereInput>
  }

  export type MistakeOrderByWithRelationInput = {
    id?: SortOrder
    submissionId?: SortOrder
    analysisRunId?: SortOrder
    pillar?: SortOrder
    subtype?: SortOrder
    severity?: SortOrderInput | SortOrder
    startOffset?: SortOrder
    endOffset?: SortOrder
    surfaceText?: SortOrderInput | SortOrder
    message?: SortOrder
    suggestion?: SortOrderInput | SortOrder
    canonicalRuleId?: SortOrderInput | SortOrder
    confidence?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    submission?: SubmissionOrderByWithRelationInput
    analysisRun?: AnalysisRunOrderByWithRelationInput
  }

  export type MistakeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MistakeWhereInput | MistakeWhereInput[]
    OR?: MistakeWhereInput[]
    NOT?: MistakeWhereInput | MistakeWhereInput[]
    submissionId?: StringFilter<"Mistake"> | string
    analysisRunId?: StringFilter<"Mistake"> | string
    pillar?: EnumPillarCodeFilter<"Mistake"> | $Enums.PillarCode
    subtype?: StringFilter<"Mistake"> | string
    severity?: EnumMistakeSeverityNullableFilter<"Mistake"> | $Enums.MistakeSeverity | null
    startOffset?: IntFilter<"Mistake"> | number
    endOffset?: IntFilter<"Mistake"> | number
    surfaceText?: StringNullableFilter<"Mistake"> | string | null
    message?: StringFilter<"Mistake"> | string
    suggestion?: StringNullableFilter<"Mistake"> | string | null
    canonicalRuleId?: StringNullableFilter<"Mistake"> | string | null
    confidence?: FloatNullableFilter<"Mistake"> | number | null
    createdAt?: DateTimeFilter<"Mistake"> | Date | string
    submission?: XOR<SubmissionScalarRelationFilter, SubmissionWhereInput>
    analysisRun?: XOR<AnalysisRunScalarRelationFilter, AnalysisRunWhereInput>
  }, "id">

  export type MistakeOrderByWithAggregationInput = {
    id?: SortOrder
    submissionId?: SortOrder
    analysisRunId?: SortOrder
    pillar?: SortOrder
    subtype?: SortOrder
    severity?: SortOrderInput | SortOrder
    startOffset?: SortOrder
    endOffset?: SortOrder
    surfaceText?: SortOrderInput | SortOrder
    message?: SortOrder
    suggestion?: SortOrderInput | SortOrder
    canonicalRuleId?: SortOrderInput | SortOrder
    confidence?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: MistakeCountOrderByAggregateInput
    _avg?: MistakeAvgOrderByAggregateInput
    _max?: MistakeMaxOrderByAggregateInput
    _min?: MistakeMinOrderByAggregateInput
    _sum?: MistakeSumOrderByAggregateInput
  }

  export type MistakeScalarWhereWithAggregatesInput = {
    AND?: MistakeScalarWhereWithAggregatesInput | MistakeScalarWhereWithAggregatesInput[]
    OR?: MistakeScalarWhereWithAggregatesInput[]
    NOT?: MistakeScalarWhereWithAggregatesInput | MistakeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Mistake"> | string
    submissionId?: StringWithAggregatesFilter<"Mistake"> | string
    analysisRunId?: StringWithAggregatesFilter<"Mistake"> | string
    pillar?: EnumPillarCodeWithAggregatesFilter<"Mistake"> | $Enums.PillarCode
    subtype?: StringWithAggregatesFilter<"Mistake"> | string
    severity?: EnumMistakeSeverityNullableWithAggregatesFilter<"Mistake"> | $Enums.MistakeSeverity | null
    startOffset?: IntWithAggregatesFilter<"Mistake"> | number
    endOffset?: IntWithAggregatesFilter<"Mistake"> | number
    surfaceText?: StringNullableWithAggregatesFilter<"Mistake"> | string | null
    message?: StringWithAggregatesFilter<"Mistake"> | string
    suggestion?: StringNullableWithAggregatesFilter<"Mistake"> | string | null
    canonicalRuleId?: StringNullableWithAggregatesFilter<"Mistake"> | string | null
    confidence?: FloatNullableWithAggregatesFilter<"Mistake"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Mistake"> | Date | string
  }

  export type UserStatsWhereInput = {
    AND?: UserStatsWhereInput | UserStatsWhereInput[]
    OR?: UserStatsWhereInput[]
    NOT?: UserStatsWhereInput | UserStatsWhereInput[]
    id?: StringFilter<"UserStats"> | string
    userId?: StringFilter<"UserStats"> | string
    totalXp?: IntFilter<"UserStats"> | number
    level?: IntFilter<"UserStats"> | number
    currentStreak?: IntFilter<"UserStats"> | number
    longestStreak?: IntFilter<"UserStats"> | number
    lastActiveDate?: DateTimeNullableFilter<"UserStats"> | Date | string | null
    updatedAt?: DateTimeFilter<"UserStats"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserStatsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    totalXp?: SortOrder
    level?: SortOrder
    currentStreak?: SortOrder
    longestStreak?: SortOrder
    lastActiveDate?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserStatsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserStatsWhereInput | UserStatsWhereInput[]
    OR?: UserStatsWhereInput[]
    NOT?: UserStatsWhereInput | UserStatsWhereInput[]
    totalXp?: IntFilter<"UserStats"> | number
    level?: IntFilter<"UserStats"> | number
    currentStreak?: IntFilter<"UserStats"> | number
    longestStreak?: IntFilter<"UserStats"> | number
    lastActiveDate?: DateTimeNullableFilter<"UserStats"> | Date | string | null
    updatedAt?: DateTimeFilter<"UserStats"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type UserStatsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    totalXp?: SortOrder
    level?: SortOrder
    currentStreak?: SortOrder
    longestStreak?: SortOrder
    lastActiveDate?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: UserStatsCountOrderByAggregateInput
    _avg?: UserStatsAvgOrderByAggregateInput
    _max?: UserStatsMaxOrderByAggregateInput
    _min?: UserStatsMinOrderByAggregateInput
    _sum?: UserStatsSumOrderByAggregateInput
  }

  export type UserStatsScalarWhereWithAggregatesInput = {
    AND?: UserStatsScalarWhereWithAggregatesInput | UserStatsScalarWhereWithAggregatesInput[]
    OR?: UserStatsScalarWhereWithAggregatesInput[]
    NOT?: UserStatsScalarWhereWithAggregatesInput | UserStatsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserStats"> | string
    userId?: StringWithAggregatesFilter<"UserStats"> | string
    totalXp?: IntWithAggregatesFilter<"UserStats"> | number
    level?: IntWithAggregatesFilter<"UserStats"> | number
    currentStreak?: IntWithAggregatesFilter<"UserStats"> | number
    longestStreak?: IntWithAggregatesFilter<"UserStats"> | number
    lastActiveDate?: DateTimeNullableWithAggregatesFilter<"UserStats"> | Date | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"UserStats"> | Date | string
  }

  export type XpEventWhereInput = {
    AND?: XpEventWhereInput | XpEventWhereInput[]
    OR?: XpEventWhereInput[]
    NOT?: XpEventWhereInput | XpEventWhereInput[]
    id?: StringFilter<"XpEvent"> | string
    userId?: StringFilter<"XpEvent"> | string
    eventType?: StringFilter<"XpEvent"> | string
    xpDelta?: IntFilter<"XpEvent"> | number
    payload?: JsonNullableFilter<"XpEvent">
    createdAt?: DateTimeFilter<"XpEvent"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type XpEventOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    eventType?: SortOrder
    xpDelta?: SortOrder
    payload?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type XpEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: XpEventWhereInput | XpEventWhereInput[]
    OR?: XpEventWhereInput[]
    NOT?: XpEventWhereInput | XpEventWhereInput[]
    userId?: StringFilter<"XpEvent"> | string
    eventType?: StringFilter<"XpEvent"> | string
    xpDelta?: IntFilter<"XpEvent"> | number
    payload?: JsonNullableFilter<"XpEvent">
    createdAt?: DateTimeFilter<"XpEvent"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type XpEventOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    eventType?: SortOrder
    xpDelta?: SortOrder
    payload?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: XpEventCountOrderByAggregateInput
    _avg?: XpEventAvgOrderByAggregateInput
    _max?: XpEventMaxOrderByAggregateInput
    _min?: XpEventMinOrderByAggregateInput
    _sum?: XpEventSumOrderByAggregateInput
  }

  export type XpEventScalarWhereWithAggregatesInput = {
    AND?: XpEventScalarWhereWithAggregatesInput | XpEventScalarWhereWithAggregatesInput[]
    OR?: XpEventScalarWhereWithAggregatesInput[]
    NOT?: XpEventScalarWhereWithAggregatesInput | XpEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"XpEvent"> | string
    userId?: StringWithAggregatesFilter<"XpEvent"> | string
    eventType?: StringWithAggregatesFilter<"XpEvent"> | string
    xpDelta?: IntWithAggregatesFilter<"XpEvent"> | number
    payload?: JsonNullableWithAggregatesFilter<"XpEvent">
    createdAt?: DateTimeWithAggregatesFilter<"XpEvent"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string | null
    displayName?: string | null
    image?: string | null
    isNewUser?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileCreateNestedOneWithoutUserInput
    submissions?: SubmissionCreateNestedManyWithoutUserInput
    stats?: UserStatsCreateNestedOneWithoutUserInput
    xpEvents?: XpEventCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string | null
    displayName?: string | null
    image?: string | null
    isNewUser?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    stats?: UserStatsUncheckedCreateNestedOneWithoutUserInput
    xpEvents?: XpEventUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isNewUser?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    submissions?: SubmissionUpdateManyWithoutUserNestedInput
    stats?: UserStatsUpdateOneWithoutUserNestedInput
    xpEvents?: XpEventUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isNewUser?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    stats?: UserStatsUncheckedUpdateOneWithoutUserNestedInput
    xpEvents?: XpEventUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string | null
    displayName?: string | null
    image?: string | null
    isNewUser?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isNewUser?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isNewUser?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateInput = {
    id?: string
    tokenHash: string
    userAgent?: string | null
    ip?: string | null
    isRevoked?: boolean
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRefreshTokensInput
  }

  export type RefreshTokenUncheckedCreateInput = {
    id?: string
    tokenHash: string
    userId: string
    userAgent?: string | null
    ip?: string | null
    isRevoked?: boolean
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RefreshTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRefreshTokensNestedInput
  }

  export type RefreshTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateManyInput = {
    id?: string
    tokenHash: string
    userId: string
    userAgent?: string | null
    ip?: string | null
    isRevoked?: boolean
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RefreshTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileCreateInput = {
    id?: string
    primaryRole: $Enums.PrimaryRole
    englishReadingSelfScore: number
    englishWritingSelfScore: number
    primaryGoal?: $Enums.PrimaryGoal | null
    weeklyTimeMinutes?: number | null
    interestTags?: UserProfileCreateinterestTagsInput | string[]
    preferredGenres?: UserProfileCreatepreferredGenresInput | $Enums.SubmissionGenre[]
    localePreference?: string
    grammarScore?: number | null
    vocabularyScore?: number | null
    fluencyScore?: number | null
    pronunciationScore?: number | null
    targetScoreGoal?: number | null
    dailyGoalMinutes?: number | null
    preferredLearningStyle?: string | null
    weakAreas?: UserProfileCreateweakAreasInput | string[]
    initialAssessmentDone?: boolean
    onboardingCompletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type UserProfileUncheckedCreateInput = {
    id?: string
    userId: string
    primaryRole: $Enums.PrimaryRole
    englishReadingSelfScore: number
    englishWritingSelfScore: number
    primaryGoal?: $Enums.PrimaryGoal | null
    weeklyTimeMinutes?: number | null
    interestTags?: UserProfileCreateinterestTagsInput | string[]
    preferredGenres?: UserProfileCreatepreferredGenresInput | $Enums.SubmissionGenre[]
    localePreference?: string
    grammarScore?: number | null
    vocabularyScore?: number | null
    fluencyScore?: number | null
    pronunciationScore?: number | null
    targetScoreGoal?: number | null
    dailyGoalMinutes?: number | null
    preferredLearningStyle?: string | null
    weakAreas?: UserProfileCreateweakAreasInput | string[]
    initialAssessmentDone?: boolean
    onboardingCompletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    primaryRole?: EnumPrimaryRoleFieldUpdateOperationsInput | $Enums.PrimaryRole
    englishReadingSelfScore?: IntFieldUpdateOperationsInput | number
    englishWritingSelfScore?: IntFieldUpdateOperationsInput | number
    primaryGoal?: NullableEnumPrimaryGoalFieldUpdateOperationsInput | $Enums.PrimaryGoal | null
    weeklyTimeMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    interestTags?: UserProfileUpdateinterestTagsInput | string[]
    preferredGenres?: UserProfileUpdatepreferredGenresInput | $Enums.SubmissionGenre[]
    localePreference?: StringFieldUpdateOperationsInput | string
    grammarScore?: NullableIntFieldUpdateOperationsInput | number | null
    vocabularyScore?: NullableIntFieldUpdateOperationsInput | number | null
    fluencyScore?: NullableIntFieldUpdateOperationsInput | number | null
    pronunciationScore?: NullableIntFieldUpdateOperationsInput | number | null
    targetScoreGoal?: NullableIntFieldUpdateOperationsInput | number | null
    dailyGoalMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    preferredLearningStyle?: NullableStringFieldUpdateOperationsInput | string | null
    weakAreas?: UserProfileUpdateweakAreasInput | string[]
    initialAssessmentDone?: BoolFieldUpdateOperationsInput | boolean
    onboardingCompletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type UserProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    primaryRole?: EnumPrimaryRoleFieldUpdateOperationsInput | $Enums.PrimaryRole
    englishReadingSelfScore?: IntFieldUpdateOperationsInput | number
    englishWritingSelfScore?: IntFieldUpdateOperationsInput | number
    primaryGoal?: NullableEnumPrimaryGoalFieldUpdateOperationsInput | $Enums.PrimaryGoal | null
    weeklyTimeMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    interestTags?: UserProfileUpdateinterestTagsInput | string[]
    preferredGenres?: UserProfileUpdatepreferredGenresInput | $Enums.SubmissionGenre[]
    localePreference?: StringFieldUpdateOperationsInput | string
    grammarScore?: NullableIntFieldUpdateOperationsInput | number | null
    vocabularyScore?: NullableIntFieldUpdateOperationsInput | number | null
    fluencyScore?: NullableIntFieldUpdateOperationsInput | number | null
    pronunciationScore?: NullableIntFieldUpdateOperationsInput | number | null
    targetScoreGoal?: NullableIntFieldUpdateOperationsInput | number | null
    dailyGoalMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    preferredLearningStyle?: NullableStringFieldUpdateOperationsInput | string | null
    weakAreas?: UserProfileUpdateweakAreasInput | string[]
    initialAssessmentDone?: BoolFieldUpdateOperationsInput | boolean
    onboardingCompletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileCreateManyInput = {
    id?: string
    userId: string
    primaryRole: $Enums.PrimaryRole
    englishReadingSelfScore: number
    englishWritingSelfScore: number
    primaryGoal?: $Enums.PrimaryGoal | null
    weeklyTimeMinutes?: number | null
    interestTags?: UserProfileCreateinterestTagsInput | string[]
    preferredGenres?: UserProfileCreatepreferredGenresInput | $Enums.SubmissionGenre[]
    localePreference?: string
    grammarScore?: number | null
    vocabularyScore?: number | null
    fluencyScore?: number | null
    pronunciationScore?: number | null
    targetScoreGoal?: number | null
    dailyGoalMinutes?: number | null
    preferredLearningStyle?: string | null
    weakAreas?: UserProfileCreateweakAreasInput | string[]
    initialAssessmentDone?: boolean
    onboardingCompletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    primaryRole?: EnumPrimaryRoleFieldUpdateOperationsInput | $Enums.PrimaryRole
    englishReadingSelfScore?: IntFieldUpdateOperationsInput | number
    englishWritingSelfScore?: IntFieldUpdateOperationsInput | number
    primaryGoal?: NullableEnumPrimaryGoalFieldUpdateOperationsInput | $Enums.PrimaryGoal | null
    weeklyTimeMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    interestTags?: UserProfileUpdateinterestTagsInput | string[]
    preferredGenres?: UserProfileUpdatepreferredGenresInput | $Enums.SubmissionGenre[]
    localePreference?: StringFieldUpdateOperationsInput | string
    grammarScore?: NullableIntFieldUpdateOperationsInput | number | null
    vocabularyScore?: NullableIntFieldUpdateOperationsInput | number | null
    fluencyScore?: NullableIntFieldUpdateOperationsInput | number | null
    pronunciationScore?: NullableIntFieldUpdateOperationsInput | number | null
    targetScoreGoal?: NullableIntFieldUpdateOperationsInput | number | null
    dailyGoalMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    preferredLearningStyle?: NullableStringFieldUpdateOperationsInput | string | null
    weakAreas?: UserProfileUpdateweakAreasInput | string[]
    initialAssessmentDone?: BoolFieldUpdateOperationsInput | boolean
    onboardingCompletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    primaryRole?: EnumPrimaryRoleFieldUpdateOperationsInput | $Enums.PrimaryRole
    englishReadingSelfScore?: IntFieldUpdateOperationsInput | number
    englishWritingSelfScore?: IntFieldUpdateOperationsInput | number
    primaryGoal?: NullableEnumPrimaryGoalFieldUpdateOperationsInput | $Enums.PrimaryGoal | null
    weeklyTimeMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    interestTags?: UserProfileUpdateinterestTagsInput | string[]
    preferredGenres?: UserProfileUpdatepreferredGenresInput | $Enums.SubmissionGenre[]
    localePreference?: StringFieldUpdateOperationsInput | string
    grammarScore?: NullableIntFieldUpdateOperationsInput | number | null
    vocabularyScore?: NullableIntFieldUpdateOperationsInput | number | null
    fluencyScore?: NullableIntFieldUpdateOperationsInput | number | null
    pronunciationScore?: NullableIntFieldUpdateOperationsInput | number | null
    targetScoreGoal?: NullableIntFieldUpdateOperationsInput | number | null
    dailyGoalMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    preferredLearningStyle?: NullableStringFieldUpdateOperationsInput | string | null
    weakAreas?: UserProfileUpdateweakAreasInput | string[]
    initialAssessmentDone?: BoolFieldUpdateOperationsInput | boolean
    onboardingCompletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WritingPromptCreateInput = {
    id?: string
    title: string
    genre: $Enums.SubmissionGenre
    body: string
    topicTags?: WritingPromptCreatetopicTagsInput | string[]
    targetLevel?: number | null
    isActive?: boolean
    createdAt?: Date | string
    submissions?: SubmissionCreateNestedManyWithoutPromptInput
  }

  export type WritingPromptUncheckedCreateInput = {
    id?: string
    title: string
    genre: $Enums.SubmissionGenre
    body: string
    topicTags?: WritingPromptCreatetopicTagsInput | string[]
    targetLevel?: number | null
    isActive?: boolean
    createdAt?: Date | string
    submissions?: SubmissionUncheckedCreateNestedManyWithoutPromptInput
  }

  export type WritingPromptUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    genre?: EnumSubmissionGenreFieldUpdateOperationsInput | $Enums.SubmissionGenre
    body?: StringFieldUpdateOperationsInput | string
    topicTags?: WritingPromptUpdatetopicTagsInput | string[]
    targetLevel?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUpdateManyWithoutPromptNestedInput
  }

  export type WritingPromptUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    genre?: EnumSubmissionGenreFieldUpdateOperationsInput | $Enums.SubmissionGenre
    body?: StringFieldUpdateOperationsInput | string
    topicTags?: WritingPromptUpdatetopicTagsInput | string[]
    targetLevel?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUncheckedUpdateManyWithoutPromptNestedInput
  }

  export type WritingPromptCreateManyInput = {
    id?: string
    title: string
    genre: $Enums.SubmissionGenre
    body: string
    topicTags?: WritingPromptCreatetopicTagsInput | string[]
    targetLevel?: number | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type WritingPromptUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    genre?: EnumSubmissionGenreFieldUpdateOperationsInput | $Enums.SubmissionGenre
    body?: StringFieldUpdateOperationsInput | string
    topicTags?: WritingPromptUpdatetopicTagsInput | string[]
    targetLevel?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WritingPromptUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    genre?: EnumSubmissionGenreFieldUpdateOperationsInput | $Enums.SubmissionGenre
    body?: StringFieldUpdateOperationsInput | string
    topicTags?: WritingPromptUpdatetopicTagsInput | string[]
    targetLevel?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionCreateInput = {
    id?: string
    title?: string | null
    genre: $Enums.SubmissionGenre
    body: string
    wordCount: number
    status?: $Enums.SubmissionStatus
    analysisJson?: NullableJsonNullValueInput | InputJsonValue
    rawAIResponse?: string | null
    errorMessage?: string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSubmissionsInput
    prompt?: WritingPromptCreateNestedOneWithoutSubmissionsInput
    analysisRuns?: AnalysisRunCreateNestedManyWithoutSubmissionInput
    mistakes?: MistakeCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionUncheckedCreateInput = {
    id?: string
    userId: string
    promptId?: string | null
    title?: string | null
    genre: $Enums.SubmissionGenre
    body: string
    wordCount: number
    status?: $Enums.SubmissionStatus
    analysisJson?: NullableJsonNullValueInput | InputJsonValue
    rawAIResponse?: string | null
    errorMessage?: string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    analysisRuns?: AnalysisRunUncheckedCreateNestedManyWithoutSubmissionInput
    mistakes?: MistakeUncheckedCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: EnumSubmissionGenreFieldUpdateOperationsInput | $Enums.SubmissionGenre
    body?: StringFieldUpdateOperationsInput | string
    wordCount?: IntFieldUpdateOperationsInput | number
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    analysisJson?: NullableJsonNullValueInput | InputJsonValue
    rawAIResponse?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubmissionsNestedInput
    prompt?: WritingPromptUpdateOneWithoutSubmissionsNestedInput
    analysisRuns?: AnalysisRunUpdateManyWithoutSubmissionNestedInput
    mistakes?: MistakeUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    promptId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: EnumSubmissionGenreFieldUpdateOperationsInput | $Enums.SubmissionGenre
    body?: StringFieldUpdateOperationsInput | string
    wordCount?: IntFieldUpdateOperationsInput | number
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    analysisJson?: NullableJsonNullValueInput | InputJsonValue
    rawAIResponse?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    analysisRuns?: AnalysisRunUncheckedUpdateManyWithoutSubmissionNestedInput
    mistakes?: MistakeUncheckedUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionCreateManyInput = {
    id?: string
    userId: string
    promptId?: string | null
    title?: string | null
    genre: $Enums.SubmissionGenre
    body: string
    wordCount: number
    status?: $Enums.SubmissionStatus
    analysisJson?: NullableJsonNullValueInput | InputJsonValue
    rawAIResponse?: string | null
    errorMessage?: string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubmissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: EnumSubmissionGenreFieldUpdateOperationsInput | $Enums.SubmissionGenre
    body?: StringFieldUpdateOperationsInput | string
    wordCount?: IntFieldUpdateOperationsInput | number
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    analysisJson?: NullableJsonNullValueInput | InputJsonValue
    rawAIResponse?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    promptId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: EnumSubmissionGenreFieldUpdateOperationsInput | $Enums.SubmissionGenre
    body?: StringFieldUpdateOperationsInput | string
    wordCount?: IntFieldUpdateOperationsInput | number
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    analysisJson?: NullableJsonNullValueInput | InputJsonValue
    rawAIResponse?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalysisRunCreateInput = {
    id?: string
    status?: $Enums.AnalysisStatus
    analyzerModel?: string | null
    analyzerVersion?: string | null
    rulesetVersion?: string | null
    summaryJson?: NullableJsonNullValueInput | InputJsonValue
    rawModelOutput?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: string | null
    startedAt?: Date | string
    completedAt?: Date | string | null
    submission: SubmissionCreateNestedOneWithoutAnalysisRunsInput
    mistakes?: MistakeCreateNestedManyWithoutAnalysisRunInput
  }

  export type AnalysisRunUncheckedCreateInput = {
    id?: string
    submissionId: string
    status?: $Enums.AnalysisStatus
    analyzerModel?: string | null
    analyzerVersion?: string | null
    rulesetVersion?: string | null
    summaryJson?: NullableJsonNullValueInput | InputJsonValue
    rawModelOutput?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: string | null
    startedAt?: Date | string
    completedAt?: Date | string | null
    mistakes?: MistakeUncheckedCreateNestedManyWithoutAnalysisRunInput
  }

  export type AnalysisRunUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAnalysisStatusFieldUpdateOperationsInput | $Enums.AnalysisStatus
    analyzerModel?: NullableStringFieldUpdateOperationsInput | string | null
    analyzerVersion?: NullableStringFieldUpdateOperationsInput | string | null
    rulesetVersion?: NullableStringFieldUpdateOperationsInput | string | null
    summaryJson?: NullableJsonNullValueInput | InputJsonValue
    rawModelOutput?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submission?: SubmissionUpdateOneRequiredWithoutAnalysisRunsNestedInput
    mistakes?: MistakeUpdateManyWithoutAnalysisRunNestedInput
  }

  export type AnalysisRunUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    status?: EnumAnalysisStatusFieldUpdateOperationsInput | $Enums.AnalysisStatus
    analyzerModel?: NullableStringFieldUpdateOperationsInput | string | null
    analyzerVersion?: NullableStringFieldUpdateOperationsInput | string | null
    rulesetVersion?: NullableStringFieldUpdateOperationsInput | string | null
    summaryJson?: NullableJsonNullValueInput | InputJsonValue
    rawModelOutput?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mistakes?: MistakeUncheckedUpdateManyWithoutAnalysisRunNestedInput
  }

  export type AnalysisRunCreateManyInput = {
    id?: string
    submissionId: string
    status?: $Enums.AnalysisStatus
    analyzerModel?: string | null
    analyzerVersion?: string | null
    rulesetVersion?: string | null
    summaryJson?: NullableJsonNullValueInput | InputJsonValue
    rawModelOutput?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: string | null
    startedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type AnalysisRunUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAnalysisStatusFieldUpdateOperationsInput | $Enums.AnalysisStatus
    analyzerModel?: NullableStringFieldUpdateOperationsInput | string | null
    analyzerVersion?: NullableStringFieldUpdateOperationsInput | string | null
    rulesetVersion?: NullableStringFieldUpdateOperationsInput | string | null
    summaryJson?: NullableJsonNullValueInput | InputJsonValue
    rawModelOutput?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AnalysisRunUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    status?: EnumAnalysisStatusFieldUpdateOperationsInput | $Enums.AnalysisStatus
    analyzerModel?: NullableStringFieldUpdateOperationsInput | string | null
    analyzerVersion?: NullableStringFieldUpdateOperationsInput | string | null
    rulesetVersion?: NullableStringFieldUpdateOperationsInput | string | null
    summaryJson?: NullableJsonNullValueInput | InputJsonValue
    rawModelOutput?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MistakeCreateInput = {
    id?: string
    pillar: $Enums.PillarCode
    subtype: string
    severity?: $Enums.MistakeSeverity | null
    startOffset: number
    endOffset: number
    surfaceText?: string | null
    message: string
    suggestion?: string | null
    canonicalRuleId?: string | null
    confidence?: number | null
    createdAt?: Date | string
    submission: SubmissionCreateNestedOneWithoutMistakesInput
    analysisRun: AnalysisRunCreateNestedOneWithoutMistakesInput
  }

  export type MistakeUncheckedCreateInput = {
    id?: string
    submissionId: string
    analysisRunId: string
    pillar: $Enums.PillarCode
    subtype: string
    severity?: $Enums.MistakeSeverity | null
    startOffset: number
    endOffset: number
    surfaceText?: string | null
    message: string
    suggestion?: string | null
    canonicalRuleId?: string | null
    confidence?: number | null
    createdAt?: Date | string
  }

  export type MistakeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pillar?: EnumPillarCodeFieldUpdateOperationsInput | $Enums.PillarCode
    subtype?: StringFieldUpdateOperationsInput | string
    severity?: NullableEnumMistakeSeverityFieldUpdateOperationsInput | $Enums.MistakeSeverity | null
    startOffset?: IntFieldUpdateOperationsInput | number
    endOffset?: IntFieldUpdateOperationsInput | number
    surfaceText?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    suggestion?: NullableStringFieldUpdateOperationsInput | string | null
    canonicalRuleId?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submission?: SubmissionUpdateOneRequiredWithoutMistakesNestedInput
    analysisRun?: AnalysisRunUpdateOneRequiredWithoutMistakesNestedInput
  }

  export type MistakeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    analysisRunId?: StringFieldUpdateOperationsInput | string
    pillar?: EnumPillarCodeFieldUpdateOperationsInput | $Enums.PillarCode
    subtype?: StringFieldUpdateOperationsInput | string
    severity?: NullableEnumMistakeSeverityFieldUpdateOperationsInput | $Enums.MistakeSeverity | null
    startOffset?: IntFieldUpdateOperationsInput | number
    endOffset?: IntFieldUpdateOperationsInput | number
    surfaceText?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    suggestion?: NullableStringFieldUpdateOperationsInput | string | null
    canonicalRuleId?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MistakeCreateManyInput = {
    id?: string
    submissionId: string
    analysisRunId: string
    pillar: $Enums.PillarCode
    subtype: string
    severity?: $Enums.MistakeSeverity | null
    startOffset: number
    endOffset: number
    surfaceText?: string | null
    message: string
    suggestion?: string | null
    canonicalRuleId?: string | null
    confidence?: number | null
    createdAt?: Date | string
  }

  export type MistakeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    pillar?: EnumPillarCodeFieldUpdateOperationsInput | $Enums.PillarCode
    subtype?: StringFieldUpdateOperationsInput | string
    severity?: NullableEnumMistakeSeverityFieldUpdateOperationsInput | $Enums.MistakeSeverity | null
    startOffset?: IntFieldUpdateOperationsInput | number
    endOffset?: IntFieldUpdateOperationsInput | number
    surfaceText?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    suggestion?: NullableStringFieldUpdateOperationsInput | string | null
    canonicalRuleId?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MistakeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    analysisRunId?: StringFieldUpdateOperationsInput | string
    pillar?: EnumPillarCodeFieldUpdateOperationsInput | $Enums.PillarCode
    subtype?: StringFieldUpdateOperationsInput | string
    severity?: NullableEnumMistakeSeverityFieldUpdateOperationsInput | $Enums.MistakeSeverity | null
    startOffset?: IntFieldUpdateOperationsInput | number
    endOffset?: IntFieldUpdateOperationsInput | number
    surfaceText?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    suggestion?: NullableStringFieldUpdateOperationsInput | string | null
    canonicalRuleId?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStatsCreateInput = {
    id?: string
    totalXp?: number
    level?: number
    currentStreak?: number
    longestStreak?: number
    lastActiveDate?: Date | string | null
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutStatsInput
  }

  export type UserStatsUncheckedCreateInput = {
    id?: string
    userId: string
    totalXp?: number
    level?: number
    currentStreak?: number
    longestStreak?: number
    lastActiveDate?: Date | string | null
    updatedAt?: Date | string
  }

  export type UserStatsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalXp?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    lastActiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStatsNestedInput
  }

  export type UserStatsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    totalXp?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    lastActiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStatsCreateManyInput = {
    id?: string
    userId: string
    totalXp?: number
    level?: number
    currentStreak?: number
    longestStreak?: number
    lastActiveDate?: Date | string | null
    updatedAt?: Date | string
  }

  export type UserStatsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalXp?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    lastActiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStatsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    totalXp?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    lastActiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type XpEventCreateInput = {
    id?: string
    eventType: string
    xpDelta: number
    payload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutXpEventsInput
  }

  export type XpEventUncheckedCreateInput = {
    id?: string
    userId: string
    eventType: string
    xpDelta: number
    payload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type XpEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    xpDelta?: IntFieldUpdateOperationsInput | number
    payload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutXpEventsNestedInput
  }

  export type XpEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    xpDelta?: IntFieldUpdateOperationsInput | number
    payload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type XpEventCreateManyInput = {
    id?: string
    userId: string
    eventType: string
    xpDelta: number
    payload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type XpEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    xpDelta?: IntFieldUpdateOperationsInput | number
    payload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type XpEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    xpDelta?: IntFieldUpdateOperationsInput | number
    payload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserProfileNullableScalarRelationFilter = {
    is?: UserProfileWhereInput | null
    isNot?: UserProfileWhereInput | null
  }

  export type SubmissionListRelationFilter = {
    every?: SubmissionWhereInput
    some?: SubmissionWhereInput
    none?: SubmissionWhereInput
  }

  export type UserStatsNullableScalarRelationFilter = {
    is?: UserStatsWhereInput | null
    isNot?: UserStatsWhereInput | null
  }

  export type XpEventListRelationFilter = {
    every?: XpEventWhereInput
    some?: XpEventWhereInput
    none?: XpEventWhereInput
  }

  export type RefreshTokenListRelationFilter = {
    every?: RefreshTokenWhereInput
    some?: RefreshTokenWhereInput
    none?: RefreshTokenWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SubmissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type XpEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RefreshTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    displayName?: SortOrder
    image?: SortOrder
    isNewUser?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    displayName?: SortOrder
    image?: SortOrder
    isNewUser?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    displayName?: SortOrder
    image?: SortOrder
    isNewUser?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RefreshTokenCountOrderByAggregateInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    userId?: SortOrder
    userAgent?: SortOrder
    ip?: SortOrder
    isRevoked?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RefreshTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    userId?: SortOrder
    userAgent?: SortOrder
    ip?: SortOrder
    isRevoked?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RefreshTokenMinOrderByAggregateInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    userId?: SortOrder
    userAgent?: SortOrder
    ip?: SortOrder
    isRevoked?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumPrimaryRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.PrimaryRole | EnumPrimaryRoleFieldRefInput<$PrismaModel>
    in?: $Enums.PrimaryRole[] | ListEnumPrimaryRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.PrimaryRole[] | ListEnumPrimaryRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumPrimaryRoleFilter<$PrismaModel> | $Enums.PrimaryRole
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumPrimaryGoalNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PrimaryGoal | EnumPrimaryGoalFieldRefInput<$PrismaModel> | null
    in?: $Enums.PrimaryGoal[] | ListEnumPrimaryGoalFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PrimaryGoal[] | ListEnumPrimaryGoalFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPrimaryGoalNullableFilter<$PrismaModel> | $Enums.PrimaryGoal | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumSubmissionGenreNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.SubmissionGenre[] | ListEnumSubmissionGenreFieldRefInput<$PrismaModel> | null
    has?: $Enums.SubmissionGenre | EnumSubmissionGenreFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.SubmissionGenre[] | ListEnumSubmissionGenreFieldRefInput<$PrismaModel>
    hasSome?: $Enums.SubmissionGenre[] | ListEnumSubmissionGenreFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    primaryRole?: SortOrder
    englishReadingSelfScore?: SortOrder
    englishWritingSelfScore?: SortOrder
    primaryGoal?: SortOrder
    weeklyTimeMinutes?: SortOrder
    interestTags?: SortOrder
    preferredGenres?: SortOrder
    localePreference?: SortOrder
    grammarScore?: SortOrder
    vocabularyScore?: SortOrder
    fluencyScore?: SortOrder
    pronunciationScore?: SortOrder
    targetScoreGoal?: SortOrder
    dailyGoalMinutes?: SortOrder
    preferredLearningStyle?: SortOrder
    weakAreas?: SortOrder
    initialAssessmentDone?: SortOrder
    onboardingCompletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfileAvgOrderByAggregateInput = {
    englishReadingSelfScore?: SortOrder
    englishWritingSelfScore?: SortOrder
    weeklyTimeMinutes?: SortOrder
    grammarScore?: SortOrder
    vocabularyScore?: SortOrder
    fluencyScore?: SortOrder
    pronunciationScore?: SortOrder
    targetScoreGoal?: SortOrder
    dailyGoalMinutes?: SortOrder
  }

  export type UserProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    primaryRole?: SortOrder
    englishReadingSelfScore?: SortOrder
    englishWritingSelfScore?: SortOrder
    primaryGoal?: SortOrder
    weeklyTimeMinutes?: SortOrder
    localePreference?: SortOrder
    grammarScore?: SortOrder
    vocabularyScore?: SortOrder
    fluencyScore?: SortOrder
    pronunciationScore?: SortOrder
    targetScoreGoal?: SortOrder
    dailyGoalMinutes?: SortOrder
    preferredLearningStyle?: SortOrder
    initialAssessmentDone?: SortOrder
    onboardingCompletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    primaryRole?: SortOrder
    englishReadingSelfScore?: SortOrder
    englishWritingSelfScore?: SortOrder
    primaryGoal?: SortOrder
    weeklyTimeMinutes?: SortOrder
    localePreference?: SortOrder
    grammarScore?: SortOrder
    vocabularyScore?: SortOrder
    fluencyScore?: SortOrder
    pronunciationScore?: SortOrder
    targetScoreGoal?: SortOrder
    dailyGoalMinutes?: SortOrder
    preferredLearningStyle?: SortOrder
    initialAssessmentDone?: SortOrder
    onboardingCompletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfileSumOrderByAggregateInput = {
    englishReadingSelfScore?: SortOrder
    englishWritingSelfScore?: SortOrder
    weeklyTimeMinutes?: SortOrder
    grammarScore?: SortOrder
    vocabularyScore?: SortOrder
    fluencyScore?: SortOrder
    pronunciationScore?: SortOrder
    targetScoreGoal?: SortOrder
    dailyGoalMinutes?: SortOrder
  }

  export type EnumPrimaryRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PrimaryRole | EnumPrimaryRoleFieldRefInput<$PrismaModel>
    in?: $Enums.PrimaryRole[] | ListEnumPrimaryRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.PrimaryRole[] | ListEnumPrimaryRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumPrimaryRoleWithAggregatesFilter<$PrismaModel> | $Enums.PrimaryRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPrimaryRoleFilter<$PrismaModel>
    _max?: NestedEnumPrimaryRoleFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumPrimaryGoalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PrimaryGoal | EnumPrimaryGoalFieldRefInput<$PrismaModel> | null
    in?: $Enums.PrimaryGoal[] | ListEnumPrimaryGoalFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PrimaryGoal[] | ListEnumPrimaryGoalFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPrimaryGoalNullableWithAggregatesFilter<$PrismaModel> | $Enums.PrimaryGoal | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPrimaryGoalNullableFilter<$PrismaModel>
    _max?: NestedEnumPrimaryGoalNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumSubmissionGenreFilter<$PrismaModel = never> = {
    equals?: $Enums.SubmissionGenre | EnumSubmissionGenreFieldRefInput<$PrismaModel>
    in?: $Enums.SubmissionGenre[] | ListEnumSubmissionGenreFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubmissionGenre[] | ListEnumSubmissionGenreFieldRefInput<$PrismaModel>
    not?: NestedEnumSubmissionGenreFilter<$PrismaModel> | $Enums.SubmissionGenre
  }

  export type WritingPromptCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    genre?: SortOrder
    body?: SortOrder
    topicTags?: SortOrder
    targetLevel?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type WritingPromptAvgOrderByAggregateInput = {
    targetLevel?: SortOrder
  }

  export type WritingPromptMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    genre?: SortOrder
    body?: SortOrder
    targetLevel?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type WritingPromptMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    genre?: SortOrder
    body?: SortOrder
    targetLevel?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type WritingPromptSumOrderByAggregateInput = {
    targetLevel?: SortOrder
  }

  export type EnumSubmissionGenreWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubmissionGenre | EnumSubmissionGenreFieldRefInput<$PrismaModel>
    in?: $Enums.SubmissionGenre[] | ListEnumSubmissionGenreFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubmissionGenre[] | ListEnumSubmissionGenreFieldRefInput<$PrismaModel>
    not?: NestedEnumSubmissionGenreWithAggregatesFilter<$PrismaModel> | $Enums.SubmissionGenre
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubmissionGenreFilter<$PrismaModel>
    _max?: NestedEnumSubmissionGenreFilter<$PrismaModel>
  }

  export type EnumSubmissionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubmissionStatus | EnumSubmissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubmissionStatusFilter<$PrismaModel> | $Enums.SubmissionStatus
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type WritingPromptNullableScalarRelationFilter = {
    is?: WritingPromptWhereInput | null
    isNot?: WritingPromptWhereInput | null
  }

  export type AnalysisRunListRelationFilter = {
    every?: AnalysisRunWhereInput
    some?: AnalysisRunWhereInput
    none?: AnalysisRunWhereInput
  }

  export type MistakeListRelationFilter = {
    every?: MistakeWhereInput
    some?: MistakeWhereInput
    none?: MistakeWhereInput
  }

  export type AnalysisRunOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MistakeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    promptId?: SortOrder
    title?: SortOrder
    genre?: SortOrder
    body?: SortOrder
    wordCount?: SortOrder
    status?: SortOrder
    analysisJson?: SortOrder
    rawAIResponse?: SortOrder
    errorMessage?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubmissionAvgOrderByAggregateInput = {
    wordCount?: SortOrder
  }

  export type SubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    promptId?: SortOrder
    title?: SortOrder
    genre?: SortOrder
    body?: SortOrder
    wordCount?: SortOrder
    status?: SortOrder
    rawAIResponse?: SortOrder
    errorMessage?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    promptId?: SortOrder
    title?: SortOrder
    genre?: SortOrder
    body?: SortOrder
    wordCount?: SortOrder
    status?: SortOrder
    rawAIResponse?: SortOrder
    errorMessage?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubmissionSumOrderByAggregateInput = {
    wordCount?: SortOrder
  }

  export type EnumSubmissionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubmissionStatus | EnumSubmissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubmissionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubmissionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubmissionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubmissionStatusFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumAnalysisStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AnalysisStatus | EnumAnalysisStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AnalysisStatus[] | ListEnumAnalysisStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnalysisStatus[] | ListEnumAnalysisStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAnalysisStatusFilter<$PrismaModel> | $Enums.AnalysisStatus
  }

  export type SubmissionScalarRelationFilter = {
    is?: SubmissionWhereInput
    isNot?: SubmissionWhereInput
  }

  export type AnalysisRunCountOrderByAggregateInput = {
    id?: SortOrder
    submissionId?: SortOrder
    status?: SortOrder
    analyzerModel?: SortOrder
    analyzerVersion?: SortOrder
    rulesetVersion?: SortOrder
    summaryJson?: SortOrder
    rawModelOutput?: SortOrder
    errorMessage?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type AnalysisRunMaxOrderByAggregateInput = {
    id?: SortOrder
    submissionId?: SortOrder
    status?: SortOrder
    analyzerModel?: SortOrder
    analyzerVersion?: SortOrder
    rulesetVersion?: SortOrder
    errorMessage?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type AnalysisRunMinOrderByAggregateInput = {
    id?: SortOrder
    submissionId?: SortOrder
    status?: SortOrder
    analyzerModel?: SortOrder
    analyzerVersion?: SortOrder
    rulesetVersion?: SortOrder
    errorMessage?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type EnumAnalysisStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnalysisStatus | EnumAnalysisStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AnalysisStatus[] | ListEnumAnalysisStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnalysisStatus[] | ListEnumAnalysisStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAnalysisStatusWithAggregatesFilter<$PrismaModel> | $Enums.AnalysisStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAnalysisStatusFilter<$PrismaModel>
    _max?: NestedEnumAnalysisStatusFilter<$PrismaModel>
  }

  export type EnumPillarCodeFilter<$PrismaModel = never> = {
    equals?: $Enums.PillarCode | EnumPillarCodeFieldRefInput<$PrismaModel>
    in?: $Enums.PillarCode[] | ListEnumPillarCodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PillarCode[] | ListEnumPillarCodeFieldRefInput<$PrismaModel>
    not?: NestedEnumPillarCodeFilter<$PrismaModel> | $Enums.PillarCode
  }

  export type EnumMistakeSeverityNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.MistakeSeverity | EnumMistakeSeverityFieldRefInput<$PrismaModel> | null
    in?: $Enums.MistakeSeverity[] | ListEnumMistakeSeverityFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MistakeSeverity[] | ListEnumMistakeSeverityFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMistakeSeverityNullableFilter<$PrismaModel> | $Enums.MistakeSeverity | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type AnalysisRunScalarRelationFilter = {
    is?: AnalysisRunWhereInput
    isNot?: AnalysisRunWhereInput
  }

  export type MistakeCountOrderByAggregateInput = {
    id?: SortOrder
    submissionId?: SortOrder
    analysisRunId?: SortOrder
    pillar?: SortOrder
    subtype?: SortOrder
    severity?: SortOrder
    startOffset?: SortOrder
    endOffset?: SortOrder
    surfaceText?: SortOrder
    message?: SortOrder
    suggestion?: SortOrder
    canonicalRuleId?: SortOrder
    confidence?: SortOrder
    createdAt?: SortOrder
  }

  export type MistakeAvgOrderByAggregateInput = {
    startOffset?: SortOrder
    endOffset?: SortOrder
    confidence?: SortOrder
  }

  export type MistakeMaxOrderByAggregateInput = {
    id?: SortOrder
    submissionId?: SortOrder
    analysisRunId?: SortOrder
    pillar?: SortOrder
    subtype?: SortOrder
    severity?: SortOrder
    startOffset?: SortOrder
    endOffset?: SortOrder
    surfaceText?: SortOrder
    message?: SortOrder
    suggestion?: SortOrder
    canonicalRuleId?: SortOrder
    confidence?: SortOrder
    createdAt?: SortOrder
  }

  export type MistakeMinOrderByAggregateInput = {
    id?: SortOrder
    submissionId?: SortOrder
    analysisRunId?: SortOrder
    pillar?: SortOrder
    subtype?: SortOrder
    severity?: SortOrder
    startOffset?: SortOrder
    endOffset?: SortOrder
    surfaceText?: SortOrder
    message?: SortOrder
    suggestion?: SortOrder
    canonicalRuleId?: SortOrder
    confidence?: SortOrder
    createdAt?: SortOrder
  }

  export type MistakeSumOrderByAggregateInput = {
    startOffset?: SortOrder
    endOffset?: SortOrder
    confidence?: SortOrder
  }

  export type EnumPillarCodeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PillarCode | EnumPillarCodeFieldRefInput<$PrismaModel>
    in?: $Enums.PillarCode[] | ListEnumPillarCodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PillarCode[] | ListEnumPillarCodeFieldRefInput<$PrismaModel>
    not?: NestedEnumPillarCodeWithAggregatesFilter<$PrismaModel> | $Enums.PillarCode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPillarCodeFilter<$PrismaModel>
    _max?: NestedEnumPillarCodeFilter<$PrismaModel>
  }

  export type EnumMistakeSeverityNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MistakeSeverity | EnumMistakeSeverityFieldRefInput<$PrismaModel> | null
    in?: $Enums.MistakeSeverity[] | ListEnumMistakeSeverityFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MistakeSeverity[] | ListEnumMistakeSeverityFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMistakeSeverityNullableWithAggregatesFilter<$PrismaModel> | $Enums.MistakeSeverity | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumMistakeSeverityNullableFilter<$PrismaModel>
    _max?: NestedEnumMistakeSeverityNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type UserStatsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    totalXp?: SortOrder
    level?: SortOrder
    currentStreak?: SortOrder
    longestStreak?: SortOrder
    lastActiveDate?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserStatsAvgOrderByAggregateInput = {
    totalXp?: SortOrder
    level?: SortOrder
    currentStreak?: SortOrder
    longestStreak?: SortOrder
  }

  export type UserStatsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    totalXp?: SortOrder
    level?: SortOrder
    currentStreak?: SortOrder
    longestStreak?: SortOrder
    lastActiveDate?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserStatsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    totalXp?: SortOrder
    level?: SortOrder
    currentStreak?: SortOrder
    longestStreak?: SortOrder
    lastActiveDate?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserStatsSumOrderByAggregateInput = {
    totalXp?: SortOrder
    level?: SortOrder
    currentStreak?: SortOrder
    longestStreak?: SortOrder
  }

  export type XpEventCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventType?: SortOrder
    xpDelta?: SortOrder
    payload?: SortOrder
    createdAt?: SortOrder
  }

  export type XpEventAvgOrderByAggregateInput = {
    xpDelta?: SortOrder
  }

  export type XpEventMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventType?: SortOrder
    xpDelta?: SortOrder
    createdAt?: SortOrder
  }

  export type XpEventMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventType?: SortOrder
    xpDelta?: SortOrder
    createdAt?: SortOrder
  }

  export type XpEventSumOrderByAggregateInput = {
    xpDelta?: SortOrder
  }

  export type UserProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    connect?: UserProfileWhereUniqueInput
  }

  export type SubmissionCreateNestedManyWithoutUserInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type UserStatsCreateNestedOneWithoutUserInput = {
    create?: XOR<UserStatsCreateWithoutUserInput, UserStatsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserStatsCreateOrConnectWithoutUserInput
    connect?: UserStatsWhereUniqueInput
  }

  export type XpEventCreateNestedManyWithoutUserInput = {
    create?: XOR<XpEventCreateWithoutUserInput, XpEventUncheckedCreateWithoutUserInput> | XpEventCreateWithoutUserInput[] | XpEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: XpEventCreateOrConnectWithoutUserInput | XpEventCreateOrConnectWithoutUserInput[]
    createMany?: XpEventCreateManyUserInputEnvelope
    connect?: XpEventWhereUniqueInput | XpEventWhereUniqueInput[]
  }

  export type RefreshTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type UserProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    connect?: UserProfileWhereUniqueInput
  }

  export type SubmissionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type UserStatsUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserStatsCreateWithoutUserInput, UserStatsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserStatsCreateOrConnectWithoutUserInput
    connect?: UserStatsWhereUniqueInput
  }

  export type XpEventUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<XpEventCreateWithoutUserInput, XpEventUncheckedCreateWithoutUserInput> | XpEventCreateWithoutUserInput[] | XpEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: XpEventCreateOrConnectWithoutUserInput | XpEventCreateOrConnectWithoutUserInput[]
    createMany?: XpEventCreateManyUserInputEnvelope
    connect?: XpEventWhereUniqueInput | XpEventWhereUniqueInput[]
  }

  export type RefreshTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    upsert?: UserProfileUpsertWithoutUserInput
    disconnect?: UserProfileWhereInput | boolean
    delete?: UserProfileWhereInput | boolean
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutUserInput, UserProfileUpdateWithoutUserInput>, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type SubmissionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutUserInput | SubmissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutUserInput | SubmissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutUserInput | SubmissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type UserStatsUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserStatsCreateWithoutUserInput, UserStatsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserStatsCreateOrConnectWithoutUserInput
    upsert?: UserStatsUpsertWithoutUserInput
    disconnect?: UserStatsWhereInput | boolean
    delete?: UserStatsWhereInput | boolean
    connect?: UserStatsWhereUniqueInput
    update?: XOR<XOR<UserStatsUpdateToOneWithWhereWithoutUserInput, UserStatsUpdateWithoutUserInput>, UserStatsUncheckedUpdateWithoutUserInput>
  }

  export type XpEventUpdateManyWithoutUserNestedInput = {
    create?: XOR<XpEventCreateWithoutUserInput, XpEventUncheckedCreateWithoutUserInput> | XpEventCreateWithoutUserInput[] | XpEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: XpEventCreateOrConnectWithoutUserInput | XpEventCreateOrConnectWithoutUserInput[]
    upsert?: XpEventUpsertWithWhereUniqueWithoutUserInput | XpEventUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: XpEventCreateManyUserInputEnvelope
    set?: XpEventWhereUniqueInput | XpEventWhereUniqueInput[]
    disconnect?: XpEventWhereUniqueInput | XpEventWhereUniqueInput[]
    delete?: XpEventWhereUniqueInput | XpEventWhereUniqueInput[]
    connect?: XpEventWhereUniqueInput | XpEventWhereUniqueInput[]
    update?: XpEventUpdateWithWhereUniqueWithoutUserInput | XpEventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: XpEventUpdateManyWithWhereWithoutUserInput | XpEventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: XpEventScalarWhereInput | XpEventScalarWhereInput[]
  }

  export type RefreshTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type UserProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    upsert?: UserProfileUpsertWithoutUserInput
    disconnect?: UserProfileWhereInput | boolean
    delete?: UserProfileWhereInput | boolean
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutUserInput, UserProfileUpdateWithoutUserInput>, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type SubmissionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutUserInput | SubmissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutUserInput | SubmissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutUserInput | SubmissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type UserStatsUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserStatsCreateWithoutUserInput, UserStatsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserStatsCreateOrConnectWithoutUserInput
    upsert?: UserStatsUpsertWithoutUserInput
    disconnect?: UserStatsWhereInput | boolean
    delete?: UserStatsWhereInput | boolean
    connect?: UserStatsWhereUniqueInput
    update?: XOR<XOR<UserStatsUpdateToOneWithWhereWithoutUserInput, UserStatsUpdateWithoutUserInput>, UserStatsUncheckedUpdateWithoutUserInput>
  }

  export type XpEventUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<XpEventCreateWithoutUserInput, XpEventUncheckedCreateWithoutUserInput> | XpEventCreateWithoutUserInput[] | XpEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: XpEventCreateOrConnectWithoutUserInput | XpEventCreateOrConnectWithoutUserInput[]
    upsert?: XpEventUpsertWithWhereUniqueWithoutUserInput | XpEventUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: XpEventCreateManyUserInputEnvelope
    set?: XpEventWhereUniqueInput | XpEventWhereUniqueInput[]
    disconnect?: XpEventWhereUniqueInput | XpEventWhereUniqueInput[]
    delete?: XpEventWhereUniqueInput | XpEventWhereUniqueInput[]
    connect?: XpEventWhereUniqueInput | XpEventWhereUniqueInput[]
    update?: XpEventUpdateWithWhereUniqueWithoutUserInput | XpEventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: XpEventUpdateManyWithWhereWithoutUserInput | XpEventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: XpEventScalarWhereInput | XpEventScalarWhereInput[]
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRefreshTokensInput = {
    create?: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRefreshTokensNestedInput = {
    create?: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
    upsert?: UserUpsertWithoutRefreshTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRefreshTokensInput, UserUpdateWithoutRefreshTokensInput>, UserUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type UserProfileCreateinterestTagsInput = {
    set: string[]
  }

  export type UserProfileCreatepreferredGenresInput = {
    set: $Enums.SubmissionGenre[]
  }

  export type UserProfileCreateweakAreasInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type EnumPrimaryRoleFieldUpdateOperationsInput = {
    set?: $Enums.PrimaryRole
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableEnumPrimaryGoalFieldUpdateOperationsInput = {
    set?: $Enums.PrimaryGoal | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserProfileUpdateinterestTagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserProfileUpdatepreferredGenresInput = {
    set?: $Enums.SubmissionGenre[]
    push?: $Enums.SubmissionGenre | $Enums.SubmissionGenre[]
  }

  export type UserProfileUpdateweakAreasInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileInput, UserUpdateWithoutProfileInput>, UserUncheckedUpdateWithoutProfileInput>
  }

  export type WritingPromptCreatetopicTagsInput = {
    set: string[]
  }

  export type SubmissionCreateNestedManyWithoutPromptInput = {
    create?: XOR<SubmissionCreateWithoutPromptInput, SubmissionUncheckedCreateWithoutPromptInput> | SubmissionCreateWithoutPromptInput[] | SubmissionUncheckedCreateWithoutPromptInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutPromptInput | SubmissionCreateOrConnectWithoutPromptInput[]
    createMany?: SubmissionCreateManyPromptInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type SubmissionUncheckedCreateNestedManyWithoutPromptInput = {
    create?: XOR<SubmissionCreateWithoutPromptInput, SubmissionUncheckedCreateWithoutPromptInput> | SubmissionCreateWithoutPromptInput[] | SubmissionUncheckedCreateWithoutPromptInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutPromptInput | SubmissionCreateOrConnectWithoutPromptInput[]
    createMany?: SubmissionCreateManyPromptInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type EnumSubmissionGenreFieldUpdateOperationsInput = {
    set?: $Enums.SubmissionGenre
  }

  export type WritingPromptUpdatetopicTagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type SubmissionUpdateManyWithoutPromptNestedInput = {
    create?: XOR<SubmissionCreateWithoutPromptInput, SubmissionUncheckedCreateWithoutPromptInput> | SubmissionCreateWithoutPromptInput[] | SubmissionUncheckedCreateWithoutPromptInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutPromptInput | SubmissionCreateOrConnectWithoutPromptInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutPromptInput | SubmissionUpsertWithWhereUniqueWithoutPromptInput[]
    createMany?: SubmissionCreateManyPromptInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutPromptInput | SubmissionUpdateWithWhereUniqueWithoutPromptInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutPromptInput | SubmissionUpdateManyWithWhereWithoutPromptInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type SubmissionUncheckedUpdateManyWithoutPromptNestedInput = {
    create?: XOR<SubmissionCreateWithoutPromptInput, SubmissionUncheckedCreateWithoutPromptInput> | SubmissionCreateWithoutPromptInput[] | SubmissionUncheckedCreateWithoutPromptInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutPromptInput | SubmissionCreateOrConnectWithoutPromptInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutPromptInput | SubmissionUpsertWithWhereUniqueWithoutPromptInput[]
    createMany?: SubmissionCreateManyPromptInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutPromptInput | SubmissionUpdateWithWhereUniqueWithoutPromptInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutPromptInput | SubmissionUpdateManyWithWhereWithoutPromptInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubmissionsInput
    connect?: UserWhereUniqueInput
  }

  export type WritingPromptCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<WritingPromptCreateWithoutSubmissionsInput, WritingPromptUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: WritingPromptCreateOrConnectWithoutSubmissionsInput
    connect?: WritingPromptWhereUniqueInput
  }

  export type AnalysisRunCreateNestedManyWithoutSubmissionInput = {
    create?: XOR<AnalysisRunCreateWithoutSubmissionInput, AnalysisRunUncheckedCreateWithoutSubmissionInput> | AnalysisRunCreateWithoutSubmissionInput[] | AnalysisRunUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: AnalysisRunCreateOrConnectWithoutSubmissionInput | AnalysisRunCreateOrConnectWithoutSubmissionInput[]
    createMany?: AnalysisRunCreateManySubmissionInputEnvelope
    connect?: AnalysisRunWhereUniqueInput | AnalysisRunWhereUniqueInput[]
  }

  export type MistakeCreateNestedManyWithoutSubmissionInput = {
    create?: XOR<MistakeCreateWithoutSubmissionInput, MistakeUncheckedCreateWithoutSubmissionInput> | MistakeCreateWithoutSubmissionInput[] | MistakeUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: MistakeCreateOrConnectWithoutSubmissionInput | MistakeCreateOrConnectWithoutSubmissionInput[]
    createMany?: MistakeCreateManySubmissionInputEnvelope
    connect?: MistakeWhereUniqueInput | MistakeWhereUniqueInput[]
  }

  export type AnalysisRunUncheckedCreateNestedManyWithoutSubmissionInput = {
    create?: XOR<AnalysisRunCreateWithoutSubmissionInput, AnalysisRunUncheckedCreateWithoutSubmissionInput> | AnalysisRunCreateWithoutSubmissionInput[] | AnalysisRunUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: AnalysisRunCreateOrConnectWithoutSubmissionInput | AnalysisRunCreateOrConnectWithoutSubmissionInput[]
    createMany?: AnalysisRunCreateManySubmissionInputEnvelope
    connect?: AnalysisRunWhereUniqueInput | AnalysisRunWhereUniqueInput[]
  }

  export type MistakeUncheckedCreateNestedManyWithoutSubmissionInput = {
    create?: XOR<MistakeCreateWithoutSubmissionInput, MistakeUncheckedCreateWithoutSubmissionInput> | MistakeCreateWithoutSubmissionInput[] | MistakeUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: MistakeCreateOrConnectWithoutSubmissionInput | MistakeCreateOrConnectWithoutSubmissionInput[]
    createMany?: MistakeCreateManySubmissionInputEnvelope
    connect?: MistakeWhereUniqueInput | MistakeWhereUniqueInput[]
  }

  export type EnumSubmissionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SubmissionStatus
  }

  export type UserUpdateOneRequiredWithoutSubmissionsNestedInput = {
    create?: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubmissionsInput
    upsert?: UserUpsertWithoutSubmissionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubmissionsInput, UserUpdateWithoutSubmissionsInput>, UserUncheckedUpdateWithoutSubmissionsInput>
  }

  export type WritingPromptUpdateOneWithoutSubmissionsNestedInput = {
    create?: XOR<WritingPromptCreateWithoutSubmissionsInput, WritingPromptUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: WritingPromptCreateOrConnectWithoutSubmissionsInput
    upsert?: WritingPromptUpsertWithoutSubmissionsInput
    disconnect?: WritingPromptWhereInput | boolean
    delete?: WritingPromptWhereInput | boolean
    connect?: WritingPromptWhereUniqueInput
    update?: XOR<XOR<WritingPromptUpdateToOneWithWhereWithoutSubmissionsInput, WritingPromptUpdateWithoutSubmissionsInput>, WritingPromptUncheckedUpdateWithoutSubmissionsInput>
  }

  export type AnalysisRunUpdateManyWithoutSubmissionNestedInput = {
    create?: XOR<AnalysisRunCreateWithoutSubmissionInput, AnalysisRunUncheckedCreateWithoutSubmissionInput> | AnalysisRunCreateWithoutSubmissionInput[] | AnalysisRunUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: AnalysisRunCreateOrConnectWithoutSubmissionInput | AnalysisRunCreateOrConnectWithoutSubmissionInput[]
    upsert?: AnalysisRunUpsertWithWhereUniqueWithoutSubmissionInput | AnalysisRunUpsertWithWhereUniqueWithoutSubmissionInput[]
    createMany?: AnalysisRunCreateManySubmissionInputEnvelope
    set?: AnalysisRunWhereUniqueInput | AnalysisRunWhereUniqueInput[]
    disconnect?: AnalysisRunWhereUniqueInput | AnalysisRunWhereUniqueInput[]
    delete?: AnalysisRunWhereUniqueInput | AnalysisRunWhereUniqueInput[]
    connect?: AnalysisRunWhereUniqueInput | AnalysisRunWhereUniqueInput[]
    update?: AnalysisRunUpdateWithWhereUniqueWithoutSubmissionInput | AnalysisRunUpdateWithWhereUniqueWithoutSubmissionInput[]
    updateMany?: AnalysisRunUpdateManyWithWhereWithoutSubmissionInput | AnalysisRunUpdateManyWithWhereWithoutSubmissionInput[]
    deleteMany?: AnalysisRunScalarWhereInput | AnalysisRunScalarWhereInput[]
  }

  export type MistakeUpdateManyWithoutSubmissionNestedInput = {
    create?: XOR<MistakeCreateWithoutSubmissionInput, MistakeUncheckedCreateWithoutSubmissionInput> | MistakeCreateWithoutSubmissionInput[] | MistakeUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: MistakeCreateOrConnectWithoutSubmissionInput | MistakeCreateOrConnectWithoutSubmissionInput[]
    upsert?: MistakeUpsertWithWhereUniqueWithoutSubmissionInput | MistakeUpsertWithWhereUniqueWithoutSubmissionInput[]
    createMany?: MistakeCreateManySubmissionInputEnvelope
    set?: MistakeWhereUniqueInput | MistakeWhereUniqueInput[]
    disconnect?: MistakeWhereUniqueInput | MistakeWhereUniqueInput[]
    delete?: MistakeWhereUniqueInput | MistakeWhereUniqueInput[]
    connect?: MistakeWhereUniqueInput | MistakeWhereUniqueInput[]
    update?: MistakeUpdateWithWhereUniqueWithoutSubmissionInput | MistakeUpdateWithWhereUniqueWithoutSubmissionInput[]
    updateMany?: MistakeUpdateManyWithWhereWithoutSubmissionInput | MistakeUpdateManyWithWhereWithoutSubmissionInput[]
    deleteMany?: MistakeScalarWhereInput | MistakeScalarWhereInput[]
  }

  export type AnalysisRunUncheckedUpdateManyWithoutSubmissionNestedInput = {
    create?: XOR<AnalysisRunCreateWithoutSubmissionInput, AnalysisRunUncheckedCreateWithoutSubmissionInput> | AnalysisRunCreateWithoutSubmissionInput[] | AnalysisRunUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: AnalysisRunCreateOrConnectWithoutSubmissionInput | AnalysisRunCreateOrConnectWithoutSubmissionInput[]
    upsert?: AnalysisRunUpsertWithWhereUniqueWithoutSubmissionInput | AnalysisRunUpsertWithWhereUniqueWithoutSubmissionInput[]
    createMany?: AnalysisRunCreateManySubmissionInputEnvelope
    set?: AnalysisRunWhereUniqueInput | AnalysisRunWhereUniqueInput[]
    disconnect?: AnalysisRunWhereUniqueInput | AnalysisRunWhereUniqueInput[]
    delete?: AnalysisRunWhereUniqueInput | AnalysisRunWhereUniqueInput[]
    connect?: AnalysisRunWhereUniqueInput | AnalysisRunWhereUniqueInput[]
    update?: AnalysisRunUpdateWithWhereUniqueWithoutSubmissionInput | AnalysisRunUpdateWithWhereUniqueWithoutSubmissionInput[]
    updateMany?: AnalysisRunUpdateManyWithWhereWithoutSubmissionInput | AnalysisRunUpdateManyWithWhereWithoutSubmissionInput[]
    deleteMany?: AnalysisRunScalarWhereInput | AnalysisRunScalarWhereInput[]
  }

  export type MistakeUncheckedUpdateManyWithoutSubmissionNestedInput = {
    create?: XOR<MistakeCreateWithoutSubmissionInput, MistakeUncheckedCreateWithoutSubmissionInput> | MistakeCreateWithoutSubmissionInput[] | MistakeUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: MistakeCreateOrConnectWithoutSubmissionInput | MistakeCreateOrConnectWithoutSubmissionInput[]
    upsert?: MistakeUpsertWithWhereUniqueWithoutSubmissionInput | MistakeUpsertWithWhereUniqueWithoutSubmissionInput[]
    createMany?: MistakeCreateManySubmissionInputEnvelope
    set?: MistakeWhereUniqueInput | MistakeWhereUniqueInput[]
    disconnect?: MistakeWhereUniqueInput | MistakeWhereUniqueInput[]
    delete?: MistakeWhereUniqueInput | MistakeWhereUniqueInput[]
    connect?: MistakeWhereUniqueInput | MistakeWhereUniqueInput[]
    update?: MistakeUpdateWithWhereUniqueWithoutSubmissionInput | MistakeUpdateWithWhereUniqueWithoutSubmissionInput[]
    updateMany?: MistakeUpdateManyWithWhereWithoutSubmissionInput | MistakeUpdateManyWithWhereWithoutSubmissionInput[]
    deleteMany?: MistakeScalarWhereInput | MistakeScalarWhereInput[]
  }

  export type SubmissionCreateNestedOneWithoutAnalysisRunsInput = {
    create?: XOR<SubmissionCreateWithoutAnalysisRunsInput, SubmissionUncheckedCreateWithoutAnalysisRunsInput>
    connectOrCreate?: SubmissionCreateOrConnectWithoutAnalysisRunsInput
    connect?: SubmissionWhereUniqueInput
  }

  export type MistakeCreateNestedManyWithoutAnalysisRunInput = {
    create?: XOR<MistakeCreateWithoutAnalysisRunInput, MistakeUncheckedCreateWithoutAnalysisRunInput> | MistakeCreateWithoutAnalysisRunInput[] | MistakeUncheckedCreateWithoutAnalysisRunInput[]
    connectOrCreate?: MistakeCreateOrConnectWithoutAnalysisRunInput | MistakeCreateOrConnectWithoutAnalysisRunInput[]
    createMany?: MistakeCreateManyAnalysisRunInputEnvelope
    connect?: MistakeWhereUniqueInput | MistakeWhereUniqueInput[]
  }

  export type MistakeUncheckedCreateNestedManyWithoutAnalysisRunInput = {
    create?: XOR<MistakeCreateWithoutAnalysisRunInput, MistakeUncheckedCreateWithoutAnalysisRunInput> | MistakeCreateWithoutAnalysisRunInput[] | MistakeUncheckedCreateWithoutAnalysisRunInput[]
    connectOrCreate?: MistakeCreateOrConnectWithoutAnalysisRunInput | MistakeCreateOrConnectWithoutAnalysisRunInput[]
    createMany?: MistakeCreateManyAnalysisRunInputEnvelope
    connect?: MistakeWhereUniqueInput | MistakeWhereUniqueInput[]
  }

  export type EnumAnalysisStatusFieldUpdateOperationsInput = {
    set?: $Enums.AnalysisStatus
  }

  export type SubmissionUpdateOneRequiredWithoutAnalysisRunsNestedInput = {
    create?: XOR<SubmissionCreateWithoutAnalysisRunsInput, SubmissionUncheckedCreateWithoutAnalysisRunsInput>
    connectOrCreate?: SubmissionCreateOrConnectWithoutAnalysisRunsInput
    upsert?: SubmissionUpsertWithoutAnalysisRunsInput
    connect?: SubmissionWhereUniqueInput
    update?: XOR<XOR<SubmissionUpdateToOneWithWhereWithoutAnalysisRunsInput, SubmissionUpdateWithoutAnalysisRunsInput>, SubmissionUncheckedUpdateWithoutAnalysisRunsInput>
  }

  export type MistakeUpdateManyWithoutAnalysisRunNestedInput = {
    create?: XOR<MistakeCreateWithoutAnalysisRunInput, MistakeUncheckedCreateWithoutAnalysisRunInput> | MistakeCreateWithoutAnalysisRunInput[] | MistakeUncheckedCreateWithoutAnalysisRunInput[]
    connectOrCreate?: MistakeCreateOrConnectWithoutAnalysisRunInput | MistakeCreateOrConnectWithoutAnalysisRunInput[]
    upsert?: MistakeUpsertWithWhereUniqueWithoutAnalysisRunInput | MistakeUpsertWithWhereUniqueWithoutAnalysisRunInput[]
    createMany?: MistakeCreateManyAnalysisRunInputEnvelope
    set?: MistakeWhereUniqueInput | MistakeWhereUniqueInput[]
    disconnect?: MistakeWhereUniqueInput | MistakeWhereUniqueInput[]
    delete?: MistakeWhereUniqueInput | MistakeWhereUniqueInput[]
    connect?: MistakeWhereUniqueInput | MistakeWhereUniqueInput[]
    update?: MistakeUpdateWithWhereUniqueWithoutAnalysisRunInput | MistakeUpdateWithWhereUniqueWithoutAnalysisRunInput[]
    updateMany?: MistakeUpdateManyWithWhereWithoutAnalysisRunInput | MistakeUpdateManyWithWhereWithoutAnalysisRunInput[]
    deleteMany?: MistakeScalarWhereInput | MistakeScalarWhereInput[]
  }

  export type MistakeUncheckedUpdateManyWithoutAnalysisRunNestedInput = {
    create?: XOR<MistakeCreateWithoutAnalysisRunInput, MistakeUncheckedCreateWithoutAnalysisRunInput> | MistakeCreateWithoutAnalysisRunInput[] | MistakeUncheckedCreateWithoutAnalysisRunInput[]
    connectOrCreate?: MistakeCreateOrConnectWithoutAnalysisRunInput | MistakeCreateOrConnectWithoutAnalysisRunInput[]
    upsert?: MistakeUpsertWithWhereUniqueWithoutAnalysisRunInput | MistakeUpsertWithWhereUniqueWithoutAnalysisRunInput[]
    createMany?: MistakeCreateManyAnalysisRunInputEnvelope
    set?: MistakeWhereUniqueInput | MistakeWhereUniqueInput[]
    disconnect?: MistakeWhereUniqueInput | MistakeWhereUniqueInput[]
    delete?: MistakeWhereUniqueInput | MistakeWhereUniqueInput[]
    connect?: MistakeWhereUniqueInput | MistakeWhereUniqueInput[]
    update?: MistakeUpdateWithWhereUniqueWithoutAnalysisRunInput | MistakeUpdateWithWhereUniqueWithoutAnalysisRunInput[]
    updateMany?: MistakeUpdateManyWithWhereWithoutAnalysisRunInput | MistakeUpdateManyWithWhereWithoutAnalysisRunInput[]
    deleteMany?: MistakeScalarWhereInput | MistakeScalarWhereInput[]
  }

  export type SubmissionCreateNestedOneWithoutMistakesInput = {
    create?: XOR<SubmissionCreateWithoutMistakesInput, SubmissionUncheckedCreateWithoutMistakesInput>
    connectOrCreate?: SubmissionCreateOrConnectWithoutMistakesInput
    connect?: SubmissionWhereUniqueInput
  }

  export type AnalysisRunCreateNestedOneWithoutMistakesInput = {
    create?: XOR<AnalysisRunCreateWithoutMistakesInput, AnalysisRunUncheckedCreateWithoutMistakesInput>
    connectOrCreate?: AnalysisRunCreateOrConnectWithoutMistakesInput
    connect?: AnalysisRunWhereUniqueInput
  }

  export type EnumPillarCodeFieldUpdateOperationsInput = {
    set?: $Enums.PillarCode
  }

  export type NullableEnumMistakeSeverityFieldUpdateOperationsInput = {
    set?: $Enums.MistakeSeverity | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SubmissionUpdateOneRequiredWithoutMistakesNestedInput = {
    create?: XOR<SubmissionCreateWithoutMistakesInput, SubmissionUncheckedCreateWithoutMistakesInput>
    connectOrCreate?: SubmissionCreateOrConnectWithoutMistakesInput
    upsert?: SubmissionUpsertWithoutMistakesInput
    connect?: SubmissionWhereUniqueInput
    update?: XOR<XOR<SubmissionUpdateToOneWithWhereWithoutMistakesInput, SubmissionUpdateWithoutMistakesInput>, SubmissionUncheckedUpdateWithoutMistakesInput>
  }

  export type AnalysisRunUpdateOneRequiredWithoutMistakesNestedInput = {
    create?: XOR<AnalysisRunCreateWithoutMistakesInput, AnalysisRunUncheckedCreateWithoutMistakesInput>
    connectOrCreate?: AnalysisRunCreateOrConnectWithoutMistakesInput
    upsert?: AnalysisRunUpsertWithoutMistakesInput
    connect?: AnalysisRunWhereUniqueInput
    update?: XOR<XOR<AnalysisRunUpdateToOneWithWhereWithoutMistakesInput, AnalysisRunUpdateWithoutMistakesInput>, AnalysisRunUncheckedUpdateWithoutMistakesInput>
  }

  export type UserCreateNestedOneWithoutStatsInput = {
    create?: XOR<UserCreateWithoutStatsInput, UserUncheckedCreateWithoutStatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStatsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutStatsNestedInput = {
    create?: XOR<UserCreateWithoutStatsInput, UserUncheckedCreateWithoutStatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStatsInput
    upsert?: UserUpsertWithoutStatsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStatsInput, UserUpdateWithoutStatsInput>, UserUncheckedUpdateWithoutStatsInput>
  }

  export type UserCreateNestedOneWithoutXpEventsInput = {
    create?: XOR<UserCreateWithoutXpEventsInput, UserUncheckedCreateWithoutXpEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutXpEventsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutXpEventsNestedInput = {
    create?: XOR<UserCreateWithoutXpEventsInput, UserUncheckedCreateWithoutXpEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutXpEventsInput
    upsert?: UserUpsertWithoutXpEventsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutXpEventsInput, UserUpdateWithoutXpEventsInput>, UserUncheckedUpdateWithoutXpEventsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumPrimaryRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.PrimaryRole | EnumPrimaryRoleFieldRefInput<$PrismaModel>
    in?: $Enums.PrimaryRole[] | ListEnumPrimaryRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.PrimaryRole[] | ListEnumPrimaryRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumPrimaryRoleFilter<$PrismaModel> | $Enums.PrimaryRole
  }

  export type NestedEnumPrimaryGoalNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PrimaryGoal | EnumPrimaryGoalFieldRefInput<$PrismaModel> | null
    in?: $Enums.PrimaryGoal[] | ListEnumPrimaryGoalFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PrimaryGoal[] | ListEnumPrimaryGoalFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPrimaryGoalNullableFilter<$PrismaModel> | $Enums.PrimaryGoal | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumPrimaryRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PrimaryRole | EnumPrimaryRoleFieldRefInput<$PrismaModel>
    in?: $Enums.PrimaryRole[] | ListEnumPrimaryRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.PrimaryRole[] | ListEnumPrimaryRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumPrimaryRoleWithAggregatesFilter<$PrismaModel> | $Enums.PrimaryRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPrimaryRoleFilter<$PrismaModel>
    _max?: NestedEnumPrimaryRoleFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumPrimaryGoalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PrimaryGoal | EnumPrimaryGoalFieldRefInput<$PrismaModel> | null
    in?: $Enums.PrimaryGoal[] | ListEnumPrimaryGoalFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PrimaryGoal[] | ListEnumPrimaryGoalFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPrimaryGoalNullableWithAggregatesFilter<$PrismaModel> | $Enums.PrimaryGoal | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPrimaryGoalNullableFilter<$PrismaModel>
    _max?: NestedEnumPrimaryGoalNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumSubmissionGenreFilter<$PrismaModel = never> = {
    equals?: $Enums.SubmissionGenre | EnumSubmissionGenreFieldRefInput<$PrismaModel>
    in?: $Enums.SubmissionGenre[] | ListEnumSubmissionGenreFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubmissionGenre[] | ListEnumSubmissionGenreFieldRefInput<$PrismaModel>
    not?: NestedEnumSubmissionGenreFilter<$PrismaModel> | $Enums.SubmissionGenre
  }

  export type NestedEnumSubmissionGenreWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubmissionGenre | EnumSubmissionGenreFieldRefInput<$PrismaModel>
    in?: $Enums.SubmissionGenre[] | ListEnumSubmissionGenreFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubmissionGenre[] | ListEnumSubmissionGenreFieldRefInput<$PrismaModel>
    not?: NestedEnumSubmissionGenreWithAggregatesFilter<$PrismaModel> | $Enums.SubmissionGenre
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubmissionGenreFilter<$PrismaModel>
    _max?: NestedEnumSubmissionGenreFilter<$PrismaModel>
  }

  export type NestedEnumSubmissionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubmissionStatus | EnumSubmissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubmissionStatusFilter<$PrismaModel> | $Enums.SubmissionStatus
  }

  export type NestedEnumSubmissionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubmissionStatus | EnumSubmissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubmissionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubmissionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubmissionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubmissionStatusFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumAnalysisStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AnalysisStatus | EnumAnalysisStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AnalysisStatus[] | ListEnumAnalysisStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnalysisStatus[] | ListEnumAnalysisStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAnalysisStatusFilter<$PrismaModel> | $Enums.AnalysisStatus
  }

  export type NestedEnumAnalysisStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnalysisStatus | EnumAnalysisStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AnalysisStatus[] | ListEnumAnalysisStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnalysisStatus[] | ListEnumAnalysisStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAnalysisStatusWithAggregatesFilter<$PrismaModel> | $Enums.AnalysisStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAnalysisStatusFilter<$PrismaModel>
    _max?: NestedEnumAnalysisStatusFilter<$PrismaModel>
  }

  export type NestedEnumPillarCodeFilter<$PrismaModel = never> = {
    equals?: $Enums.PillarCode | EnumPillarCodeFieldRefInput<$PrismaModel>
    in?: $Enums.PillarCode[] | ListEnumPillarCodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PillarCode[] | ListEnumPillarCodeFieldRefInput<$PrismaModel>
    not?: NestedEnumPillarCodeFilter<$PrismaModel> | $Enums.PillarCode
  }

  export type NestedEnumMistakeSeverityNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.MistakeSeverity | EnumMistakeSeverityFieldRefInput<$PrismaModel> | null
    in?: $Enums.MistakeSeverity[] | ListEnumMistakeSeverityFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MistakeSeverity[] | ListEnumMistakeSeverityFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMistakeSeverityNullableFilter<$PrismaModel> | $Enums.MistakeSeverity | null
  }

  export type NestedEnumPillarCodeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PillarCode | EnumPillarCodeFieldRefInput<$PrismaModel>
    in?: $Enums.PillarCode[] | ListEnumPillarCodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PillarCode[] | ListEnumPillarCodeFieldRefInput<$PrismaModel>
    not?: NestedEnumPillarCodeWithAggregatesFilter<$PrismaModel> | $Enums.PillarCode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPillarCodeFilter<$PrismaModel>
    _max?: NestedEnumPillarCodeFilter<$PrismaModel>
  }

  export type NestedEnumMistakeSeverityNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MistakeSeverity | EnumMistakeSeverityFieldRefInput<$PrismaModel> | null
    in?: $Enums.MistakeSeverity[] | ListEnumMistakeSeverityFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MistakeSeverity[] | ListEnumMistakeSeverityFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMistakeSeverityNullableWithAggregatesFilter<$PrismaModel> | $Enums.MistakeSeverity | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumMistakeSeverityNullableFilter<$PrismaModel>
    _max?: NestedEnumMistakeSeverityNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type UserProfileCreateWithoutUserInput = {
    id?: string
    primaryRole: $Enums.PrimaryRole
    englishReadingSelfScore: number
    englishWritingSelfScore: number
    primaryGoal?: $Enums.PrimaryGoal | null
    weeklyTimeMinutes?: number | null
    interestTags?: UserProfileCreateinterestTagsInput | string[]
    preferredGenres?: UserProfileCreatepreferredGenresInput | $Enums.SubmissionGenre[]
    localePreference?: string
    grammarScore?: number | null
    vocabularyScore?: number | null
    fluencyScore?: number | null
    pronunciationScore?: number | null
    targetScoreGoal?: number | null
    dailyGoalMinutes?: number | null
    preferredLearningStyle?: string | null
    weakAreas?: UserProfileCreateweakAreasInput | string[]
    initialAssessmentDone?: boolean
    onboardingCompletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfileUncheckedCreateWithoutUserInput = {
    id?: string
    primaryRole: $Enums.PrimaryRole
    englishReadingSelfScore: number
    englishWritingSelfScore: number
    primaryGoal?: $Enums.PrimaryGoal | null
    weeklyTimeMinutes?: number | null
    interestTags?: UserProfileCreateinterestTagsInput | string[]
    preferredGenres?: UserProfileCreatepreferredGenresInput | $Enums.SubmissionGenre[]
    localePreference?: string
    grammarScore?: number | null
    vocabularyScore?: number | null
    fluencyScore?: number | null
    pronunciationScore?: number | null
    targetScoreGoal?: number | null
    dailyGoalMinutes?: number | null
    preferredLearningStyle?: string | null
    weakAreas?: UserProfileCreateweakAreasInput | string[]
    initialAssessmentDone?: boolean
    onboardingCompletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfileCreateOrConnectWithoutUserInput = {
    where: UserProfileWhereUniqueInput
    create: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
  }

  export type SubmissionCreateWithoutUserInput = {
    id?: string
    title?: string | null
    genre: $Enums.SubmissionGenre
    body: string
    wordCount: number
    status?: $Enums.SubmissionStatus
    analysisJson?: NullableJsonNullValueInput | InputJsonValue
    rawAIResponse?: string | null
    errorMessage?: string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    prompt?: WritingPromptCreateNestedOneWithoutSubmissionsInput
    analysisRuns?: AnalysisRunCreateNestedManyWithoutSubmissionInput
    mistakes?: MistakeCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionUncheckedCreateWithoutUserInput = {
    id?: string
    promptId?: string | null
    title?: string | null
    genre: $Enums.SubmissionGenre
    body: string
    wordCount: number
    status?: $Enums.SubmissionStatus
    analysisJson?: NullableJsonNullValueInput | InputJsonValue
    rawAIResponse?: string | null
    errorMessage?: string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    analysisRuns?: AnalysisRunUncheckedCreateNestedManyWithoutSubmissionInput
    mistakes?: MistakeUncheckedCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionCreateOrConnectWithoutUserInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput>
  }

  export type SubmissionCreateManyUserInputEnvelope = {
    data: SubmissionCreateManyUserInput | SubmissionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserStatsCreateWithoutUserInput = {
    id?: string
    totalXp?: number
    level?: number
    currentStreak?: number
    longestStreak?: number
    lastActiveDate?: Date | string | null
    updatedAt?: Date | string
  }

  export type UserStatsUncheckedCreateWithoutUserInput = {
    id?: string
    totalXp?: number
    level?: number
    currentStreak?: number
    longestStreak?: number
    lastActiveDate?: Date | string | null
    updatedAt?: Date | string
  }

  export type UserStatsCreateOrConnectWithoutUserInput = {
    where: UserStatsWhereUniqueInput
    create: XOR<UserStatsCreateWithoutUserInput, UserStatsUncheckedCreateWithoutUserInput>
  }

  export type XpEventCreateWithoutUserInput = {
    id?: string
    eventType: string
    xpDelta: number
    payload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type XpEventUncheckedCreateWithoutUserInput = {
    id?: string
    eventType: string
    xpDelta: number
    payload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type XpEventCreateOrConnectWithoutUserInput = {
    where: XpEventWhereUniqueInput
    create: XOR<XpEventCreateWithoutUserInput, XpEventUncheckedCreateWithoutUserInput>
  }

  export type XpEventCreateManyUserInputEnvelope = {
    data: XpEventCreateManyUserInput | XpEventCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RefreshTokenCreateWithoutUserInput = {
    id?: string
    tokenHash: string
    userAgent?: string | null
    ip?: string | null
    isRevoked?: boolean
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RefreshTokenUncheckedCreateWithoutUserInput = {
    id?: string
    tokenHash: string
    userAgent?: string | null
    ip?: string | null
    isRevoked?: boolean
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RefreshTokenCreateOrConnectWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenCreateManyUserInputEnvelope = {
    data: RefreshTokenCreateManyUserInput | RefreshTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserProfileUpsertWithoutUserInput = {
    update: XOR<UserProfileUpdateWithoutUserInput, UserProfileUncheckedUpdateWithoutUserInput>
    create: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    where?: UserProfileWhereInput
  }

  export type UserProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: UserProfileWhereInput
    data: XOR<UserProfileUpdateWithoutUserInput, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    primaryRole?: EnumPrimaryRoleFieldUpdateOperationsInput | $Enums.PrimaryRole
    englishReadingSelfScore?: IntFieldUpdateOperationsInput | number
    englishWritingSelfScore?: IntFieldUpdateOperationsInput | number
    primaryGoal?: NullableEnumPrimaryGoalFieldUpdateOperationsInput | $Enums.PrimaryGoal | null
    weeklyTimeMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    interestTags?: UserProfileUpdateinterestTagsInput | string[]
    preferredGenres?: UserProfileUpdatepreferredGenresInput | $Enums.SubmissionGenre[]
    localePreference?: StringFieldUpdateOperationsInput | string
    grammarScore?: NullableIntFieldUpdateOperationsInput | number | null
    vocabularyScore?: NullableIntFieldUpdateOperationsInput | number | null
    fluencyScore?: NullableIntFieldUpdateOperationsInput | number | null
    pronunciationScore?: NullableIntFieldUpdateOperationsInput | number | null
    targetScoreGoal?: NullableIntFieldUpdateOperationsInput | number | null
    dailyGoalMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    preferredLearningStyle?: NullableStringFieldUpdateOperationsInput | string | null
    weakAreas?: UserProfileUpdateweakAreasInput | string[]
    initialAssessmentDone?: BoolFieldUpdateOperationsInput | boolean
    onboardingCompletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    primaryRole?: EnumPrimaryRoleFieldUpdateOperationsInput | $Enums.PrimaryRole
    englishReadingSelfScore?: IntFieldUpdateOperationsInput | number
    englishWritingSelfScore?: IntFieldUpdateOperationsInput | number
    primaryGoal?: NullableEnumPrimaryGoalFieldUpdateOperationsInput | $Enums.PrimaryGoal | null
    weeklyTimeMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    interestTags?: UserProfileUpdateinterestTagsInput | string[]
    preferredGenres?: UserProfileUpdatepreferredGenresInput | $Enums.SubmissionGenre[]
    localePreference?: StringFieldUpdateOperationsInput | string
    grammarScore?: NullableIntFieldUpdateOperationsInput | number | null
    vocabularyScore?: NullableIntFieldUpdateOperationsInput | number | null
    fluencyScore?: NullableIntFieldUpdateOperationsInput | number | null
    pronunciationScore?: NullableIntFieldUpdateOperationsInput | number | null
    targetScoreGoal?: NullableIntFieldUpdateOperationsInput | number | null
    dailyGoalMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    preferredLearningStyle?: NullableStringFieldUpdateOperationsInput | string | null
    weakAreas?: UserProfileUpdateweakAreasInput | string[]
    initialAssessmentDone?: BoolFieldUpdateOperationsInput | boolean
    onboardingCompletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionUpsertWithWhereUniqueWithoutUserInput = {
    where: SubmissionWhereUniqueInput
    update: XOR<SubmissionUpdateWithoutUserInput, SubmissionUncheckedUpdateWithoutUserInput>
    create: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput>
  }

  export type SubmissionUpdateWithWhereUniqueWithoutUserInput = {
    where: SubmissionWhereUniqueInput
    data: XOR<SubmissionUpdateWithoutUserInput, SubmissionUncheckedUpdateWithoutUserInput>
  }

  export type SubmissionUpdateManyWithWhereWithoutUserInput = {
    where: SubmissionScalarWhereInput
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyWithoutUserInput>
  }

  export type SubmissionScalarWhereInput = {
    AND?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
    OR?: SubmissionScalarWhereInput[]
    NOT?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
    id?: StringFilter<"Submission"> | string
    userId?: StringFilter<"Submission"> | string
    promptId?: StringNullableFilter<"Submission"> | string | null
    title?: StringNullableFilter<"Submission"> | string | null
    genre?: EnumSubmissionGenreFilter<"Submission"> | $Enums.SubmissionGenre
    body?: StringFilter<"Submission"> | string
    wordCount?: IntFilter<"Submission"> | number
    status?: EnumSubmissionStatusFilter<"Submission"> | $Enums.SubmissionStatus
    analysisJson?: JsonNullableFilter<"Submission">
    rawAIResponse?: StringNullableFilter<"Submission"> | string | null
    errorMessage?: StringNullableFilter<"Submission"> | string | null
    completedAt?: DateTimeNullableFilter<"Submission"> | Date | string | null
    createdAt?: DateTimeFilter<"Submission"> | Date | string
    updatedAt?: DateTimeFilter<"Submission"> | Date | string
  }

  export type UserStatsUpsertWithoutUserInput = {
    update: XOR<UserStatsUpdateWithoutUserInput, UserStatsUncheckedUpdateWithoutUserInput>
    create: XOR<UserStatsCreateWithoutUserInput, UserStatsUncheckedCreateWithoutUserInput>
    where?: UserStatsWhereInput
  }

  export type UserStatsUpdateToOneWithWhereWithoutUserInput = {
    where?: UserStatsWhereInput
    data: XOR<UserStatsUpdateWithoutUserInput, UserStatsUncheckedUpdateWithoutUserInput>
  }

  export type UserStatsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalXp?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    lastActiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStatsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalXp?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    lastActiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type XpEventUpsertWithWhereUniqueWithoutUserInput = {
    where: XpEventWhereUniqueInput
    update: XOR<XpEventUpdateWithoutUserInput, XpEventUncheckedUpdateWithoutUserInput>
    create: XOR<XpEventCreateWithoutUserInput, XpEventUncheckedCreateWithoutUserInput>
  }

  export type XpEventUpdateWithWhereUniqueWithoutUserInput = {
    where: XpEventWhereUniqueInput
    data: XOR<XpEventUpdateWithoutUserInput, XpEventUncheckedUpdateWithoutUserInput>
  }

  export type XpEventUpdateManyWithWhereWithoutUserInput = {
    where: XpEventScalarWhereInput
    data: XOR<XpEventUpdateManyMutationInput, XpEventUncheckedUpdateManyWithoutUserInput>
  }

  export type XpEventScalarWhereInput = {
    AND?: XpEventScalarWhereInput | XpEventScalarWhereInput[]
    OR?: XpEventScalarWhereInput[]
    NOT?: XpEventScalarWhereInput | XpEventScalarWhereInput[]
    id?: StringFilter<"XpEvent"> | string
    userId?: StringFilter<"XpEvent"> | string
    eventType?: StringFilter<"XpEvent"> | string
    xpDelta?: IntFilter<"XpEvent"> | number
    payload?: JsonNullableFilter<"XpEvent">
    createdAt?: DateTimeFilter<"XpEvent"> | Date | string
  }

  export type RefreshTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    update: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    data: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
  }

  export type RefreshTokenUpdateManyWithWhereWithoutUserInput = {
    where: RefreshTokenScalarWhereInput
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type RefreshTokenScalarWhereInput = {
    AND?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    OR?: RefreshTokenScalarWhereInput[]
    NOT?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    id?: StringFilter<"RefreshToken"> | string
    tokenHash?: StringFilter<"RefreshToken"> | string
    userId?: StringFilter<"RefreshToken"> | string
    userAgent?: StringNullableFilter<"RefreshToken"> | string | null
    ip?: StringNullableFilter<"RefreshToken"> | string | null
    isRevoked?: BoolFilter<"RefreshToken"> | boolean
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    updatedAt?: DateTimeFilter<"RefreshToken"> | Date | string
  }

  export type UserCreateWithoutRefreshTokensInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string | null
    displayName?: string | null
    image?: string | null
    isNewUser?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileCreateNestedOneWithoutUserInput
    submissions?: SubmissionCreateNestedManyWithoutUserInput
    stats?: UserStatsCreateNestedOneWithoutUserInput
    xpEvents?: XpEventCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRefreshTokensInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string | null
    displayName?: string | null
    image?: string | null
    isNewUser?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    stats?: UserStatsUncheckedCreateNestedOneWithoutUserInput
    xpEvents?: XpEventUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRefreshTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
  }

  export type UserUpsertWithoutRefreshTokensInput = {
    update: XOR<UserUpdateWithoutRefreshTokensInput, UserUncheckedUpdateWithoutRefreshTokensInput>
    create: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRefreshTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRefreshTokensInput, UserUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type UserUpdateWithoutRefreshTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isNewUser?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    submissions?: SubmissionUpdateManyWithoutUserNestedInput
    stats?: UserStatsUpdateOneWithoutUserNestedInput
    xpEvents?: XpEventUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRefreshTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isNewUser?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    stats?: UserStatsUncheckedUpdateOneWithoutUserNestedInput
    xpEvents?: XpEventUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutProfileInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string | null
    displayName?: string | null
    image?: string | null
    isNewUser?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: SubmissionCreateNestedManyWithoutUserInput
    stats?: UserStatsCreateNestedOneWithoutUserInput
    xpEvents?: XpEventCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string | null
    displayName?: string | null
    image?: string | null
    isNewUser?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    stats?: UserStatsUncheckedCreateNestedOneWithoutUserInput
    xpEvents?: XpEventUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isNewUser?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUpdateManyWithoutUserNestedInput
    stats?: UserStatsUpdateOneWithoutUserNestedInput
    xpEvents?: XpEventUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isNewUser?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    stats?: UserStatsUncheckedUpdateOneWithoutUserNestedInput
    xpEvents?: XpEventUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SubmissionCreateWithoutPromptInput = {
    id?: string
    title?: string | null
    genre: $Enums.SubmissionGenre
    body: string
    wordCount: number
    status?: $Enums.SubmissionStatus
    analysisJson?: NullableJsonNullValueInput | InputJsonValue
    rawAIResponse?: string | null
    errorMessage?: string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSubmissionsInput
    analysisRuns?: AnalysisRunCreateNestedManyWithoutSubmissionInput
    mistakes?: MistakeCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionUncheckedCreateWithoutPromptInput = {
    id?: string
    userId: string
    title?: string | null
    genre: $Enums.SubmissionGenre
    body: string
    wordCount: number
    status?: $Enums.SubmissionStatus
    analysisJson?: NullableJsonNullValueInput | InputJsonValue
    rawAIResponse?: string | null
    errorMessage?: string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    analysisRuns?: AnalysisRunUncheckedCreateNestedManyWithoutSubmissionInput
    mistakes?: MistakeUncheckedCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionCreateOrConnectWithoutPromptInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutPromptInput, SubmissionUncheckedCreateWithoutPromptInput>
  }

  export type SubmissionCreateManyPromptInputEnvelope = {
    data: SubmissionCreateManyPromptInput | SubmissionCreateManyPromptInput[]
    skipDuplicates?: boolean
  }

  export type SubmissionUpsertWithWhereUniqueWithoutPromptInput = {
    where: SubmissionWhereUniqueInput
    update: XOR<SubmissionUpdateWithoutPromptInput, SubmissionUncheckedUpdateWithoutPromptInput>
    create: XOR<SubmissionCreateWithoutPromptInput, SubmissionUncheckedCreateWithoutPromptInput>
  }

  export type SubmissionUpdateWithWhereUniqueWithoutPromptInput = {
    where: SubmissionWhereUniqueInput
    data: XOR<SubmissionUpdateWithoutPromptInput, SubmissionUncheckedUpdateWithoutPromptInput>
  }

  export type SubmissionUpdateManyWithWhereWithoutPromptInput = {
    where: SubmissionScalarWhereInput
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyWithoutPromptInput>
  }

  export type UserCreateWithoutSubmissionsInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string | null
    displayName?: string | null
    image?: string | null
    isNewUser?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileCreateNestedOneWithoutUserInput
    stats?: UserStatsCreateNestedOneWithoutUserInput
    xpEvents?: XpEventCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubmissionsInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string | null
    displayName?: string | null
    image?: string | null
    isNewUser?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    stats?: UserStatsUncheckedCreateNestedOneWithoutUserInput
    xpEvents?: XpEventUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubmissionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
  }

  export type WritingPromptCreateWithoutSubmissionsInput = {
    id?: string
    title: string
    genre: $Enums.SubmissionGenre
    body: string
    topicTags?: WritingPromptCreatetopicTagsInput | string[]
    targetLevel?: number | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type WritingPromptUncheckedCreateWithoutSubmissionsInput = {
    id?: string
    title: string
    genre: $Enums.SubmissionGenre
    body: string
    topicTags?: WritingPromptCreatetopicTagsInput | string[]
    targetLevel?: number | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type WritingPromptCreateOrConnectWithoutSubmissionsInput = {
    where: WritingPromptWhereUniqueInput
    create: XOR<WritingPromptCreateWithoutSubmissionsInput, WritingPromptUncheckedCreateWithoutSubmissionsInput>
  }

  export type AnalysisRunCreateWithoutSubmissionInput = {
    id?: string
    status?: $Enums.AnalysisStatus
    analyzerModel?: string | null
    analyzerVersion?: string | null
    rulesetVersion?: string | null
    summaryJson?: NullableJsonNullValueInput | InputJsonValue
    rawModelOutput?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: string | null
    startedAt?: Date | string
    completedAt?: Date | string | null
    mistakes?: MistakeCreateNestedManyWithoutAnalysisRunInput
  }

  export type AnalysisRunUncheckedCreateWithoutSubmissionInput = {
    id?: string
    status?: $Enums.AnalysisStatus
    analyzerModel?: string | null
    analyzerVersion?: string | null
    rulesetVersion?: string | null
    summaryJson?: NullableJsonNullValueInput | InputJsonValue
    rawModelOutput?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: string | null
    startedAt?: Date | string
    completedAt?: Date | string | null
    mistakes?: MistakeUncheckedCreateNestedManyWithoutAnalysisRunInput
  }

  export type AnalysisRunCreateOrConnectWithoutSubmissionInput = {
    where: AnalysisRunWhereUniqueInput
    create: XOR<AnalysisRunCreateWithoutSubmissionInput, AnalysisRunUncheckedCreateWithoutSubmissionInput>
  }

  export type AnalysisRunCreateManySubmissionInputEnvelope = {
    data: AnalysisRunCreateManySubmissionInput | AnalysisRunCreateManySubmissionInput[]
    skipDuplicates?: boolean
  }

  export type MistakeCreateWithoutSubmissionInput = {
    id?: string
    pillar: $Enums.PillarCode
    subtype: string
    severity?: $Enums.MistakeSeverity | null
    startOffset: number
    endOffset: number
    surfaceText?: string | null
    message: string
    suggestion?: string | null
    canonicalRuleId?: string | null
    confidence?: number | null
    createdAt?: Date | string
    analysisRun: AnalysisRunCreateNestedOneWithoutMistakesInput
  }

  export type MistakeUncheckedCreateWithoutSubmissionInput = {
    id?: string
    analysisRunId: string
    pillar: $Enums.PillarCode
    subtype: string
    severity?: $Enums.MistakeSeverity | null
    startOffset: number
    endOffset: number
    surfaceText?: string | null
    message: string
    suggestion?: string | null
    canonicalRuleId?: string | null
    confidence?: number | null
    createdAt?: Date | string
  }

  export type MistakeCreateOrConnectWithoutSubmissionInput = {
    where: MistakeWhereUniqueInput
    create: XOR<MistakeCreateWithoutSubmissionInput, MistakeUncheckedCreateWithoutSubmissionInput>
  }

  export type MistakeCreateManySubmissionInputEnvelope = {
    data: MistakeCreateManySubmissionInput | MistakeCreateManySubmissionInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSubmissionsInput = {
    update: XOR<UserUpdateWithoutSubmissionsInput, UserUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubmissionsInput, UserUncheckedUpdateWithoutSubmissionsInput>
  }

  export type UserUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isNewUser?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    stats?: UserStatsUpdateOneWithoutUserNestedInput
    xpEvents?: XpEventUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isNewUser?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    stats?: UserStatsUncheckedUpdateOneWithoutUserNestedInput
    xpEvents?: XpEventUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WritingPromptUpsertWithoutSubmissionsInput = {
    update: XOR<WritingPromptUpdateWithoutSubmissionsInput, WritingPromptUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<WritingPromptCreateWithoutSubmissionsInput, WritingPromptUncheckedCreateWithoutSubmissionsInput>
    where?: WritingPromptWhereInput
  }

  export type WritingPromptUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: WritingPromptWhereInput
    data: XOR<WritingPromptUpdateWithoutSubmissionsInput, WritingPromptUncheckedUpdateWithoutSubmissionsInput>
  }

  export type WritingPromptUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    genre?: EnumSubmissionGenreFieldUpdateOperationsInput | $Enums.SubmissionGenre
    body?: StringFieldUpdateOperationsInput | string
    topicTags?: WritingPromptUpdatetopicTagsInput | string[]
    targetLevel?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WritingPromptUncheckedUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    genre?: EnumSubmissionGenreFieldUpdateOperationsInput | $Enums.SubmissionGenre
    body?: StringFieldUpdateOperationsInput | string
    topicTags?: WritingPromptUpdatetopicTagsInput | string[]
    targetLevel?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalysisRunUpsertWithWhereUniqueWithoutSubmissionInput = {
    where: AnalysisRunWhereUniqueInput
    update: XOR<AnalysisRunUpdateWithoutSubmissionInput, AnalysisRunUncheckedUpdateWithoutSubmissionInput>
    create: XOR<AnalysisRunCreateWithoutSubmissionInput, AnalysisRunUncheckedCreateWithoutSubmissionInput>
  }

  export type AnalysisRunUpdateWithWhereUniqueWithoutSubmissionInput = {
    where: AnalysisRunWhereUniqueInput
    data: XOR<AnalysisRunUpdateWithoutSubmissionInput, AnalysisRunUncheckedUpdateWithoutSubmissionInput>
  }

  export type AnalysisRunUpdateManyWithWhereWithoutSubmissionInput = {
    where: AnalysisRunScalarWhereInput
    data: XOR<AnalysisRunUpdateManyMutationInput, AnalysisRunUncheckedUpdateManyWithoutSubmissionInput>
  }

  export type AnalysisRunScalarWhereInput = {
    AND?: AnalysisRunScalarWhereInput | AnalysisRunScalarWhereInput[]
    OR?: AnalysisRunScalarWhereInput[]
    NOT?: AnalysisRunScalarWhereInput | AnalysisRunScalarWhereInput[]
    id?: StringFilter<"AnalysisRun"> | string
    submissionId?: StringFilter<"AnalysisRun"> | string
    status?: EnumAnalysisStatusFilter<"AnalysisRun"> | $Enums.AnalysisStatus
    analyzerModel?: StringNullableFilter<"AnalysisRun"> | string | null
    analyzerVersion?: StringNullableFilter<"AnalysisRun"> | string | null
    rulesetVersion?: StringNullableFilter<"AnalysisRun"> | string | null
    summaryJson?: JsonNullableFilter<"AnalysisRun">
    rawModelOutput?: JsonNullableFilter<"AnalysisRun">
    errorMessage?: StringNullableFilter<"AnalysisRun"> | string | null
    startedAt?: DateTimeFilter<"AnalysisRun"> | Date | string
    completedAt?: DateTimeNullableFilter<"AnalysisRun"> | Date | string | null
  }

  export type MistakeUpsertWithWhereUniqueWithoutSubmissionInput = {
    where: MistakeWhereUniqueInput
    update: XOR<MistakeUpdateWithoutSubmissionInput, MistakeUncheckedUpdateWithoutSubmissionInput>
    create: XOR<MistakeCreateWithoutSubmissionInput, MistakeUncheckedCreateWithoutSubmissionInput>
  }

  export type MistakeUpdateWithWhereUniqueWithoutSubmissionInput = {
    where: MistakeWhereUniqueInput
    data: XOR<MistakeUpdateWithoutSubmissionInput, MistakeUncheckedUpdateWithoutSubmissionInput>
  }

  export type MistakeUpdateManyWithWhereWithoutSubmissionInput = {
    where: MistakeScalarWhereInput
    data: XOR<MistakeUpdateManyMutationInput, MistakeUncheckedUpdateManyWithoutSubmissionInput>
  }

  export type MistakeScalarWhereInput = {
    AND?: MistakeScalarWhereInput | MistakeScalarWhereInput[]
    OR?: MistakeScalarWhereInput[]
    NOT?: MistakeScalarWhereInput | MistakeScalarWhereInput[]
    id?: StringFilter<"Mistake"> | string
    submissionId?: StringFilter<"Mistake"> | string
    analysisRunId?: StringFilter<"Mistake"> | string
    pillar?: EnumPillarCodeFilter<"Mistake"> | $Enums.PillarCode
    subtype?: StringFilter<"Mistake"> | string
    severity?: EnumMistakeSeverityNullableFilter<"Mistake"> | $Enums.MistakeSeverity | null
    startOffset?: IntFilter<"Mistake"> | number
    endOffset?: IntFilter<"Mistake"> | number
    surfaceText?: StringNullableFilter<"Mistake"> | string | null
    message?: StringFilter<"Mistake"> | string
    suggestion?: StringNullableFilter<"Mistake"> | string | null
    canonicalRuleId?: StringNullableFilter<"Mistake"> | string | null
    confidence?: FloatNullableFilter<"Mistake"> | number | null
    createdAt?: DateTimeFilter<"Mistake"> | Date | string
  }

  export type SubmissionCreateWithoutAnalysisRunsInput = {
    id?: string
    title?: string | null
    genre: $Enums.SubmissionGenre
    body: string
    wordCount: number
    status?: $Enums.SubmissionStatus
    analysisJson?: NullableJsonNullValueInput | InputJsonValue
    rawAIResponse?: string | null
    errorMessage?: string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSubmissionsInput
    prompt?: WritingPromptCreateNestedOneWithoutSubmissionsInput
    mistakes?: MistakeCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionUncheckedCreateWithoutAnalysisRunsInput = {
    id?: string
    userId: string
    promptId?: string | null
    title?: string | null
    genre: $Enums.SubmissionGenre
    body: string
    wordCount: number
    status?: $Enums.SubmissionStatus
    analysisJson?: NullableJsonNullValueInput | InputJsonValue
    rawAIResponse?: string | null
    errorMessage?: string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mistakes?: MistakeUncheckedCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionCreateOrConnectWithoutAnalysisRunsInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutAnalysisRunsInput, SubmissionUncheckedCreateWithoutAnalysisRunsInput>
  }

  export type MistakeCreateWithoutAnalysisRunInput = {
    id?: string
    pillar: $Enums.PillarCode
    subtype: string
    severity?: $Enums.MistakeSeverity | null
    startOffset: number
    endOffset: number
    surfaceText?: string | null
    message: string
    suggestion?: string | null
    canonicalRuleId?: string | null
    confidence?: number | null
    createdAt?: Date | string
    submission: SubmissionCreateNestedOneWithoutMistakesInput
  }

  export type MistakeUncheckedCreateWithoutAnalysisRunInput = {
    id?: string
    submissionId: string
    pillar: $Enums.PillarCode
    subtype: string
    severity?: $Enums.MistakeSeverity | null
    startOffset: number
    endOffset: number
    surfaceText?: string | null
    message: string
    suggestion?: string | null
    canonicalRuleId?: string | null
    confidence?: number | null
    createdAt?: Date | string
  }

  export type MistakeCreateOrConnectWithoutAnalysisRunInput = {
    where: MistakeWhereUniqueInput
    create: XOR<MistakeCreateWithoutAnalysisRunInput, MistakeUncheckedCreateWithoutAnalysisRunInput>
  }

  export type MistakeCreateManyAnalysisRunInputEnvelope = {
    data: MistakeCreateManyAnalysisRunInput | MistakeCreateManyAnalysisRunInput[]
    skipDuplicates?: boolean
  }

  export type SubmissionUpsertWithoutAnalysisRunsInput = {
    update: XOR<SubmissionUpdateWithoutAnalysisRunsInput, SubmissionUncheckedUpdateWithoutAnalysisRunsInput>
    create: XOR<SubmissionCreateWithoutAnalysisRunsInput, SubmissionUncheckedCreateWithoutAnalysisRunsInput>
    where?: SubmissionWhereInput
  }

  export type SubmissionUpdateToOneWithWhereWithoutAnalysisRunsInput = {
    where?: SubmissionWhereInput
    data: XOR<SubmissionUpdateWithoutAnalysisRunsInput, SubmissionUncheckedUpdateWithoutAnalysisRunsInput>
  }

  export type SubmissionUpdateWithoutAnalysisRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: EnumSubmissionGenreFieldUpdateOperationsInput | $Enums.SubmissionGenre
    body?: StringFieldUpdateOperationsInput | string
    wordCount?: IntFieldUpdateOperationsInput | number
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    analysisJson?: NullableJsonNullValueInput | InputJsonValue
    rawAIResponse?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubmissionsNestedInput
    prompt?: WritingPromptUpdateOneWithoutSubmissionsNestedInput
    mistakes?: MistakeUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutAnalysisRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    promptId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: EnumSubmissionGenreFieldUpdateOperationsInput | $Enums.SubmissionGenre
    body?: StringFieldUpdateOperationsInput | string
    wordCount?: IntFieldUpdateOperationsInput | number
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    analysisJson?: NullableJsonNullValueInput | InputJsonValue
    rawAIResponse?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mistakes?: MistakeUncheckedUpdateManyWithoutSubmissionNestedInput
  }

  export type MistakeUpsertWithWhereUniqueWithoutAnalysisRunInput = {
    where: MistakeWhereUniqueInput
    update: XOR<MistakeUpdateWithoutAnalysisRunInput, MistakeUncheckedUpdateWithoutAnalysisRunInput>
    create: XOR<MistakeCreateWithoutAnalysisRunInput, MistakeUncheckedCreateWithoutAnalysisRunInput>
  }

  export type MistakeUpdateWithWhereUniqueWithoutAnalysisRunInput = {
    where: MistakeWhereUniqueInput
    data: XOR<MistakeUpdateWithoutAnalysisRunInput, MistakeUncheckedUpdateWithoutAnalysisRunInput>
  }

  export type MistakeUpdateManyWithWhereWithoutAnalysisRunInput = {
    where: MistakeScalarWhereInput
    data: XOR<MistakeUpdateManyMutationInput, MistakeUncheckedUpdateManyWithoutAnalysisRunInput>
  }

  export type SubmissionCreateWithoutMistakesInput = {
    id?: string
    title?: string | null
    genre: $Enums.SubmissionGenre
    body: string
    wordCount: number
    status?: $Enums.SubmissionStatus
    analysisJson?: NullableJsonNullValueInput | InputJsonValue
    rawAIResponse?: string | null
    errorMessage?: string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSubmissionsInput
    prompt?: WritingPromptCreateNestedOneWithoutSubmissionsInput
    analysisRuns?: AnalysisRunCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionUncheckedCreateWithoutMistakesInput = {
    id?: string
    userId: string
    promptId?: string | null
    title?: string | null
    genre: $Enums.SubmissionGenre
    body: string
    wordCount: number
    status?: $Enums.SubmissionStatus
    analysisJson?: NullableJsonNullValueInput | InputJsonValue
    rawAIResponse?: string | null
    errorMessage?: string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    analysisRuns?: AnalysisRunUncheckedCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionCreateOrConnectWithoutMistakesInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutMistakesInput, SubmissionUncheckedCreateWithoutMistakesInput>
  }

  export type AnalysisRunCreateWithoutMistakesInput = {
    id?: string
    status?: $Enums.AnalysisStatus
    analyzerModel?: string | null
    analyzerVersion?: string | null
    rulesetVersion?: string | null
    summaryJson?: NullableJsonNullValueInput | InputJsonValue
    rawModelOutput?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: string | null
    startedAt?: Date | string
    completedAt?: Date | string | null
    submission: SubmissionCreateNestedOneWithoutAnalysisRunsInput
  }

  export type AnalysisRunUncheckedCreateWithoutMistakesInput = {
    id?: string
    submissionId: string
    status?: $Enums.AnalysisStatus
    analyzerModel?: string | null
    analyzerVersion?: string | null
    rulesetVersion?: string | null
    summaryJson?: NullableJsonNullValueInput | InputJsonValue
    rawModelOutput?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: string | null
    startedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type AnalysisRunCreateOrConnectWithoutMistakesInput = {
    where: AnalysisRunWhereUniqueInput
    create: XOR<AnalysisRunCreateWithoutMistakesInput, AnalysisRunUncheckedCreateWithoutMistakesInput>
  }

  export type SubmissionUpsertWithoutMistakesInput = {
    update: XOR<SubmissionUpdateWithoutMistakesInput, SubmissionUncheckedUpdateWithoutMistakesInput>
    create: XOR<SubmissionCreateWithoutMistakesInput, SubmissionUncheckedCreateWithoutMistakesInput>
    where?: SubmissionWhereInput
  }

  export type SubmissionUpdateToOneWithWhereWithoutMistakesInput = {
    where?: SubmissionWhereInput
    data: XOR<SubmissionUpdateWithoutMistakesInput, SubmissionUncheckedUpdateWithoutMistakesInput>
  }

  export type SubmissionUpdateWithoutMistakesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: EnumSubmissionGenreFieldUpdateOperationsInput | $Enums.SubmissionGenre
    body?: StringFieldUpdateOperationsInput | string
    wordCount?: IntFieldUpdateOperationsInput | number
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    analysisJson?: NullableJsonNullValueInput | InputJsonValue
    rawAIResponse?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubmissionsNestedInput
    prompt?: WritingPromptUpdateOneWithoutSubmissionsNestedInput
    analysisRuns?: AnalysisRunUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutMistakesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    promptId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: EnumSubmissionGenreFieldUpdateOperationsInput | $Enums.SubmissionGenre
    body?: StringFieldUpdateOperationsInput | string
    wordCount?: IntFieldUpdateOperationsInput | number
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    analysisJson?: NullableJsonNullValueInput | InputJsonValue
    rawAIResponse?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    analysisRuns?: AnalysisRunUncheckedUpdateManyWithoutSubmissionNestedInput
  }

  export type AnalysisRunUpsertWithoutMistakesInput = {
    update: XOR<AnalysisRunUpdateWithoutMistakesInput, AnalysisRunUncheckedUpdateWithoutMistakesInput>
    create: XOR<AnalysisRunCreateWithoutMistakesInput, AnalysisRunUncheckedCreateWithoutMistakesInput>
    where?: AnalysisRunWhereInput
  }

  export type AnalysisRunUpdateToOneWithWhereWithoutMistakesInput = {
    where?: AnalysisRunWhereInput
    data: XOR<AnalysisRunUpdateWithoutMistakesInput, AnalysisRunUncheckedUpdateWithoutMistakesInput>
  }

  export type AnalysisRunUpdateWithoutMistakesInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAnalysisStatusFieldUpdateOperationsInput | $Enums.AnalysisStatus
    analyzerModel?: NullableStringFieldUpdateOperationsInput | string | null
    analyzerVersion?: NullableStringFieldUpdateOperationsInput | string | null
    rulesetVersion?: NullableStringFieldUpdateOperationsInput | string | null
    summaryJson?: NullableJsonNullValueInput | InputJsonValue
    rawModelOutput?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submission?: SubmissionUpdateOneRequiredWithoutAnalysisRunsNestedInput
  }

  export type AnalysisRunUncheckedUpdateWithoutMistakesInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    status?: EnumAnalysisStatusFieldUpdateOperationsInput | $Enums.AnalysisStatus
    analyzerModel?: NullableStringFieldUpdateOperationsInput | string | null
    analyzerVersion?: NullableStringFieldUpdateOperationsInput | string | null
    rulesetVersion?: NullableStringFieldUpdateOperationsInput | string | null
    summaryJson?: NullableJsonNullValueInput | InputJsonValue
    rawModelOutput?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateWithoutStatsInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string | null
    displayName?: string | null
    image?: string | null
    isNewUser?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileCreateNestedOneWithoutUserInput
    submissions?: SubmissionCreateNestedManyWithoutUserInput
    xpEvents?: XpEventCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStatsInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string | null
    displayName?: string | null
    image?: string | null
    isNewUser?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    xpEvents?: XpEventUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStatsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStatsInput, UserUncheckedCreateWithoutStatsInput>
  }

  export type UserUpsertWithoutStatsInput = {
    update: XOR<UserUpdateWithoutStatsInput, UserUncheckedUpdateWithoutStatsInput>
    create: XOR<UserCreateWithoutStatsInput, UserUncheckedCreateWithoutStatsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStatsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStatsInput, UserUncheckedUpdateWithoutStatsInput>
  }

  export type UserUpdateWithoutStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isNewUser?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    submissions?: SubmissionUpdateManyWithoutUserNestedInput
    xpEvents?: XpEventUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isNewUser?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    xpEvents?: XpEventUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutXpEventsInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string | null
    displayName?: string | null
    image?: string | null
    isNewUser?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileCreateNestedOneWithoutUserInput
    submissions?: SubmissionCreateNestedManyWithoutUserInput
    stats?: UserStatsCreateNestedOneWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutXpEventsInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string | null
    displayName?: string | null
    image?: string | null
    isNewUser?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    stats?: UserStatsUncheckedCreateNestedOneWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutXpEventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutXpEventsInput, UserUncheckedCreateWithoutXpEventsInput>
  }

  export type UserUpsertWithoutXpEventsInput = {
    update: XOR<UserUpdateWithoutXpEventsInput, UserUncheckedUpdateWithoutXpEventsInput>
    create: XOR<UserCreateWithoutXpEventsInput, UserUncheckedCreateWithoutXpEventsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutXpEventsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutXpEventsInput, UserUncheckedUpdateWithoutXpEventsInput>
  }

  export type UserUpdateWithoutXpEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isNewUser?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    submissions?: SubmissionUpdateManyWithoutUserNestedInput
    stats?: UserStatsUpdateOneWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutXpEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isNewUser?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    stats?: UserStatsUncheckedUpdateOneWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SubmissionCreateManyUserInput = {
    id?: string
    promptId?: string | null
    title?: string | null
    genre: $Enums.SubmissionGenre
    body: string
    wordCount: number
    status?: $Enums.SubmissionStatus
    analysisJson?: NullableJsonNullValueInput | InputJsonValue
    rawAIResponse?: string | null
    errorMessage?: string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type XpEventCreateManyUserInput = {
    id?: string
    eventType: string
    xpDelta: number
    payload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type RefreshTokenCreateManyUserInput = {
    id?: string
    tokenHash: string
    userAgent?: string | null
    ip?: string | null
    isRevoked?: boolean
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubmissionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: EnumSubmissionGenreFieldUpdateOperationsInput | $Enums.SubmissionGenre
    body?: StringFieldUpdateOperationsInput | string
    wordCount?: IntFieldUpdateOperationsInput | number
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    analysisJson?: NullableJsonNullValueInput | InputJsonValue
    rawAIResponse?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prompt?: WritingPromptUpdateOneWithoutSubmissionsNestedInput
    analysisRuns?: AnalysisRunUpdateManyWithoutSubmissionNestedInput
    mistakes?: MistakeUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    promptId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: EnumSubmissionGenreFieldUpdateOperationsInput | $Enums.SubmissionGenre
    body?: StringFieldUpdateOperationsInput | string
    wordCount?: IntFieldUpdateOperationsInput | number
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    analysisJson?: NullableJsonNullValueInput | InputJsonValue
    rawAIResponse?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    analysisRuns?: AnalysisRunUncheckedUpdateManyWithoutSubmissionNestedInput
    mistakes?: MistakeUncheckedUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    promptId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: EnumSubmissionGenreFieldUpdateOperationsInput | $Enums.SubmissionGenre
    body?: StringFieldUpdateOperationsInput | string
    wordCount?: IntFieldUpdateOperationsInput | number
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    analysisJson?: NullableJsonNullValueInput | InputJsonValue
    rawAIResponse?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type XpEventUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    xpDelta?: IntFieldUpdateOperationsInput | number
    payload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type XpEventUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    xpDelta?: IntFieldUpdateOperationsInput | number
    payload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type XpEventUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    xpDelta?: IntFieldUpdateOperationsInput | number
    payload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionCreateManyPromptInput = {
    id?: string
    userId: string
    title?: string | null
    genre: $Enums.SubmissionGenre
    body: string
    wordCount: number
    status?: $Enums.SubmissionStatus
    analysisJson?: NullableJsonNullValueInput | InputJsonValue
    rawAIResponse?: string | null
    errorMessage?: string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubmissionUpdateWithoutPromptInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: EnumSubmissionGenreFieldUpdateOperationsInput | $Enums.SubmissionGenre
    body?: StringFieldUpdateOperationsInput | string
    wordCount?: IntFieldUpdateOperationsInput | number
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    analysisJson?: NullableJsonNullValueInput | InputJsonValue
    rawAIResponse?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubmissionsNestedInput
    analysisRuns?: AnalysisRunUpdateManyWithoutSubmissionNestedInput
    mistakes?: MistakeUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutPromptInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: EnumSubmissionGenreFieldUpdateOperationsInput | $Enums.SubmissionGenre
    body?: StringFieldUpdateOperationsInput | string
    wordCount?: IntFieldUpdateOperationsInput | number
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    analysisJson?: NullableJsonNullValueInput | InputJsonValue
    rawAIResponse?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    analysisRuns?: AnalysisRunUncheckedUpdateManyWithoutSubmissionNestedInput
    mistakes?: MistakeUncheckedUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateManyWithoutPromptInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: EnumSubmissionGenreFieldUpdateOperationsInput | $Enums.SubmissionGenre
    body?: StringFieldUpdateOperationsInput | string
    wordCount?: IntFieldUpdateOperationsInput | number
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    analysisJson?: NullableJsonNullValueInput | InputJsonValue
    rawAIResponse?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalysisRunCreateManySubmissionInput = {
    id?: string
    status?: $Enums.AnalysisStatus
    analyzerModel?: string | null
    analyzerVersion?: string | null
    rulesetVersion?: string | null
    summaryJson?: NullableJsonNullValueInput | InputJsonValue
    rawModelOutput?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: string | null
    startedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type MistakeCreateManySubmissionInput = {
    id?: string
    analysisRunId: string
    pillar: $Enums.PillarCode
    subtype: string
    severity?: $Enums.MistakeSeverity | null
    startOffset: number
    endOffset: number
    surfaceText?: string | null
    message: string
    suggestion?: string | null
    canonicalRuleId?: string | null
    confidence?: number | null
    createdAt?: Date | string
  }

  export type AnalysisRunUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAnalysisStatusFieldUpdateOperationsInput | $Enums.AnalysisStatus
    analyzerModel?: NullableStringFieldUpdateOperationsInput | string | null
    analyzerVersion?: NullableStringFieldUpdateOperationsInput | string | null
    rulesetVersion?: NullableStringFieldUpdateOperationsInput | string | null
    summaryJson?: NullableJsonNullValueInput | InputJsonValue
    rawModelOutput?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mistakes?: MistakeUpdateManyWithoutAnalysisRunNestedInput
  }

  export type AnalysisRunUncheckedUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAnalysisStatusFieldUpdateOperationsInput | $Enums.AnalysisStatus
    analyzerModel?: NullableStringFieldUpdateOperationsInput | string | null
    analyzerVersion?: NullableStringFieldUpdateOperationsInput | string | null
    rulesetVersion?: NullableStringFieldUpdateOperationsInput | string | null
    summaryJson?: NullableJsonNullValueInput | InputJsonValue
    rawModelOutput?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mistakes?: MistakeUncheckedUpdateManyWithoutAnalysisRunNestedInput
  }

  export type AnalysisRunUncheckedUpdateManyWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAnalysisStatusFieldUpdateOperationsInput | $Enums.AnalysisStatus
    analyzerModel?: NullableStringFieldUpdateOperationsInput | string | null
    analyzerVersion?: NullableStringFieldUpdateOperationsInput | string | null
    rulesetVersion?: NullableStringFieldUpdateOperationsInput | string | null
    summaryJson?: NullableJsonNullValueInput | InputJsonValue
    rawModelOutput?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MistakeUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    pillar?: EnumPillarCodeFieldUpdateOperationsInput | $Enums.PillarCode
    subtype?: StringFieldUpdateOperationsInput | string
    severity?: NullableEnumMistakeSeverityFieldUpdateOperationsInput | $Enums.MistakeSeverity | null
    startOffset?: IntFieldUpdateOperationsInput | number
    endOffset?: IntFieldUpdateOperationsInput | number
    surfaceText?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    suggestion?: NullableStringFieldUpdateOperationsInput | string | null
    canonicalRuleId?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    analysisRun?: AnalysisRunUpdateOneRequiredWithoutMistakesNestedInput
  }

  export type MistakeUncheckedUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    analysisRunId?: StringFieldUpdateOperationsInput | string
    pillar?: EnumPillarCodeFieldUpdateOperationsInput | $Enums.PillarCode
    subtype?: StringFieldUpdateOperationsInput | string
    severity?: NullableEnumMistakeSeverityFieldUpdateOperationsInput | $Enums.MistakeSeverity | null
    startOffset?: IntFieldUpdateOperationsInput | number
    endOffset?: IntFieldUpdateOperationsInput | number
    surfaceText?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    suggestion?: NullableStringFieldUpdateOperationsInput | string | null
    canonicalRuleId?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MistakeUncheckedUpdateManyWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    analysisRunId?: StringFieldUpdateOperationsInput | string
    pillar?: EnumPillarCodeFieldUpdateOperationsInput | $Enums.PillarCode
    subtype?: StringFieldUpdateOperationsInput | string
    severity?: NullableEnumMistakeSeverityFieldUpdateOperationsInput | $Enums.MistakeSeverity | null
    startOffset?: IntFieldUpdateOperationsInput | number
    endOffset?: IntFieldUpdateOperationsInput | number
    surfaceText?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    suggestion?: NullableStringFieldUpdateOperationsInput | string | null
    canonicalRuleId?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MistakeCreateManyAnalysisRunInput = {
    id?: string
    submissionId: string
    pillar: $Enums.PillarCode
    subtype: string
    severity?: $Enums.MistakeSeverity | null
    startOffset: number
    endOffset: number
    surfaceText?: string | null
    message: string
    suggestion?: string | null
    canonicalRuleId?: string | null
    confidence?: number | null
    createdAt?: Date | string
  }

  export type MistakeUpdateWithoutAnalysisRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    pillar?: EnumPillarCodeFieldUpdateOperationsInput | $Enums.PillarCode
    subtype?: StringFieldUpdateOperationsInput | string
    severity?: NullableEnumMistakeSeverityFieldUpdateOperationsInput | $Enums.MistakeSeverity | null
    startOffset?: IntFieldUpdateOperationsInput | number
    endOffset?: IntFieldUpdateOperationsInput | number
    surfaceText?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    suggestion?: NullableStringFieldUpdateOperationsInput | string | null
    canonicalRuleId?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submission?: SubmissionUpdateOneRequiredWithoutMistakesNestedInput
  }

  export type MistakeUncheckedUpdateWithoutAnalysisRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    pillar?: EnumPillarCodeFieldUpdateOperationsInput | $Enums.PillarCode
    subtype?: StringFieldUpdateOperationsInput | string
    severity?: NullableEnumMistakeSeverityFieldUpdateOperationsInput | $Enums.MistakeSeverity | null
    startOffset?: IntFieldUpdateOperationsInput | number
    endOffset?: IntFieldUpdateOperationsInput | number
    surfaceText?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    suggestion?: NullableStringFieldUpdateOperationsInput | string | null
    canonicalRuleId?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MistakeUncheckedUpdateManyWithoutAnalysisRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    pillar?: EnumPillarCodeFieldUpdateOperationsInput | $Enums.PillarCode
    subtype?: StringFieldUpdateOperationsInput | string
    severity?: NullableEnumMistakeSeverityFieldUpdateOperationsInput | $Enums.MistakeSeverity | null
    startOffset?: IntFieldUpdateOperationsInput | number
    endOffset?: IntFieldUpdateOperationsInput | number
    surfaceText?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    suggestion?: NullableStringFieldUpdateOperationsInput | string | null
    canonicalRuleId?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}