
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
 * Model Note
 * 
 */
export type Note = $Result.DefaultSelection<Prisma.$NotePayload>
/**
 * Model CityTown
 * 
 */
export type CityTown = $Result.DefaultSelection<Prisma.$CityTownPayload>
/**
 * Model StateProvince
 * 
 */
export type StateProvince = $Result.DefaultSelection<Prisma.$StateProvincePayload>
/**
 * Model Country
 * 
 */
export type Country = $Result.DefaultSelection<Prisma.$CountryPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Notes
 * const notes = await prisma.note.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Notes
   * const notes = await prisma.note.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.note`: Exposes CRUD operations for the **Note** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notes
    * const notes = await prisma.note.findMany()
    * ```
    */
  get note(): Prisma.NoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cityTown`: Exposes CRUD operations for the **CityTown** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CityTowns
    * const cityTowns = await prisma.cityTown.findMany()
    * ```
    */
  get cityTown(): Prisma.CityTownDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stateProvince`: Exposes CRUD operations for the **StateProvince** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StateProvinces
    * const stateProvinces = await prisma.stateProvince.findMany()
    * ```
    */
  get stateProvince(): Prisma.StateProvinceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.country`: Exposes CRUD operations for the **Country** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Countries
    * const countries = await prisma.country.findMany()
    * ```
    */
  get country(): Prisma.CountryDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Note: 'Note',
    CityTown: 'CityTown',
    StateProvince: 'StateProvince',
    Country: 'Country'
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
      modelProps: "note" | "cityTown" | "stateProvince" | "country"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Note: {
        payload: Prisma.$NotePayload<ExtArgs>
        fields: Prisma.NoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          findFirst: {
            args: Prisma.NoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          findMany: {
            args: Prisma.NoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>[]
          }
          create: {
            args: Prisma.NoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          createMany: {
            args: Prisma.NoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>[]
          }
          delete: {
            args: Prisma.NoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          update: {
            args: Prisma.NoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          deleteMany: {
            args: Prisma.NoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>[]
          }
          upsert: {
            args: Prisma.NoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          aggregate: {
            args: Prisma.NoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNote>
          }
          groupBy: {
            args: Prisma.NoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<NoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.NoteCountArgs<ExtArgs>
            result: $Utils.Optional<NoteCountAggregateOutputType> | number
          }
        }
      }
      CityTown: {
        payload: Prisma.$CityTownPayload<ExtArgs>
        fields: Prisma.CityTownFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CityTownFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityTownPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CityTownFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityTownPayload>
          }
          findFirst: {
            args: Prisma.CityTownFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityTownPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CityTownFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityTownPayload>
          }
          findMany: {
            args: Prisma.CityTownFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityTownPayload>[]
          }
          create: {
            args: Prisma.CityTownCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityTownPayload>
          }
          createMany: {
            args: Prisma.CityTownCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CityTownCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityTownPayload>[]
          }
          delete: {
            args: Prisma.CityTownDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityTownPayload>
          }
          update: {
            args: Prisma.CityTownUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityTownPayload>
          }
          deleteMany: {
            args: Prisma.CityTownDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CityTownUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CityTownUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityTownPayload>[]
          }
          upsert: {
            args: Prisma.CityTownUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityTownPayload>
          }
          aggregate: {
            args: Prisma.CityTownAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCityTown>
          }
          groupBy: {
            args: Prisma.CityTownGroupByArgs<ExtArgs>
            result: $Utils.Optional<CityTownGroupByOutputType>[]
          }
          count: {
            args: Prisma.CityTownCountArgs<ExtArgs>
            result: $Utils.Optional<CityTownCountAggregateOutputType> | number
          }
        }
      }
      StateProvince: {
        payload: Prisma.$StateProvincePayload<ExtArgs>
        fields: Prisma.StateProvinceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StateProvinceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StateProvincePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StateProvinceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StateProvincePayload>
          }
          findFirst: {
            args: Prisma.StateProvinceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StateProvincePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StateProvinceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StateProvincePayload>
          }
          findMany: {
            args: Prisma.StateProvinceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StateProvincePayload>[]
          }
          create: {
            args: Prisma.StateProvinceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StateProvincePayload>
          }
          createMany: {
            args: Prisma.StateProvinceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StateProvinceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StateProvincePayload>[]
          }
          delete: {
            args: Prisma.StateProvinceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StateProvincePayload>
          }
          update: {
            args: Prisma.StateProvinceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StateProvincePayload>
          }
          deleteMany: {
            args: Prisma.StateProvinceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StateProvinceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StateProvinceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StateProvincePayload>[]
          }
          upsert: {
            args: Prisma.StateProvinceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StateProvincePayload>
          }
          aggregate: {
            args: Prisma.StateProvinceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStateProvince>
          }
          groupBy: {
            args: Prisma.StateProvinceGroupByArgs<ExtArgs>
            result: $Utils.Optional<StateProvinceGroupByOutputType>[]
          }
          count: {
            args: Prisma.StateProvinceCountArgs<ExtArgs>
            result: $Utils.Optional<StateProvinceCountAggregateOutputType> | number
          }
        }
      }
      Country: {
        payload: Prisma.$CountryPayload<ExtArgs>
        fields: Prisma.CountryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CountryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CountryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          findFirst: {
            args: Prisma.CountryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CountryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          findMany: {
            args: Prisma.CountryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>[]
          }
          create: {
            args: Prisma.CountryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          createMany: {
            args: Prisma.CountryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CountryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>[]
          }
          delete: {
            args: Prisma.CountryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          update: {
            args: Prisma.CountryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          deleteMany: {
            args: Prisma.CountryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CountryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CountryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>[]
          }
          upsert: {
            args: Prisma.CountryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          aggregate: {
            args: Prisma.CountryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCountry>
          }
          groupBy: {
            args: Prisma.CountryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CountryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CountryCountArgs<ExtArgs>
            result: $Utils.Optional<CountryCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    note?: NoteOmit
    cityTown?: CityTownOmit
    stateProvince?: StateProvinceOmit
    country?: CountryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type CityTownCountOutputType
   */

  export type CityTownCountOutputType = {
    notes: number
  }

  export type CityTownCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notes?: boolean | CityTownCountOutputTypeCountNotesArgs
  }

  // Custom InputTypes
  /**
   * CityTownCountOutputType without action
   */
  export type CityTownCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityTownCountOutputType
     */
    select?: CityTownCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CityTownCountOutputType without action
   */
  export type CityTownCountOutputTypeCountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteWhereInput
  }


  /**
   * Count Type StateProvinceCountOutputType
   */

  export type StateProvinceCountOutputType = {
    cityTowns: number
    notes: number
  }

  export type StateProvinceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cityTowns?: boolean | StateProvinceCountOutputTypeCountCityTownsArgs
    notes?: boolean | StateProvinceCountOutputTypeCountNotesArgs
  }

  // Custom InputTypes
  /**
   * StateProvinceCountOutputType without action
   */
  export type StateProvinceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateProvinceCountOutputType
     */
    select?: StateProvinceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StateProvinceCountOutputType without action
   */
  export type StateProvinceCountOutputTypeCountCityTownsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CityTownWhereInput
  }

  /**
   * StateProvinceCountOutputType without action
   */
  export type StateProvinceCountOutputTypeCountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteWhereInput
  }


  /**
   * Count Type CountryCountOutputType
   */

  export type CountryCountOutputType = {
    cityTowns: number
    stateProvinces: number
    notes: number
  }

  export type CountryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cityTowns?: boolean | CountryCountOutputTypeCountCityTownsArgs
    stateProvinces?: boolean | CountryCountOutputTypeCountStateProvincesArgs
    notes?: boolean | CountryCountOutputTypeCountNotesArgs
  }

  // Custom InputTypes
  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryCountOutputType
     */
    select?: CountryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeCountCityTownsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CityTownWhereInput
  }

  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeCountStateProvincesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StateProvinceWhereInput
  }

  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeCountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Note
   */

  export type AggregateNote = {
    _count: NoteCountAggregateOutputType | null
    _avg: NoteAvgAggregateOutputType | null
    _sum: NoteSumAggregateOutputType | null
    _min: NoteMinAggregateOutputType | null
    _max: NoteMaxAggregateOutputType | null
  }

  export type NoteAvgAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
    cityTownId: number | null
    stateProvinceId: number | null
    countryId: number | null
  }

  export type NoteSumAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
    cityTownId: number | null
    stateProvinceId: number | null
    countryId: number | null
  }

  export type NoteMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    text: string | null
    cityTown: string | null
    stateProvince: string | null
    country: string | null
    latitude: number | null
    longitude: number | null
    cityTownId: number | null
    stateProvinceId: number | null
    countryId: number | null
  }

  export type NoteMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    text: string | null
    cityTown: string | null
    stateProvince: string | null
    country: string | null
    latitude: number | null
    longitude: number | null
    cityTownId: number | null
    stateProvinceId: number | null
    countryId: number | null
  }

  export type NoteCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    text: number
    cityTown: number
    stateProvince: number
    country: number
    latitude: number
    longitude: number
    cityTownId: number
    stateProvinceId: number
    countryId: number
    _all: number
  }


  export type NoteAvgAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    cityTownId?: true
    stateProvinceId?: true
    countryId?: true
  }

  export type NoteSumAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    cityTownId?: true
    stateProvinceId?: true
    countryId?: true
  }

  export type NoteMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    text?: true
    cityTown?: true
    stateProvince?: true
    country?: true
    latitude?: true
    longitude?: true
    cityTownId?: true
    stateProvinceId?: true
    countryId?: true
  }

  export type NoteMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    text?: true
    cityTown?: true
    stateProvince?: true
    country?: true
    latitude?: true
    longitude?: true
    cityTownId?: true
    stateProvinceId?: true
    countryId?: true
  }

  export type NoteCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    text?: true
    cityTown?: true
    stateProvince?: true
    country?: true
    latitude?: true
    longitude?: true
    cityTownId?: true
    stateProvinceId?: true
    countryId?: true
    _all?: true
  }

  export type NoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Note to aggregate.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notes
    **/
    _count?: true | NoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NoteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NoteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NoteMaxAggregateInputType
  }

  export type GetNoteAggregateType<T extends NoteAggregateArgs> = {
        [P in keyof T & keyof AggregateNote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNote[P]>
      : GetScalarType<T[P], AggregateNote[P]>
  }




  export type NoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteWhereInput
    orderBy?: NoteOrderByWithAggregationInput | NoteOrderByWithAggregationInput[]
    by: NoteScalarFieldEnum[] | NoteScalarFieldEnum
    having?: NoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NoteCountAggregateInputType | true
    _avg?: NoteAvgAggregateInputType
    _sum?: NoteSumAggregateInputType
    _min?: NoteMinAggregateInputType
    _max?: NoteMaxAggregateInputType
  }

  export type NoteGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    text: string
    cityTown: string
    stateProvince: string
    country: string
    latitude: number
    longitude: number
    cityTownId: number
    stateProvinceId: number
    countryId: number
    _count: NoteCountAggregateOutputType | null
    _avg: NoteAvgAggregateOutputType | null
    _sum: NoteSumAggregateOutputType | null
    _min: NoteMinAggregateOutputType | null
    _max: NoteMaxAggregateOutputType | null
  }

  type GetNoteGroupByPayload<T extends NoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NoteGroupByOutputType[P]>
            : GetScalarType<T[P], NoteGroupByOutputType[P]>
        }
      >
    >


  export type NoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    text?: boolean
    cityTown?: boolean
    stateProvince?: boolean
    country?: boolean
    latitude?: boolean
    longitude?: boolean
    cityTownId?: boolean
    stateProvinceId?: boolean
    countryId?: boolean
    generalCityTown?: boolean | CityTownDefaultArgs<ExtArgs>
    generalStateProvince?: boolean | StateProvinceDefaultArgs<ExtArgs>
    generalCountry?: boolean | CountryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["note"]>

  export type NoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    text?: boolean
    cityTown?: boolean
    stateProvince?: boolean
    country?: boolean
    latitude?: boolean
    longitude?: boolean
    cityTownId?: boolean
    stateProvinceId?: boolean
    countryId?: boolean
    generalCityTown?: boolean | CityTownDefaultArgs<ExtArgs>
    generalStateProvince?: boolean | StateProvinceDefaultArgs<ExtArgs>
    generalCountry?: boolean | CountryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["note"]>

  export type NoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    text?: boolean
    cityTown?: boolean
    stateProvince?: boolean
    country?: boolean
    latitude?: boolean
    longitude?: boolean
    cityTownId?: boolean
    stateProvinceId?: boolean
    countryId?: boolean
    generalCityTown?: boolean | CityTownDefaultArgs<ExtArgs>
    generalStateProvince?: boolean | StateProvinceDefaultArgs<ExtArgs>
    generalCountry?: boolean | CountryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["note"]>

  export type NoteSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    text?: boolean
    cityTown?: boolean
    stateProvince?: boolean
    country?: boolean
    latitude?: boolean
    longitude?: boolean
    cityTownId?: boolean
    stateProvinceId?: boolean
    countryId?: boolean
  }

  export type NoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "text" | "cityTown" | "stateProvince" | "country" | "latitude" | "longitude" | "cityTownId" | "stateProvinceId" | "countryId", ExtArgs["result"]["note"]>
  export type NoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    generalCityTown?: boolean | CityTownDefaultArgs<ExtArgs>
    generalStateProvince?: boolean | StateProvinceDefaultArgs<ExtArgs>
    generalCountry?: boolean | CountryDefaultArgs<ExtArgs>
  }
  export type NoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    generalCityTown?: boolean | CityTownDefaultArgs<ExtArgs>
    generalStateProvince?: boolean | StateProvinceDefaultArgs<ExtArgs>
    generalCountry?: boolean | CountryDefaultArgs<ExtArgs>
  }
  export type NoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    generalCityTown?: boolean | CityTownDefaultArgs<ExtArgs>
    generalStateProvince?: boolean | StateProvinceDefaultArgs<ExtArgs>
    generalCountry?: boolean | CountryDefaultArgs<ExtArgs>
  }

  export type $NotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Note"
    objects: {
      generalCityTown: Prisma.$CityTownPayload<ExtArgs>
      generalStateProvince: Prisma.$StateProvincePayload<ExtArgs>
      generalCountry: Prisma.$CountryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      text: string
      cityTown: string
      stateProvince: string
      country: string
      latitude: number
      longitude: number
      cityTownId: number
      stateProvinceId: number
      countryId: number
    }, ExtArgs["result"]["note"]>
    composites: {}
  }

  type NoteGetPayload<S extends boolean | null | undefined | NoteDefaultArgs> = $Result.GetResult<Prisma.$NotePayload, S>

  type NoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NoteCountAggregateInputType | true
    }

  export interface NoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Note'], meta: { name: 'Note' } }
    /**
     * Find zero or one Note that matches the filter.
     * @param {NoteFindUniqueArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NoteFindUniqueArgs>(args: SelectSubset<T, NoteFindUniqueArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Note that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NoteFindUniqueOrThrowArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NoteFindUniqueOrThrowArgs>(args: SelectSubset<T, NoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Note that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindFirstArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NoteFindFirstArgs>(args?: SelectSubset<T, NoteFindFirstArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Note that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindFirstOrThrowArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NoteFindFirstOrThrowArgs>(args?: SelectSubset<T, NoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notes
     * const notes = await prisma.note.findMany()
     * 
     * // Get first 10 Notes
     * const notes = await prisma.note.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const noteWithIdOnly = await prisma.note.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NoteFindManyArgs>(args?: SelectSubset<T, NoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Note.
     * @param {NoteCreateArgs} args - Arguments to create a Note.
     * @example
     * // Create one Note
     * const Note = await prisma.note.create({
     *   data: {
     *     // ... data to create a Note
     *   }
     * })
     * 
     */
    create<T extends NoteCreateArgs>(args: SelectSubset<T, NoteCreateArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notes.
     * @param {NoteCreateManyArgs} args - Arguments to create many Notes.
     * @example
     * // Create many Notes
     * const note = await prisma.note.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NoteCreateManyArgs>(args?: SelectSubset<T, NoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notes and returns the data saved in the database.
     * @param {NoteCreateManyAndReturnArgs} args - Arguments to create many Notes.
     * @example
     * // Create many Notes
     * const note = await prisma.note.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notes and only return the `id`
     * const noteWithIdOnly = await prisma.note.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NoteCreateManyAndReturnArgs>(args?: SelectSubset<T, NoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Note.
     * @param {NoteDeleteArgs} args - Arguments to delete one Note.
     * @example
     * // Delete one Note
     * const Note = await prisma.note.delete({
     *   where: {
     *     // ... filter to delete one Note
     *   }
     * })
     * 
     */
    delete<T extends NoteDeleteArgs>(args: SelectSubset<T, NoteDeleteArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Note.
     * @param {NoteUpdateArgs} args - Arguments to update one Note.
     * @example
     * // Update one Note
     * const note = await prisma.note.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NoteUpdateArgs>(args: SelectSubset<T, NoteUpdateArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notes.
     * @param {NoteDeleteManyArgs} args - Arguments to filter Notes to delete.
     * @example
     * // Delete a few Notes
     * const { count } = await prisma.note.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NoteDeleteManyArgs>(args?: SelectSubset<T, NoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notes
     * const note = await prisma.note.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NoteUpdateManyArgs>(args: SelectSubset<T, NoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notes and returns the data updated in the database.
     * @param {NoteUpdateManyAndReturnArgs} args - Arguments to update many Notes.
     * @example
     * // Update many Notes
     * const note = await prisma.note.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notes and only return the `id`
     * const noteWithIdOnly = await prisma.note.updateManyAndReturn({
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
    updateManyAndReturn<T extends NoteUpdateManyAndReturnArgs>(args: SelectSubset<T, NoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Note.
     * @param {NoteUpsertArgs} args - Arguments to update or create a Note.
     * @example
     * // Update or create a Note
     * const note = await prisma.note.upsert({
     *   create: {
     *     // ... data to create a Note
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Note we want to update
     *   }
     * })
     */
    upsert<T extends NoteUpsertArgs>(args: SelectSubset<T, NoteUpsertArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteCountArgs} args - Arguments to filter Notes to count.
     * @example
     * // Count the number of Notes
     * const count = await prisma.note.count({
     *   where: {
     *     // ... the filter for the Notes we want to count
     *   }
     * })
    **/
    count<T extends NoteCountArgs>(
      args?: Subset<T, NoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Note.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NoteAggregateArgs>(args: Subset<T, NoteAggregateArgs>): Prisma.PrismaPromise<GetNoteAggregateType<T>>

    /**
     * Group by Note.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteGroupByArgs} args - Group by arguments.
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
      T extends NoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NoteGroupByArgs['orderBy'] }
        : { orderBy?: NoteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Note model
   */
  readonly fields: NoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Note.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    generalCityTown<T extends CityTownDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CityTownDefaultArgs<ExtArgs>>): Prisma__CityTownClient<$Result.GetResult<Prisma.$CityTownPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    generalStateProvince<T extends StateProvinceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StateProvinceDefaultArgs<ExtArgs>>): Prisma__StateProvinceClient<$Result.GetResult<Prisma.$StateProvincePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    generalCountry<T extends CountryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CountryDefaultArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Note model
   */
  interface NoteFieldRefs {
    readonly id: FieldRef<"Note", 'Int'>
    readonly createdAt: FieldRef<"Note", 'DateTime'>
    readonly updatedAt: FieldRef<"Note", 'DateTime'>
    readonly text: FieldRef<"Note", 'String'>
    readonly cityTown: FieldRef<"Note", 'String'>
    readonly stateProvince: FieldRef<"Note", 'String'>
    readonly country: FieldRef<"Note", 'String'>
    readonly latitude: FieldRef<"Note", 'Float'>
    readonly longitude: FieldRef<"Note", 'Float'>
    readonly cityTownId: FieldRef<"Note", 'Int'>
    readonly stateProvinceId: FieldRef<"Note", 'Int'>
    readonly countryId: FieldRef<"Note", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Note findUnique
   */
  export type NoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note findUniqueOrThrow
   */
  export type NoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note findFirst
   */
  export type NoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notes.
     */
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Note findFirstOrThrow
   */
  export type NoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notes.
     */
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Note findMany
   */
  export type NoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Notes to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Note create
   */
  export type NoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * The data needed to create a Note.
     */
    data: XOR<NoteCreateInput, NoteUncheckedCreateInput>
  }

  /**
   * Note createMany
   */
  export type NoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notes.
     */
    data: NoteCreateManyInput | NoteCreateManyInput[]
  }

  /**
   * Note createManyAndReturn
   */
  export type NoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * The data used to create many Notes.
     */
    data: NoteCreateManyInput | NoteCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Note update
   */
  export type NoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * The data needed to update a Note.
     */
    data: XOR<NoteUpdateInput, NoteUncheckedUpdateInput>
    /**
     * Choose, which Note to update.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note updateMany
   */
  export type NoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notes.
     */
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyInput>
    /**
     * Filter which Notes to update
     */
    where?: NoteWhereInput
    /**
     * Limit how many Notes to update.
     */
    limit?: number
  }

  /**
   * Note updateManyAndReturn
   */
  export type NoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * The data used to update Notes.
     */
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyInput>
    /**
     * Filter which Notes to update
     */
    where?: NoteWhereInput
    /**
     * Limit how many Notes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Note upsert
   */
  export type NoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * The filter to search for the Note to update in case it exists.
     */
    where: NoteWhereUniqueInput
    /**
     * In case the Note found by the `where` argument doesn't exist, create a new Note with this data.
     */
    create: XOR<NoteCreateInput, NoteUncheckedCreateInput>
    /**
     * In case the Note was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NoteUpdateInput, NoteUncheckedUpdateInput>
  }

  /**
   * Note delete
   */
  export type NoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter which Note to delete.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note deleteMany
   */
  export type NoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notes to delete
     */
    where?: NoteWhereInput
    /**
     * Limit how many Notes to delete.
     */
    limit?: number
  }

  /**
   * Note without action
   */
  export type NoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
  }


  /**
   * Model CityTown
   */

  export type AggregateCityTown = {
    _count: CityTownCountAggregateOutputType | null
    _avg: CityTownAvgAggregateOutputType | null
    _sum: CityTownSumAggregateOutputType | null
    _min: CityTownMinAggregateOutputType | null
    _max: CityTownMaxAggregateOutputType | null
  }

  export type CityTownAvgAggregateOutputType = {
    id: number | null
    stateProvinceId: number | null
    countryId: number | null
    latitude: number | null
    longitude: number | null
  }

  export type CityTownSumAggregateOutputType = {
    id: number | null
    stateProvinceId: number | null
    countryId: number | null
    latitude: number | null
    longitude: number | null
  }

  export type CityTownMinAggregateOutputType = {
    id: number | null
    name: string | null
    stateProvinceId: number | null
    countryId: number | null
    latitude: number | null
    longitude: number | null
  }

  export type CityTownMaxAggregateOutputType = {
    id: number | null
    name: string | null
    stateProvinceId: number | null
    countryId: number | null
    latitude: number | null
    longitude: number | null
  }

  export type CityTownCountAggregateOutputType = {
    id: number
    name: number
    stateProvinceId: number
    countryId: number
    latitude: number
    longitude: number
    _all: number
  }


  export type CityTownAvgAggregateInputType = {
    id?: true
    stateProvinceId?: true
    countryId?: true
    latitude?: true
    longitude?: true
  }

  export type CityTownSumAggregateInputType = {
    id?: true
    stateProvinceId?: true
    countryId?: true
    latitude?: true
    longitude?: true
  }

  export type CityTownMinAggregateInputType = {
    id?: true
    name?: true
    stateProvinceId?: true
    countryId?: true
    latitude?: true
    longitude?: true
  }

  export type CityTownMaxAggregateInputType = {
    id?: true
    name?: true
    stateProvinceId?: true
    countryId?: true
    latitude?: true
    longitude?: true
  }

  export type CityTownCountAggregateInputType = {
    id?: true
    name?: true
    stateProvinceId?: true
    countryId?: true
    latitude?: true
    longitude?: true
    _all?: true
  }

  export type CityTownAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CityTown to aggregate.
     */
    where?: CityTownWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CityTowns to fetch.
     */
    orderBy?: CityTownOrderByWithRelationInput | CityTownOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CityTownWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CityTowns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CityTowns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CityTowns
    **/
    _count?: true | CityTownCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CityTownAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CityTownSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CityTownMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CityTownMaxAggregateInputType
  }

  export type GetCityTownAggregateType<T extends CityTownAggregateArgs> = {
        [P in keyof T & keyof AggregateCityTown]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCityTown[P]>
      : GetScalarType<T[P], AggregateCityTown[P]>
  }




  export type CityTownGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CityTownWhereInput
    orderBy?: CityTownOrderByWithAggregationInput | CityTownOrderByWithAggregationInput[]
    by: CityTownScalarFieldEnum[] | CityTownScalarFieldEnum
    having?: CityTownScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CityTownCountAggregateInputType | true
    _avg?: CityTownAvgAggregateInputType
    _sum?: CityTownSumAggregateInputType
    _min?: CityTownMinAggregateInputType
    _max?: CityTownMaxAggregateInputType
  }

  export type CityTownGroupByOutputType = {
    id: number
    name: string
    stateProvinceId: number
    countryId: number
    latitude: number
    longitude: number
    _count: CityTownCountAggregateOutputType | null
    _avg: CityTownAvgAggregateOutputType | null
    _sum: CityTownSumAggregateOutputType | null
    _min: CityTownMinAggregateOutputType | null
    _max: CityTownMaxAggregateOutputType | null
  }

  type GetCityTownGroupByPayload<T extends CityTownGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CityTownGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CityTownGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CityTownGroupByOutputType[P]>
            : GetScalarType<T[P], CityTownGroupByOutputType[P]>
        }
      >
    >


  export type CityTownSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    stateProvinceId?: boolean
    countryId?: boolean
    latitude?: boolean
    longitude?: boolean
    stateProvince?: boolean | StateProvinceDefaultArgs<ExtArgs>
    country?: boolean | CountryDefaultArgs<ExtArgs>
    notes?: boolean | CityTown$notesArgs<ExtArgs>
    _count?: boolean | CityTownCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cityTown"]>

  export type CityTownSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    stateProvinceId?: boolean
    countryId?: boolean
    latitude?: boolean
    longitude?: boolean
    stateProvince?: boolean | StateProvinceDefaultArgs<ExtArgs>
    country?: boolean | CountryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cityTown"]>

  export type CityTownSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    stateProvinceId?: boolean
    countryId?: boolean
    latitude?: boolean
    longitude?: boolean
    stateProvince?: boolean | StateProvinceDefaultArgs<ExtArgs>
    country?: boolean | CountryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cityTown"]>

  export type CityTownSelectScalar = {
    id?: boolean
    name?: boolean
    stateProvinceId?: boolean
    countryId?: boolean
    latitude?: boolean
    longitude?: boolean
  }

  export type CityTownOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "stateProvinceId" | "countryId" | "latitude" | "longitude", ExtArgs["result"]["cityTown"]>
  export type CityTownInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stateProvince?: boolean | StateProvinceDefaultArgs<ExtArgs>
    country?: boolean | CountryDefaultArgs<ExtArgs>
    notes?: boolean | CityTown$notesArgs<ExtArgs>
    _count?: boolean | CityTownCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CityTownIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stateProvince?: boolean | StateProvinceDefaultArgs<ExtArgs>
    country?: boolean | CountryDefaultArgs<ExtArgs>
  }
  export type CityTownIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stateProvince?: boolean | StateProvinceDefaultArgs<ExtArgs>
    country?: boolean | CountryDefaultArgs<ExtArgs>
  }

  export type $CityTownPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CityTown"
    objects: {
      stateProvince: Prisma.$StateProvincePayload<ExtArgs>
      country: Prisma.$CountryPayload<ExtArgs>
      notes: Prisma.$NotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      stateProvinceId: number
      countryId: number
      latitude: number
      longitude: number
    }, ExtArgs["result"]["cityTown"]>
    composites: {}
  }

  type CityTownGetPayload<S extends boolean | null | undefined | CityTownDefaultArgs> = $Result.GetResult<Prisma.$CityTownPayload, S>

  type CityTownCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CityTownFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CityTownCountAggregateInputType | true
    }

  export interface CityTownDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CityTown'], meta: { name: 'CityTown' } }
    /**
     * Find zero or one CityTown that matches the filter.
     * @param {CityTownFindUniqueArgs} args - Arguments to find a CityTown
     * @example
     * // Get one CityTown
     * const cityTown = await prisma.cityTown.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CityTownFindUniqueArgs>(args: SelectSubset<T, CityTownFindUniqueArgs<ExtArgs>>): Prisma__CityTownClient<$Result.GetResult<Prisma.$CityTownPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CityTown that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CityTownFindUniqueOrThrowArgs} args - Arguments to find a CityTown
     * @example
     * // Get one CityTown
     * const cityTown = await prisma.cityTown.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CityTownFindUniqueOrThrowArgs>(args: SelectSubset<T, CityTownFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CityTownClient<$Result.GetResult<Prisma.$CityTownPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CityTown that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityTownFindFirstArgs} args - Arguments to find a CityTown
     * @example
     * // Get one CityTown
     * const cityTown = await prisma.cityTown.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CityTownFindFirstArgs>(args?: SelectSubset<T, CityTownFindFirstArgs<ExtArgs>>): Prisma__CityTownClient<$Result.GetResult<Prisma.$CityTownPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CityTown that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityTownFindFirstOrThrowArgs} args - Arguments to find a CityTown
     * @example
     * // Get one CityTown
     * const cityTown = await prisma.cityTown.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CityTownFindFirstOrThrowArgs>(args?: SelectSubset<T, CityTownFindFirstOrThrowArgs<ExtArgs>>): Prisma__CityTownClient<$Result.GetResult<Prisma.$CityTownPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CityTowns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityTownFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CityTowns
     * const cityTowns = await prisma.cityTown.findMany()
     * 
     * // Get first 10 CityTowns
     * const cityTowns = await prisma.cityTown.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cityTownWithIdOnly = await prisma.cityTown.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CityTownFindManyArgs>(args?: SelectSubset<T, CityTownFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CityTownPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CityTown.
     * @param {CityTownCreateArgs} args - Arguments to create a CityTown.
     * @example
     * // Create one CityTown
     * const CityTown = await prisma.cityTown.create({
     *   data: {
     *     // ... data to create a CityTown
     *   }
     * })
     * 
     */
    create<T extends CityTownCreateArgs>(args: SelectSubset<T, CityTownCreateArgs<ExtArgs>>): Prisma__CityTownClient<$Result.GetResult<Prisma.$CityTownPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CityTowns.
     * @param {CityTownCreateManyArgs} args - Arguments to create many CityTowns.
     * @example
     * // Create many CityTowns
     * const cityTown = await prisma.cityTown.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CityTownCreateManyArgs>(args?: SelectSubset<T, CityTownCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CityTowns and returns the data saved in the database.
     * @param {CityTownCreateManyAndReturnArgs} args - Arguments to create many CityTowns.
     * @example
     * // Create many CityTowns
     * const cityTown = await prisma.cityTown.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CityTowns and only return the `id`
     * const cityTownWithIdOnly = await prisma.cityTown.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CityTownCreateManyAndReturnArgs>(args?: SelectSubset<T, CityTownCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CityTownPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CityTown.
     * @param {CityTownDeleteArgs} args - Arguments to delete one CityTown.
     * @example
     * // Delete one CityTown
     * const CityTown = await prisma.cityTown.delete({
     *   where: {
     *     // ... filter to delete one CityTown
     *   }
     * })
     * 
     */
    delete<T extends CityTownDeleteArgs>(args: SelectSubset<T, CityTownDeleteArgs<ExtArgs>>): Prisma__CityTownClient<$Result.GetResult<Prisma.$CityTownPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CityTown.
     * @param {CityTownUpdateArgs} args - Arguments to update one CityTown.
     * @example
     * // Update one CityTown
     * const cityTown = await prisma.cityTown.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CityTownUpdateArgs>(args: SelectSubset<T, CityTownUpdateArgs<ExtArgs>>): Prisma__CityTownClient<$Result.GetResult<Prisma.$CityTownPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CityTowns.
     * @param {CityTownDeleteManyArgs} args - Arguments to filter CityTowns to delete.
     * @example
     * // Delete a few CityTowns
     * const { count } = await prisma.cityTown.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CityTownDeleteManyArgs>(args?: SelectSubset<T, CityTownDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CityTowns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityTownUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CityTowns
     * const cityTown = await prisma.cityTown.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CityTownUpdateManyArgs>(args: SelectSubset<T, CityTownUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CityTowns and returns the data updated in the database.
     * @param {CityTownUpdateManyAndReturnArgs} args - Arguments to update many CityTowns.
     * @example
     * // Update many CityTowns
     * const cityTown = await prisma.cityTown.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CityTowns and only return the `id`
     * const cityTownWithIdOnly = await prisma.cityTown.updateManyAndReturn({
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
    updateManyAndReturn<T extends CityTownUpdateManyAndReturnArgs>(args: SelectSubset<T, CityTownUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CityTownPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CityTown.
     * @param {CityTownUpsertArgs} args - Arguments to update or create a CityTown.
     * @example
     * // Update or create a CityTown
     * const cityTown = await prisma.cityTown.upsert({
     *   create: {
     *     // ... data to create a CityTown
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CityTown we want to update
     *   }
     * })
     */
    upsert<T extends CityTownUpsertArgs>(args: SelectSubset<T, CityTownUpsertArgs<ExtArgs>>): Prisma__CityTownClient<$Result.GetResult<Prisma.$CityTownPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CityTowns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityTownCountArgs} args - Arguments to filter CityTowns to count.
     * @example
     * // Count the number of CityTowns
     * const count = await prisma.cityTown.count({
     *   where: {
     *     // ... the filter for the CityTowns we want to count
     *   }
     * })
    **/
    count<T extends CityTownCountArgs>(
      args?: Subset<T, CityTownCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CityTownCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CityTown.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityTownAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CityTownAggregateArgs>(args: Subset<T, CityTownAggregateArgs>): Prisma.PrismaPromise<GetCityTownAggregateType<T>>

    /**
     * Group by CityTown.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityTownGroupByArgs} args - Group by arguments.
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
      T extends CityTownGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CityTownGroupByArgs['orderBy'] }
        : { orderBy?: CityTownGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CityTownGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCityTownGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CityTown model
   */
  readonly fields: CityTownFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CityTown.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CityTownClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    stateProvince<T extends StateProvinceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StateProvinceDefaultArgs<ExtArgs>>): Prisma__StateProvinceClient<$Result.GetResult<Prisma.$StateProvincePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    country<T extends CountryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CountryDefaultArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    notes<T extends CityTown$notesArgs<ExtArgs> = {}>(args?: Subset<T, CityTown$notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CityTown model
   */
  interface CityTownFieldRefs {
    readonly id: FieldRef<"CityTown", 'Int'>
    readonly name: FieldRef<"CityTown", 'String'>
    readonly stateProvinceId: FieldRef<"CityTown", 'Int'>
    readonly countryId: FieldRef<"CityTown", 'Int'>
    readonly latitude: FieldRef<"CityTown", 'Float'>
    readonly longitude: FieldRef<"CityTown", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * CityTown findUnique
   */
  export type CityTownFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityTown
     */
    select?: CityTownSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CityTown
     */
    omit?: CityTownOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityTownInclude<ExtArgs> | null
    /**
     * Filter, which CityTown to fetch.
     */
    where: CityTownWhereUniqueInput
  }

  /**
   * CityTown findUniqueOrThrow
   */
  export type CityTownFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityTown
     */
    select?: CityTownSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CityTown
     */
    omit?: CityTownOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityTownInclude<ExtArgs> | null
    /**
     * Filter, which CityTown to fetch.
     */
    where: CityTownWhereUniqueInput
  }

  /**
   * CityTown findFirst
   */
  export type CityTownFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityTown
     */
    select?: CityTownSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CityTown
     */
    omit?: CityTownOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityTownInclude<ExtArgs> | null
    /**
     * Filter, which CityTown to fetch.
     */
    where?: CityTownWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CityTowns to fetch.
     */
    orderBy?: CityTownOrderByWithRelationInput | CityTownOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CityTowns.
     */
    cursor?: CityTownWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CityTowns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CityTowns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CityTowns.
     */
    distinct?: CityTownScalarFieldEnum | CityTownScalarFieldEnum[]
  }

  /**
   * CityTown findFirstOrThrow
   */
  export type CityTownFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityTown
     */
    select?: CityTownSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CityTown
     */
    omit?: CityTownOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityTownInclude<ExtArgs> | null
    /**
     * Filter, which CityTown to fetch.
     */
    where?: CityTownWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CityTowns to fetch.
     */
    orderBy?: CityTownOrderByWithRelationInput | CityTownOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CityTowns.
     */
    cursor?: CityTownWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CityTowns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CityTowns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CityTowns.
     */
    distinct?: CityTownScalarFieldEnum | CityTownScalarFieldEnum[]
  }

  /**
   * CityTown findMany
   */
  export type CityTownFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityTown
     */
    select?: CityTownSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CityTown
     */
    omit?: CityTownOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityTownInclude<ExtArgs> | null
    /**
     * Filter, which CityTowns to fetch.
     */
    where?: CityTownWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CityTowns to fetch.
     */
    orderBy?: CityTownOrderByWithRelationInput | CityTownOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CityTowns.
     */
    cursor?: CityTownWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CityTowns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CityTowns.
     */
    skip?: number
    distinct?: CityTownScalarFieldEnum | CityTownScalarFieldEnum[]
  }

  /**
   * CityTown create
   */
  export type CityTownCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityTown
     */
    select?: CityTownSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CityTown
     */
    omit?: CityTownOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityTownInclude<ExtArgs> | null
    /**
     * The data needed to create a CityTown.
     */
    data: XOR<CityTownCreateInput, CityTownUncheckedCreateInput>
  }

  /**
   * CityTown createMany
   */
  export type CityTownCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CityTowns.
     */
    data: CityTownCreateManyInput | CityTownCreateManyInput[]
  }

  /**
   * CityTown createManyAndReturn
   */
  export type CityTownCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityTown
     */
    select?: CityTownSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CityTown
     */
    omit?: CityTownOmit<ExtArgs> | null
    /**
     * The data used to create many CityTowns.
     */
    data: CityTownCreateManyInput | CityTownCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityTownIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CityTown update
   */
  export type CityTownUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityTown
     */
    select?: CityTownSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CityTown
     */
    omit?: CityTownOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityTownInclude<ExtArgs> | null
    /**
     * The data needed to update a CityTown.
     */
    data: XOR<CityTownUpdateInput, CityTownUncheckedUpdateInput>
    /**
     * Choose, which CityTown to update.
     */
    where: CityTownWhereUniqueInput
  }

  /**
   * CityTown updateMany
   */
  export type CityTownUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CityTowns.
     */
    data: XOR<CityTownUpdateManyMutationInput, CityTownUncheckedUpdateManyInput>
    /**
     * Filter which CityTowns to update
     */
    where?: CityTownWhereInput
    /**
     * Limit how many CityTowns to update.
     */
    limit?: number
  }

  /**
   * CityTown updateManyAndReturn
   */
  export type CityTownUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityTown
     */
    select?: CityTownSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CityTown
     */
    omit?: CityTownOmit<ExtArgs> | null
    /**
     * The data used to update CityTowns.
     */
    data: XOR<CityTownUpdateManyMutationInput, CityTownUncheckedUpdateManyInput>
    /**
     * Filter which CityTowns to update
     */
    where?: CityTownWhereInput
    /**
     * Limit how many CityTowns to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityTownIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CityTown upsert
   */
  export type CityTownUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityTown
     */
    select?: CityTownSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CityTown
     */
    omit?: CityTownOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityTownInclude<ExtArgs> | null
    /**
     * The filter to search for the CityTown to update in case it exists.
     */
    where: CityTownWhereUniqueInput
    /**
     * In case the CityTown found by the `where` argument doesn't exist, create a new CityTown with this data.
     */
    create: XOR<CityTownCreateInput, CityTownUncheckedCreateInput>
    /**
     * In case the CityTown was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CityTownUpdateInput, CityTownUncheckedUpdateInput>
  }

  /**
   * CityTown delete
   */
  export type CityTownDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityTown
     */
    select?: CityTownSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CityTown
     */
    omit?: CityTownOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityTownInclude<ExtArgs> | null
    /**
     * Filter which CityTown to delete.
     */
    where: CityTownWhereUniqueInput
  }

  /**
   * CityTown deleteMany
   */
  export type CityTownDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CityTowns to delete
     */
    where?: CityTownWhereInput
    /**
     * Limit how many CityTowns to delete.
     */
    limit?: number
  }

  /**
   * CityTown.notes
   */
  export type CityTown$notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    where?: NoteWhereInput
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    cursor?: NoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * CityTown without action
   */
  export type CityTownDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityTown
     */
    select?: CityTownSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CityTown
     */
    omit?: CityTownOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityTownInclude<ExtArgs> | null
  }


  /**
   * Model StateProvince
   */

  export type AggregateStateProvince = {
    _count: StateProvinceCountAggregateOutputType | null
    _avg: StateProvinceAvgAggregateOutputType | null
    _sum: StateProvinceSumAggregateOutputType | null
    _min: StateProvinceMinAggregateOutputType | null
    _max: StateProvinceMaxAggregateOutputType | null
  }

  export type StateProvinceAvgAggregateOutputType = {
    id: number | null
    countryId: number | null
    latitude: number | null
    longitude: number | null
  }

  export type StateProvinceSumAggregateOutputType = {
    id: number | null
    countryId: number | null
    latitude: number | null
    longitude: number | null
  }

  export type StateProvinceMinAggregateOutputType = {
    id: number | null
    name: string | null
    countryId: number | null
    latitude: number | null
    longitude: number | null
  }

  export type StateProvinceMaxAggregateOutputType = {
    id: number | null
    name: string | null
    countryId: number | null
    latitude: number | null
    longitude: number | null
  }

  export type StateProvinceCountAggregateOutputType = {
    id: number
    name: number
    countryId: number
    latitude: number
    longitude: number
    _all: number
  }


  export type StateProvinceAvgAggregateInputType = {
    id?: true
    countryId?: true
    latitude?: true
    longitude?: true
  }

  export type StateProvinceSumAggregateInputType = {
    id?: true
    countryId?: true
    latitude?: true
    longitude?: true
  }

  export type StateProvinceMinAggregateInputType = {
    id?: true
    name?: true
    countryId?: true
    latitude?: true
    longitude?: true
  }

  export type StateProvinceMaxAggregateInputType = {
    id?: true
    name?: true
    countryId?: true
    latitude?: true
    longitude?: true
  }

  export type StateProvinceCountAggregateInputType = {
    id?: true
    name?: true
    countryId?: true
    latitude?: true
    longitude?: true
    _all?: true
  }

  export type StateProvinceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StateProvince to aggregate.
     */
    where?: StateProvinceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StateProvinces to fetch.
     */
    orderBy?: StateProvinceOrderByWithRelationInput | StateProvinceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StateProvinceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StateProvinces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StateProvinces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StateProvinces
    **/
    _count?: true | StateProvinceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StateProvinceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StateProvinceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StateProvinceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StateProvinceMaxAggregateInputType
  }

  export type GetStateProvinceAggregateType<T extends StateProvinceAggregateArgs> = {
        [P in keyof T & keyof AggregateStateProvince]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStateProvince[P]>
      : GetScalarType<T[P], AggregateStateProvince[P]>
  }




  export type StateProvinceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StateProvinceWhereInput
    orderBy?: StateProvinceOrderByWithAggregationInput | StateProvinceOrderByWithAggregationInput[]
    by: StateProvinceScalarFieldEnum[] | StateProvinceScalarFieldEnum
    having?: StateProvinceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StateProvinceCountAggregateInputType | true
    _avg?: StateProvinceAvgAggregateInputType
    _sum?: StateProvinceSumAggregateInputType
    _min?: StateProvinceMinAggregateInputType
    _max?: StateProvinceMaxAggregateInputType
  }

  export type StateProvinceGroupByOutputType = {
    id: number
    name: string
    countryId: number
    latitude: number
    longitude: number
    _count: StateProvinceCountAggregateOutputType | null
    _avg: StateProvinceAvgAggregateOutputType | null
    _sum: StateProvinceSumAggregateOutputType | null
    _min: StateProvinceMinAggregateOutputType | null
    _max: StateProvinceMaxAggregateOutputType | null
  }

  type GetStateProvinceGroupByPayload<T extends StateProvinceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StateProvinceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StateProvinceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StateProvinceGroupByOutputType[P]>
            : GetScalarType<T[P], StateProvinceGroupByOutputType[P]>
        }
      >
    >


  export type StateProvinceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    countryId?: boolean
    latitude?: boolean
    longitude?: boolean
    country?: boolean | CountryDefaultArgs<ExtArgs>
    cityTowns?: boolean | StateProvince$cityTownsArgs<ExtArgs>
    notes?: boolean | StateProvince$notesArgs<ExtArgs>
    _count?: boolean | StateProvinceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stateProvince"]>

  export type StateProvinceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    countryId?: boolean
    latitude?: boolean
    longitude?: boolean
    country?: boolean | CountryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stateProvince"]>

  export type StateProvinceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    countryId?: boolean
    latitude?: boolean
    longitude?: boolean
    country?: boolean | CountryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stateProvince"]>

  export type StateProvinceSelectScalar = {
    id?: boolean
    name?: boolean
    countryId?: boolean
    latitude?: boolean
    longitude?: boolean
  }

  export type StateProvinceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "countryId" | "latitude" | "longitude", ExtArgs["result"]["stateProvince"]>
  export type StateProvinceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    country?: boolean | CountryDefaultArgs<ExtArgs>
    cityTowns?: boolean | StateProvince$cityTownsArgs<ExtArgs>
    notes?: boolean | StateProvince$notesArgs<ExtArgs>
    _count?: boolean | StateProvinceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StateProvinceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    country?: boolean | CountryDefaultArgs<ExtArgs>
  }
  export type StateProvinceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    country?: boolean | CountryDefaultArgs<ExtArgs>
  }

  export type $StateProvincePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StateProvince"
    objects: {
      country: Prisma.$CountryPayload<ExtArgs>
      cityTowns: Prisma.$CityTownPayload<ExtArgs>[]
      notes: Prisma.$NotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      countryId: number
      latitude: number
      longitude: number
    }, ExtArgs["result"]["stateProvince"]>
    composites: {}
  }

  type StateProvinceGetPayload<S extends boolean | null | undefined | StateProvinceDefaultArgs> = $Result.GetResult<Prisma.$StateProvincePayload, S>

  type StateProvinceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StateProvinceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StateProvinceCountAggregateInputType | true
    }

  export interface StateProvinceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StateProvince'], meta: { name: 'StateProvince' } }
    /**
     * Find zero or one StateProvince that matches the filter.
     * @param {StateProvinceFindUniqueArgs} args - Arguments to find a StateProvince
     * @example
     * // Get one StateProvince
     * const stateProvince = await prisma.stateProvince.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StateProvinceFindUniqueArgs>(args: SelectSubset<T, StateProvinceFindUniqueArgs<ExtArgs>>): Prisma__StateProvinceClient<$Result.GetResult<Prisma.$StateProvincePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StateProvince that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StateProvinceFindUniqueOrThrowArgs} args - Arguments to find a StateProvince
     * @example
     * // Get one StateProvince
     * const stateProvince = await prisma.stateProvince.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StateProvinceFindUniqueOrThrowArgs>(args: SelectSubset<T, StateProvinceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StateProvinceClient<$Result.GetResult<Prisma.$StateProvincePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StateProvince that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateProvinceFindFirstArgs} args - Arguments to find a StateProvince
     * @example
     * // Get one StateProvince
     * const stateProvince = await prisma.stateProvince.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StateProvinceFindFirstArgs>(args?: SelectSubset<T, StateProvinceFindFirstArgs<ExtArgs>>): Prisma__StateProvinceClient<$Result.GetResult<Prisma.$StateProvincePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StateProvince that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateProvinceFindFirstOrThrowArgs} args - Arguments to find a StateProvince
     * @example
     * // Get one StateProvince
     * const stateProvince = await prisma.stateProvince.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StateProvinceFindFirstOrThrowArgs>(args?: SelectSubset<T, StateProvinceFindFirstOrThrowArgs<ExtArgs>>): Prisma__StateProvinceClient<$Result.GetResult<Prisma.$StateProvincePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StateProvinces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateProvinceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StateProvinces
     * const stateProvinces = await prisma.stateProvince.findMany()
     * 
     * // Get first 10 StateProvinces
     * const stateProvinces = await prisma.stateProvince.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stateProvinceWithIdOnly = await prisma.stateProvince.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StateProvinceFindManyArgs>(args?: SelectSubset<T, StateProvinceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StateProvincePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StateProvince.
     * @param {StateProvinceCreateArgs} args - Arguments to create a StateProvince.
     * @example
     * // Create one StateProvince
     * const StateProvince = await prisma.stateProvince.create({
     *   data: {
     *     // ... data to create a StateProvince
     *   }
     * })
     * 
     */
    create<T extends StateProvinceCreateArgs>(args: SelectSubset<T, StateProvinceCreateArgs<ExtArgs>>): Prisma__StateProvinceClient<$Result.GetResult<Prisma.$StateProvincePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StateProvinces.
     * @param {StateProvinceCreateManyArgs} args - Arguments to create many StateProvinces.
     * @example
     * // Create many StateProvinces
     * const stateProvince = await prisma.stateProvince.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StateProvinceCreateManyArgs>(args?: SelectSubset<T, StateProvinceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StateProvinces and returns the data saved in the database.
     * @param {StateProvinceCreateManyAndReturnArgs} args - Arguments to create many StateProvinces.
     * @example
     * // Create many StateProvinces
     * const stateProvince = await prisma.stateProvince.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StateProvinces and only return the `id`
     * const stateProvinceWithIdOnly = await prisma.stateProvince.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StateProvinceCreateManyAndReturnArgs>(args?: SelectSubset<T, StateProvinceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StateProvincePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StateProvince.
     * @param {StateProvinceDeleteArgs} args - Arguments to delete one StateProvince.
     * @example
     * // Delete one StateProvince
     * const StateProvince = await prisma.stateProvince.delete({
     *   where: {
     *     // ... filter to delete one StateProvince
     *   }
     * })
     * 
     */
    delete<T extends StateProvinceDeleteArgs>(args: SelectSubset<T, StateProvinceDeleteArgs<ExtArgs>>): Prisma__StateProvinceClient<$Result.GetResult<Prisma.$StateProvincePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StateProvince.
     * @param {StateProvinceUpdateArgs} args - Arguments to update one StateProvince.
     * @example
     * // Update one StateProvince
     * const stateProvince = await prisma.stateProvince.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StateProvinceUpdateArgs>(args: SelectSubset<T, StateProvinceUpdateArgs<ExtArgs>>): Prisma__StateProvinceClient<$Result.GetResult<Prisma.$StateProvincePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StateProvinces.
     * @param {StateProvinceDeleteManyArgs} args - Arguments to filter StateProvinces to delete.
     * @example
     * // Delete a few StateProvinces
     * const { count } = await prisma.stateProvince.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StateProvinceDeleteManyArgs>(args?: SelectSubset<T, StateProvinceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StateProvinces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateProvinceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StateProvinces
     * const stateProvince = await prisma.stateProvince.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StateProvinceUpdateManyArgs>(args: SelectSubset<T, StateProvinceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StateProvinces and returns the data updated in the database.
     * @param {StateProvinceUpdateManyAndReturnArgs} args - Arguments to update many StateProvinces.
     * @example
     * // Update many StateProvinces
     * const stateProvince = await prisma.stateProvince.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StateProvinces and only return the `id`
     * const stateProvinceWithIdOnly = await prisma.stateProvince.updateManyAndReturn({
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
    updateManyAndReturn<T extends StateProvinceUpdateManyAndReturnArgs>(args: SelectSubset<T, StateProvinceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StateProvincePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StateProvince.
     * @param {StateProvinceUpsertArgs} args - Arguments to update or create a StateProvince.
     * @example
     * // Update or create a StateProvince
     * const stateProvince = await prisma.stateProvince.upsert({
     *   create: {
     *     // ... data to create a StateProvince
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StateProvince we want to update
     *   }
     * })
     */
    upsert<T extends StateProvinceUpsertArgs>(args: SelectSubset<T, StateProvinceUpsertArgs<ExtArgs>>): Prisma__StateProvinceClient<$Result.GetResult<Prisma.$StateProvincePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StateProvinces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateProvinceCountArgs} args - Arguments to filter StateProvinces to count.
     * @example
     * // Count the number of StateProvinces
     * const count = await prisma.stateProvince.count({
     *   where: {
     *     // ... the filter for the StateProvinces we want to count
     *   }
     * })
    **/
    count<T extends StateProvinceCountArgs>(
      args?: Subset<T, StateProvinceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StateProvinceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StateProvince.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateProvinceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StateProvinceAggregateArgs>(args: Subset<T, StateProvinceAggregateArgs>): Prisma.PrismaPromise<GetStateProvinceAggregateType<T>>

    /**
     * Group by StateProvince.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateProvinceGroupByArgs} args - Group by arguments.
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
      T extends StateProvinceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StateProvinceGroupByArgs['orderBy'] }
        : { orderBy?: StateProvinceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StateProvinceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStateProvinceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StateProvince model
   */
  readonly fields: StateProvinceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StateProvince.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StateProvinceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    country<T extends CountryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CountryDefaultArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cityTowns<T extends StateProvince$cityTownsArgs<ExtArgs> = {}>(args?: Subset<T, StateProvince$cityTownsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CityTownPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notes<T extends StateProvince$notesArgs<ExtArgs> = {}>(args?: Subset<T, StateProvince$notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the StateProvince model
   */
  interface StateProvinceFieldRefs {
    readonly id: FieldRef<"StateProvince", 'Int'>
    readonly name: FieldRef<"StateProvince", 'String'>
    readonly countryId: FieldRef<"StateProvince", 'Int'>
    readonly latitude: FieldRef<"StateProvince", 'Float'>
    readonly longitude: FieldRef<"StateProvince", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * StateProvince findUnique
   */
  export type StateProvinceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateProvince
     */
    select?: StateProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StateProvince
     */
    omit?: StateProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateProvinceInclude<ExtArgs> | null
    /**
     * Filter, which StateProvince to fetch.
     */
    where: StateProvinceWhereUniqueInput
  }

  /**
   * StateProvince findUniqueOrThrow
   */
  export type StateProvinceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateProvince
     */
    select?: StateProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StateProvince
     */
    omit?: StateProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateProvinceInclude<ExtArgs> | null
    /**
     * Filter, which StateProvince to fetch.
     */
    where: StateProvinceWhereUniqueInput
  }

  /**
   * StateProvince findFirst
   */
  export type StateProvinceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateProvince
     */
    select?: StateProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StateProvince
     */
    omit?: StateProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateProvinceInclude<ExtArgs> | null
    /**
     * Filter, which StateProvince to fetch.
     */
    where?: StateProvinceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StateProvinces to fetch.
     */
    orderBy?: StateProvinceOrderByWithRelationInput | StateProvinceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StateProvinces.
     */
    cursor?: StateProvinceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StateProvinces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StateProvinces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StateProvinces.
     */
    distinct?: StateProvinceScalarFieldEnum | StateProvinceScalarFieldEnum[]
  }

  /**
   * StateProvince findFirstOrThrow
   */
  export type StateProvinceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateProvince
     */
    select?: StateProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StateProvince
     */
    omit?: StateProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateProvinceInclude<ExtArgs> | null
    /**
     * Filter, which StateProvince to fetch.
     */
    where?: StateProvinceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StateProvinces to fetch.
     */
    orderBy?: StateProvinceOrderByWithRelationInput | StateProvinceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StateProvinces.
     */
    cursor?: StateProvinceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StateProvinces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StateProvinces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StateProvinces.
     */
    distinct?: StateProvinceScalarFieldEnum | StateProvinceScalarFieldEnum[]
  }

  /**
   * StateProvince findMany
   */
  export type StateProvinceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateProvince
     */
    select?: StateProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StateProvince
     */
    omit?: StateProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateProvinceInclude<ExtArgs> | null
    /**
     * Filter, which StateProvinces to fetch.
     */
    where?: StateProvinceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StateProvinces to fetch.
     */
    orderBy?: StateProvinceOrderByWithRelationInput | StateProvinceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StateProvinces.
     */
    cursor?: StateProvinceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StateProvinces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StateProvinces.
     */
    skip?: number
    distinct?: StateProvinceScalarFieldEnum | StateProvinceScalarFieldEnum[]
  }

  /**
   * StateProvince create
   */
  export type StateProvinceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateProvince
     */
    select?: StateProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StateProvince
     */
    omit?: StateProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateProvinceInclude<ExtArgs> | null
    /**
     * The data needed to create a StateProvince.
     */
    data: XOR<StateProvinceCreateInput, StateProvinceUncheckedCreateInput>
  }

  /**
   * StateProvince createMany
   */
  export type StateProvinceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StateProvinces.
     */
    data: StateProvinceCreateManyInput | StateProvinceCreateManyInput[]
  }

  /**
   * StateProvince createManyAndReturn
   */
  export type StateProvinceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateProvince
     */
    select?: StateProvinceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StateProvince
     */
    omit?: StateProvinceOmit<ExtArgs> | null
    /**
     * The data used to create many StateProvinces.
     */
    data: StateProvinceCreateManyInput | StateProvinceCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateProvinceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StateProvince update
   */
  export type StateProvinceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateProvince
     */
    select?: StateProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StateProvince
     */
    omit?: StateProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateProvinceInclude<ExtArgs> | null
    /**
     * The data needed to update a StateProvince.
     */
    data: XOR<StateProvinceUpdateInput, StateProvinceUncheckedUpdateInput>
    /**
     * Choose, which StateProvince to update.
     */
    where: StateProvinceWhereUniqueInput
  }

  /**
   * StateProvince updateMany
   */
  export type StateProvinceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StateProvinces.
     */
    data: XOR<StateProvinceUpdateManyMutationInput, StateProvinceUncheckedUpdateManyInput>
    /**
     * Filter which StateProvinces to update
     */
    where?: StateProvinceWhereInput
    /**
     * Limit how many StateProvinces to update.
     */
    limit?: number
  }

  /**
   * StateProvince updateManyAndReturn
   */
  export type StateProvinceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateProvince
     */
    select?: StateProvinceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StateProvince
     */
    omit?: StateProvinceOmit<ExtArgs> | null
    /**
     * The data used to update StateProvinces.
     */
    data: XOR<StateProvinceUpdateManyMutationInput, StateProvinceUncheckedUpdateManyInput>
    /**
     * Filter which StateProvinces to update
     */
    where?: StateProvinceWhereInput
    /**
     * Limit how many StateProvinces to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateProvinceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StateProvince upsert
   */
  export type StateProvinceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateProvince
     */
    select?: StateProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StateProvince
     */
    omit?: StateProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateProvinceInclude<ExtArgs> | null
    /**
     * The filter to search for the StateProvince to update in case it exists.
     */
    where: StateProvinceWhereUniqueInput
    /**
     * In case the StateProvince found by the `where` argument doesn't exist, create a new StateProvince with this data.
     */
    create: XOR<StateProvinceCreateInput, StateProvinceUncheckedCreateInput>
    /**
     * In case the StateProvince was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StateProvinceUpdateInput, StateProvinceUncheckedUpdateInput>
  }

  /**
   * StateProvince delete
   */
  export type StateProvinceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateProvince
     */
    select?: StateProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StateProvince
     */
    omit?: StateProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateProvinceInclude<ExtArgs> | null
    /**
     * Filter which StateProvince to delete.
     */
    where: StateProvinceWhereUniqueInput
  }

  /**
   * StateProvince deleteMany
   */
  export type StateProvinceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StateProvinces to delete
     */
    where?: StateProvinceWhereInput
    /**
     * Limit how many StateProvinces to delete.
     */
    limit?: number
  }

  /**
   * StateProvince.cityTowns
   */
  export type StateProvince$cityTownsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityTown
     */
    select?: CityTownSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CityTown
     */
    omit?: CityTownOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityTownInclude<ExtArgs> | null
    where?: CityTownWhereInput
    orderBy?: CityTownOrderByWithRelationInput | CityTownOrderByWithRelationInput[]
    cursor?: CityTownWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CityTownScalarFieldEnum | CityTownScalarFieldEnum[]
  }

  /**
   * StateProvince.notes
   */
  export type StateProvince$notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    where?: NoteWhereInput
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    cursor?: NoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * StateProvince without action
   */
  export type StateProvinceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateProvince
     */
    select?: StateProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StateProvince
     */
    omit?: StateProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateProvinceInclude<ExtArgs> | null
  }


  /**
   * Model Country
   */

  export type AggregateCountry = {
    _count: CountryCountAggregateOutputType | null
    _avg: CountryAvgAggregateOutputType | null
    _sum: CountrySumAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  export type CountryAvgAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
  }

  export type CountrySumAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
  }

  export type CountryMinAggregateOutputType = {
    id: number | null
    name: string | null
    latitude: number | null
    longitude: number | null
  }

  export type CountryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    latitude: number | null
    longitude: number | null
  }

  export type CountryCountAggregateOutputType = {
    id: number
    name: number
    latitude: number
    longitude: number
    _all: number
  }


  export type CountryAvgAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
  }

  export type CountrySumAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
  }

  export type CountryMinAggregateInputType = {
    id?: true
    name?: true
    latitude?: true
    longitude?: true
  }

  export type CountryMaxAggregateInputType = {
    id?: true
    name?: true
    latitude?: true
    longitude?: true
  }

  export type CountryCountAggregateInputType = {
    id?: true
    name?: true
    latitude?: true
    longitude?: true
    _all?: true
  }

  export type CountryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Country to aggregate.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Countries
    **/
    _count?: true | CountryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CountryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CountrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CountryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CountryMaxAggregateInputType
  }

  export type GetCountryAggregateType<T extends CountryAggregateArgs> = {
        [P in keyof T & keyof AggregateCountry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCountry[P]>
      : GetScalarType<T[P], AggregateCountry[P]>
  }




  export type CountryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CountryWhereInput
    orderBy?: CountryOrderByWithAggregationInput | CountryOrderByWithAggregationInput[]
    by: CountryScalarFieldEnum[] | CountryScalarFieldEnum
    having?: CountryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CountryCountAggregateInputType | true
    _avg?: CountryAvgAggregateInputType
    _sum?: CountrySumAggregateInputType
    _min?: CountryMinAggregateInputType
    _max?: CountryMaxAggregateInputType
  }

  export type CountryGroupByOutputType = {
    id: number
    name: string
    latitude: number
    longitude: number
    _count: CountryCountAggregateOutputType | null
    _avg: CountryAvgAggregateOutputType | null
    _sum: CountrySumAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  type GetCountryGroupByPayload<T extends CountryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CountryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CountryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CountryGroupByOutputType[P]>
            : GetScalarType<T[P], CountryGroupByOutputType[P]>
        }
      >
    >


  export type CountrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    latitude?: boolean
    longitude?: boolean
    cityTowns?: boolean | Country$cityTownsArgs<ExtArgs>
    stateProvinces?: boolean | Country$stateProvincesArgs<ExtArgs>
    notes?: boolean | Country$notesArgs<ExtArgs>
    _count?: boolean | CountryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["country"]>

  export type CountrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    latitude?: boolean
    longitude?: boolean
  }, ExtArgs["result"]["country"]>

  export type CountrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    latitude?: boolean
    longitude?: boolean
  }, ExtArgs["result"]["country"]>

  export type CountrySelectScalar = {
    id?: boolean
    name?: boolean
    latitude?: boolean
    longitude?: boolean
  }

  export type CountryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "latitude" | "longitude", ExtArgs["result"]["country"]>
  export type CountryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cityTowns?: boolean | Country$cityTownsArgs<ExtArgs>
    stateProvinces?: boolean | Country$stateProvincesArgs<ExtArgs>
    notes?: boolean | Country$notesArgs<ExtArgs>
    _count?: boolean | CountryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CountryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CountryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CountryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Country"
    objects: {
      cityTowns: Prisma.$CityTownPayload<ExtArgs>[]
      stateProvinces: Prisma.$StateProvincePayload<ExtArgs>[]
      notes: Prisma.$NotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      latitude: number
      longitude: number
    }, ExtArgs["result"]["country"]>
    composites: {}
  }

  type CountryGetPayload<S extends boolean | null | undefined | CountryDefaultArgs> = $Result.GetResult<Prisma.$CountryPayload, S>

  type CountryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CountryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CountryCountAggregateInputType | true
    }

  export interface CountryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Country'], meta: { name: 'Country' } }
    /**
     * Find zero or one Country that matches the filter.
     * @param {CountryFindUniqueArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CountryFindUniqueArgs>(args: SelectSubset<T, CountryFindUniqueArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Country that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CountryFindUniqueOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CountryFindUniqueOrThrowArgs>(args: SelectSubset<T, CountryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Country that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindFirstArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CountryFindFirstArgs>(args?: SelectSubset<T, CountryFindFirstArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Country that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindFirstOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CountryFindFirstOrThrowArgs>(args?: SelectSubset<T, CountryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Countries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Countries
     * const countries = await prisma.country.findMany()
     * 
     * // Get first 10 Countries
     * const countries = await prisma.country.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const countryWithIdOnly = await prisma.country.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CountryFindManyArgs>(args?: SelectSubset<T, CountryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Country.
     * @param {CountryCreateArgs} args - Arguments to create a Country.
     * @example
     * // Create one Country
     * const Country = await prisma.country.create({
     *   data: {
     *     // ... data to create a Country
     *   }
     * })
     * 
     */
    create<T extends CountryCreateArgs>(args: SelectSubset<T, CountryCreateArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Countries.
     * @param {CountryCreateManyArgs} args - Arguments to create many Countries.
     * @example
     * // Create many Countries
     * const country = await prisma.country.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CountryCreateManyArgs>(args?: SelectSubset<T, CountryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Countries and returns the data saved in the database.
     * @param {CountryCreateManyAndReturnArgs} args - Arguments to create many Countries.
     * @example
     * // Create many Countries
     * const country = await prisma.country.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Countries and only return the `id`
     * const countryWithIdOnly = await prisma.country.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CountryCreateManyAndReturnArgs>(args?: SelectSubset<T, CountryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Country.
     * @param {CountryDeleteArgs} args - Arguments to delete one Country.
     * @example
     * // Delete one Country
     * const Country = await prisma.country.delete({
     *   where: {
     *     // ... filter to delete one Country
     *   }
     * })
     * 
     */
    delete<T extends CountryDeleteArgs>(args: SelectSubset<T, CountryDeleteArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Country.
     * @param {CountryUpdateArgs} args - Arguments to update one Country.
     * @example
     * // Update one Country
     * const country = await prisma.country.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CountryUpdateArgs>(args: SelectSubset<T, CountryUpdateArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Countries.
     * @param {CountryDeleteManyArgs} args - Arguments to filter Countries to delete.
     * @example
     * // Delete a few Countries
     * const { count } = await prisma.country.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CountryDeleteManyArgs>(args?: SelectSubset<T, CountryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Countries
     * const country = await prisma.country.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CountryUpdateManyArgs>(args: SelectSubset<T, CountryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Countries and returns the data updated in the database.
     * @param {CountryUpdateManyAndReturnArgs} args - Arguments to update many Countries.
     * @example
     * // Update many Countries
     * const country = await prisma.country.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Countries and only return the `id`
     * const countryWithIdOnly = await prisma.country.updateManyAndReturn({
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
    updateManyAndReturn<T extends CountryUpdateManyAndReturnArgs>(args: SelectSubset<T, CountryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Country.
     * @param {CountryUpsertArgs} args - Arguments to update or create a Country.
     * @example
     * // Update or create a Country
     * const country = await prisma.country.upsert({
     *   create: {
     *     // ... data to create a Country
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Country we want to update
     *   }
     * })
     */
    upsert<T extends CountryUpsertArgs>(args: SelectSubset<T, CountryUpsertArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryCountArgs} args - Arguments to filter Countries to count.
     * @example
     * // Count the number of Countries
     * const count = await prisma.country.count({
     *   where: {
     *     // ... the filter for the Countries we want to count
     *   }
     * })
    **/
    count<T extends CountryCountArgs>(
      args?: Subset<T, CountryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CountryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CountryAggregateArgs>(args: Subset<T, CountryAggregateArgs>): Prisma.PrismaPromise<GetCountryAggregateType<T>>

    /**
     * Group by Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryGroupByArgs} args - Group by arguments.
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
      T extends CountryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CountryGroupByArgs['orderBy'] }
        : { orderBy?: CountryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CountryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCountryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Country model
   */
  readonly fields: CountryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Country.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CountryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cityTowns<T extends Country$cityTownsArgs<ExtArgs> = {}>(args?: Subset<T, Country$cityTownsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CityTownPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stateProvinces<T extends Country$stateProvincesArgs<ExtArgs> = {}>(args?: Subset<T, Country$stateProvincesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StateProvincePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notes<T extends Country$notesArgs<ExtArgs> = {}>(args?: Subset<T, Country$notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Country model
   */
  interface CountryFieldRefs {
    readonly id: FieldRef<"Country", 'Int'>
    readonly name: FieldRef<"Country", 'String'>
    readonly latitude: FieldRef<"Country", 'Float'>
    readonly longitude: FieldRef<"Country", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Country findUnique
   */
  export type CountryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country findUniqueOrThrow
   */
  export type CountryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country findFirst
   */
  export type CountryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country findFirstOrThrow
   */
  export type CountryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country findMany
   */
  export type CountryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Countries to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country create
   */
  export type CountryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The data needed to create a Country.
     */
    data: XOR<CountryCreateInput, CountryUncheckedCreateInput>
  }

  /**
   * Country createMany
   */
  export type CountryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Countries.
     */
    data: CountryCreateManyInput | CountryCreateManyInput[]
  }

  /**
   * Country createManyAndReturn
   */
  export type CountryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * The data used to create many Countries.
     */
    data: CountryCreateManyInput | CountryCreateManyInput[]
  }

  /**
   * Country update
   */
  export type CountryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The data needed to update a Country.
     */
    data: XOR<CountryUpdateInput, CountryUncheckedUpdateInput>
    /**
     * Choose, which Country to update.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country updateMany
   */
  export type CountryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Countries.
     */
    data: XOR<CountryUpdateManyMutationInput, CountryUncheckedUpdateManyInput>
    /**
     * Filter which Countries to update
     */
    where?: CountryWhereInput
    /**
     * Limit how many Countries to update.
     */
    limit?: number
  }

  /**
   * Country updateManyAndReturn
   */
  export type CountryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * The data used to update Countries.
     */
    data: XOR<CountryUpdateManyMutationInput, CountryUncheckedUpdateManyInput>
    /**
     * Filter which Countries to update
     */
    where?: CountryWhereInput
    /**
     * Limit how many Countries to update.
     */
    limit?: number
  }

  /**
   * Country upsert
   */
  export type CountryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The filter to search for the Country to update in case it exists.
     */
    where: CountryWhereUniqueInput
    /**
     * In case the Country found by the `where` argument doesn't exist, create a new Country with this data.
     */
    create: XOR<CountryCreateInput, CountryUncheckedCreateInput>
    /**
     * In case the Country was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CountryUpdateInput, CountryUncheckedUpdateInput>
  }

  /**
   * Country delete
   */
  export type CountryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter which Country to delete.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country deleteMany
   */
  export type CountryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Countries to delete
     */
    where?: CountryWhereInput
    /**
     * Limit how many Countries to delete.
     */
    limit?: number
  }

  /**
   * Country.cityTowns
   */
  export type Country$cityTownsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityTown
     */
    select?: CityTownSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CityTown
     */
    omit?: CityTownOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityTownInclude<ExtArgs> | null
    where?: CityTownWhereInput
    orderBy?: CityTownOrderByWithRelationInput | CityTownOrderByWithRelationInput[]
    cursor?: CityTownWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CityTownScalarFieldEnum | CityTownScalarFieldEnum[]
  }

  /**
   * Country.stateProvinces
   */
  export type Country$stateProvincesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateProvince
     */
    select?: StateProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StateProvince
     */
    omit?: StateProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateProvinceInclude<ExtArgs> | null
    where?: StateProvinceWhereInput
    orderBy?: StateProvinceOrderByWithRelationInput | StateProvinceOrderByWithRelationInput[]
    cursor?: StateProvinceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StateProvinceScalarFieldEnum | StateProvinceScalarFieldEnum[]
  }

  /**
   * Country.notes
   */
  export type Country$notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    where?: NoteWhereInput
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    cursor?: NoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Country without action
   */
  export type CountryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const NoteScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    text: 'text',
    cityTown: 'cityTown',
    stateProvince: 'stateProvince',
    country: 'country',
    latitude: 'latitude',
    longitude: 'longitude',
    cityTownId: 'cityTownId',
    stateProvinceId: 'stateProvinceId',
    countryId: 'countryId'
  };

  export type NoteScalarFieldEnum = (typeof NoteScalarFieldEnum)[keyof typeof NoteScalarFieldEnum]


  export const CityTownScalarFieldEnum: {
    id: 'id',
    name: 'name',
    stateProvinceId: 'stateProvinceId',
    countryId: 'countryId',
    latitude: 'latitude',
    longitude: 'longitude'
  };

  export type CityTownScalarFieldEnum = (typeof CityTownScalarFieldEnum)[keyof typeof CityTownScalarFieldEnum]


  export const StateProvinceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    countryId: 'countryId',
    latitude: 'latitude',
    longitude: 'longitude'
  };

  export type StateProvinceScalarFieldEnum = (typeof StateProvinceScalarFieldEnum)[keyof typeof StateProvinceScalarFieldEnum]


  export const CountryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    latitude: 'latitude',
    longitude: 'longitude'
  };

  export type CountryScalarFieldEnum = (typeof CountryScalarFieldEnum)[keyof typeof CountryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type NoteWhereInput = {
    AND?: NoteWhereInput | NoteWhereInput[]
    OR?: NoteWhereInput[]
    NOT?: NoteWhereInput | NoteWhereInput[]
    id?: IntFilter<"Note"> | number
    createdAt?: DateTimeFilter<"Note"> | Date | string
    updatedAt?: DateTimeFilter<"Note"> | Date | string
    text?: StringFilter<"Note"> | string
    cityTown?: StringFilter<"Note"> | string
    stateProvince?: StringFilter<"Note"> | string
    country?: StringFilter<"Note"> | string
    latitude?: FloatFilter<"Note"> | number
    longitude?: FloatFilter<"Note"> | number
    cityTownId?: IntFilter<"Note"> | number
    stateProvinceId?: IntFilter<"Note"> | number
    countryId?: IntFilter<"Note"> | number
    generalCityTown?: XOR<CityTownScalarRelationFilter, CityTownWhereInput>
    generalStateProvince?: XOR<StateProvinceScalarRelationFilter, StateProvinceWhereInput>
    generalCountry?: XOR<CountryScalarRelationFilter, CountryWhereInput>
  }

  export type NoteOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    text?: SortOrder
    cityTown?: SortOrder
    stateProvince?: SortOrder
    country?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    cityTownId?: SortOrder
    stateProvinceId?: SortOrder
    countryId?: SortOrder
    generalCityTown?: CityTownOrderByWithRelationInput
    generalStateProvince?: StateProvinceOrderByWithRelationInput
    generalCountry?: CountryOrderByWithRelationInput
  }

  export type NoteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NoteWhereInput | NoteWhereInput[]
    OR?: NoteWhereInput[]
    NOT?: NoteWhereInput | NoteWhereInput[]
    createdAt?: DateTimeFilter<"Note"> | Date | string
    updatedAt?: DateTimeFilter<"Note"> | Date | string
    text?: StringFilter<"Note"> | string
    cityTown?: StringFilter<"Note"> | string
    stateProvince?: StringFilter<"Note"> | string
    country?: StringFilter<"Note"> | string
    latitude?: FloatFilter<"Note"> | number
    longitude?: FloatFilter<"Note"> | number
    cityTownId?: IntFilter<"Note"> | number
    stateProvinceId?: IntFilter<"Note"> | number
    countryId?: IntFilter<"Note"> | number
    generalCityTown?: XOR<CityTownScalarRelationFilter, CityTownWhereInput>
    generalStateProvince?: XOR<StateProvinceScalarRelationFilter, StateProvinceWhereInput>
    generalCountry?: XOR<CountryScalarRelationFilter, CountryWhereInput>
  }, "id">

  export type NoteOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    text?: SortOrder
    cityTown?: SortOrder
    stateProvince?: SortOrder
    country?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    cityTownId?: SortOrder
    stateProvinceId?: SortOrder
    countryId?: SortOrder
    _count?: NoteCountOrderByAggregateInput
    _avg?: NoteAvgOrderByAggregateInput
    _max?: NoteMaxOrderByAggregateInput
    _min?: NoteMinOrderByAggregateInput
    _sum?: NoteSumOrderByAggregateInput
  }

  export type NoteScalarWhereWithAggregatesInput = {
    AND?: NoteScalarWhereWithAggregatesInput | NoteScalarWhereWithAggregatesInput[]
    OR?: NoteScalarWhereWithAggregatesInput[]
    NOT?: NoteScalarWhereWithAggregatesInput | NoteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Note"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Note"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Note"> | Date | string
    text?: StringWithAggregatesFilter<"Note"> | string
    cityTown?: StringWithAggregatesFilter<"Note"> | string
    stateProvince?: StringWithAggregatesFilter<"Note"> | string
    country?: StringWithAggregatesFilter<"Note"> | string
    latitude?: FloatWithAggregatesFilter<"Note"> | number
    longitude?: FloatWithAggregatesFilter<"Note"> | number
    cityTownId?: IntWithAggregatesFilter<"Note"> | number
    stateProvinceId?: IntWithAggregatesFilter<"Note"> | number
    countryId?: IntWithAggregatesFilter<"Note"> | number
  }

  export type CityTownWhereInput = {
    AND?: CityTownWhereInput | CityTownWhereInput[]
    OR?: CityTownWhereInput[]
    NOT?: CityTownWhereInput | CityTownWhereInput[]
    id?: IntFilter<"CityTown"> | number
    name?: StringFilter<"CityTown"> | string
    stateProvinceId?: IntFilter<"CityTown"> | number
    countryId?: IntFilter<"CityTown"> | number
    latitude?: FloatFilter<"CityTown"> | number
    longitude?: FloatFilter<"CityTown"> | number
    stateProvince?: XOR<StateProvinceScalarRelationFilter, StateProvinceWhereInput>
    country?: XOR<CountryScalarRelationFilter, CountryWhereInput>
    notes?: NoteListRelationFilter
  }

  export type CityTownOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    stateProvinceId?: SortOrder
    countryId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    stateProvince?: StateProvinceOrderByWithRelationInput
    country?: CountryOrderByWithRelationInput
    notes?: NoteOrderByRelationAggregateInput
  }

  export type CityTownWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name_stateProvinceId_countryId?: CityTownNameStateProvinceIdCountryIdCompoundUniqueInput
    AND?: CityTownWhereInput | CityTownWhereInput[]
    OR?: CityTownWhereInput[]
    NOT?: CityTownWhereInput | CityTownWhereInput[]
    name?: StringFilter<"CityTown"> | string
    stateProvinceId?: IntFilter<"CityTown"> | number
    countryId?: IntFilter<"CityTown"> | number
    latitude?: FloatFilter<"CityTown"> | number
    longitude?: FloatFilter<"CityTown"> | number
    stateProvince?: XOR<StateProvinceScalarRelationFilter, StateProvinceWhereInput>
    country?: XOR<CountryScalarRelationFilter, CountryWhereInput>
    notes?: NoteListRelationFilter
  }, "id" | "name_stateProvinceId_countryId">

  export type CityTownOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    stateProvinceId?: SortOrder
    countryId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    _count?: CityTownCountOrderByAggregateInput
    _avg?: CityTownAvgOrderByAggregateInput
    _max?: CityTownMaxOrderByAggregateInput
    _min?: CityTownMinOrderByAggregateInput
    _sum?: CityTownSumOrderByAggregateInput
  }

  export type CityTownScalarWhereWithAggregatesInput = {
    AND?: CityTownScalarWhereWithAggregatesInput | CityTownScalarWhereWithAggregatesInput[]
    OR?: CityTownScalarWhereWithAggregatesInput[]
    NOT?: CityTownScalarWhereWithAggregatesInput | CityTownScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CityTown"> | number
    name?: StringWithAggregatesFilter<"CityTown"> | string
    stateProvinceId?: IntWithAggregatesFilter<"CityTown"> | number
    countryId?: IntWithAggregatesFilter<"CityTown"> | number
    latitude?: FloatWithAggregatesFilter<"CityTown"> | number
    longitude?: FloatWithAggregatesFilter<"CityTown"> | number
  }

  export type StateProvinceWhereInput = {
    AND?: StateProvinceWhereInput | StateProvinceWhereInput[]
    OR?: StateProvinceWhereInput[]
    NOT?: StateProvinceWhereInput | StateProvinceWhereInput[]
    id?: IntFilter<"StateProvince"> | number
    name?: StringFilter<"StateProvince"> | string
    countryId?: IntFilter<"StateProvince"> | number
    latitude?: FloatFilter<"StateProvince"> | number
    longitude?: FloatFilter<"StateProvince"> | number
    country?: XOR<CountryScalarRelationFilter, CountryWhereInput>
    cityTowns?: CityTownListRelationFilter
    notes?: NoteListRelationFilter
  }

  export type StateProvinceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    countryId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    country?: CountryOrderByWithRelationInput
    cityTowns?: CityTownOrderByRelationAggregateInput
    notes?: NoteOrderByRelationAggregateInput
  }

  export type StateProvinceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name_countryId?: StateProvinceNameCountryIdCompoundUniqueInput
    AND?: StateProvinceWhereInput | StateProvinceWhereInput[]
    OR?: StateProvinceWhereInput[]
    NOT?: StateProvinceWhereInput | StateProvinceWhereInput[]
    name?: StringFilter<"StateProvince"> | string
    countryId?: IntFilter<"StateProvince"> | number
    latitude?: FloatFilter<"StateProvince"> | number
    longitude?: FloatFilter<"StateProvince"> | number
    country?: XOR<CountryScalarRelationFilter, CountryWhereInput>
    cityTowns?: CityTownListRelationFilter
    notes?: NoteListRelationFilter
  }, "id" | "name_countryId">

  export type StateProvinceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    countryId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    _count?: StateProvinceCountOrderByAggregateInput
    _avg?: StateProvinceAvgOrderByAggregateInput
    _max?: StateProvinceMaxOrderByAggregateInput
    _min?: StateProvinceMinOrderByAggregateInput
    _sum?: StateProvinceSumOrderByAggregateInput
  }

  export type StateProvinceScalarWhereWithAggregatesInput = {
    AND?: StateProvinceScalarWhereWithAggregatesInput | StateProvinceScalarWhereWithAggregatesInput[]
    OR?: StateProvinceScalarWhereWithAggregatesInput[]
    NOT?: StateProvinceScalarWhereWithAggregatesInput | StateProvinceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StateProvince"> | number
    name?: StringWithAggregatesFilter<"StateProvince"> | string
    countryId?: IntWithAggregatesFilter<"StateProvince"> | number
    latitude?: FloatWithAggregatesFilter<"StateProvince"> | number
    longitude?: FloatWithAggregatesFilter<"StateProvince"> | number
  }

  export type CountryWhereInput = {
    AND?: CountryWhereInput | CountryWhereInput[]
    OR?: CountryWhereInput[]
    NOT?: CountryWhereInput | CountryWhereInput[]
    id?: IntFilter<"Country"> | number
    name?: StringFilter<"Country"> | string
    latitude?: FloatFilter<"Country"> | number
    longitude?: FloatFilter<"Country"> | number
    cityTowns?: CityTownListRelationFilter
    stateProvinces?: StateProvinceListRelationFilter
    notes?: NoteListRelationFilter
  }

  export type CountryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    cityTowns?: CityTownOrderByRelationAggregateInput
    stateProvinces?: StateProvinceOrderByRelationAggregateInput
    notes?: NoteOrderByRelationAggregateInput
  }

  export type CountryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: CountryWhereInput | CountryWhereInput[]
    OR?: CountryWhereInput[]
    NOT?: CountryWhereInput | CountryWhereInput[]
    latitude?: FloatFilter<"Country"> | number
    longitude?: FloatFilter<"Country"> | number
    cityTowns?: CityTownListRelationFilter
    stateProvinces?: StateProvinceListRelationFilter
    notes?: NoteListRelationFilter
  }, "id" | "name">

  export type CountryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    _count?: CountryCountOrderByAggregateInput
    _avg?: CountryAvgOrderByAggregateInput
    _max?: CountryMaxOrderByAggregateInput
    _min?: CountryMinOrderByAggregateInput
    _sum?: CountrySumOrderByAggregateInput
  }

  export type CountryScalarWhereWithAggregatesInput = {
    AND?: CountryScalarWhereWithAggregatesInput | CountryScalarWhereWithAggregatesInput[]
    OR?: CountryScalarWhereWithAggregatesInput[]
    NOT?: CountryScalarWhereWithAggregatesInput | CountryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Country"> | number
    name?: StringWithAggregatesFilter<"Country"> | string
    latitude?: FloatWithAggregatesFilter<"Country"> | number
    longitude?: FloatWithAggregatesFilter<"Country"> | number
  }

  export type NoteCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    text: string
    cityTown: string
    stateProvince: string
    country: string
    latitude: number
    longitude: number
    generalCityTown: CityTownCreateNestedOneWithoutNotesInput
    generalStateProvince: StateProvinceCreateNestedOneWithoutNotesInput
    generalCountry: CountryCreateNestedOneWithoutNotesInput
  }

  export type NoteUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    text: string
    cityTown: string
    stateProvince: string
    country: string
    latitude: number
    longitude: number
    cityTownId: number
    stateProvinceId: number
    countryId: number
  }

  export type NoteUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    cityTown?: StringFieldUpdateOperationsInput | string
    stateProvince?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    generalCityTown?: CityTownUpdateOneRequiredWithoutNotesNestedInput
    generalStateProvince?: StateProvinceUpdateOneRequiredWithoutNotesNestedInput
    generalCountry?: CountryUpdateOneRequiredWithoutNotesNestedInput
  }

  export type NoteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    cityTown?: StringFieldUpdateOperationsInput | string
    stateProvince?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    cityTownId?: IntFieldUpdateOperationsInput | number
    stateProvinceId?: IntFieldUpdateOperationsInput | number
    countryId?: IntFieldUpdateOperationsInput | number
  }

  export type NoteCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    text: string
    cityTown: string
    stateProvince: string
    country: string
    latitude: number
    longitude: number
    cityTownId: number
    stateProvinceId: number
    countryId: number
  }

  export type NoteUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    cityTown?: StringFieldUpdateOperationsInput | string
    stateProvince?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
  }

  export type NoteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    cityTown?: StringFieldUpdateOperationsInput | string
    stateProvince?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    cityTownId?: IntFieldUpdateOperationsInput | number
    stateProvinceId?: IntFieldUpdateOperationsInput | number
    countryId?: IntFieldUpdateOperationsInput | number
  }

  export type CityTownCreateInput = {
    name: string
    latitude: number
    longitude: number
    stateProvince: StateProvinceCreateNestedOneWithoutCityTownsInput
    country: CountryCreateNestedOneWithoutCityTownsInput
    notes?: NoteCreateNestedManyWithoutGeneralCityTownInput
  }

  export type CityTownUncheckedCreateInput = {
    id?: number
    name: string
    stateProvinceId: number
    countryId: number
    latitude: number
    longitude: number
    notes?: NoteUncheckedCreateNestedManyWithoutGeneralCityTownInput
  }

  export type CityTownUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    stateProvince?: StateProvinceUpdateOneRequiredWithoutCityTownsNestedInput
    country?: CountryUpdateOneRequiredWithoutCityTownsNestedInput
    notes?: NoteUpdateManyWithoutGeneralCityTownNestedInput
  }

  export type CityTownUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    stateProvinceId?: IntFieldUpdateOperationsInput | number
    countryId?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    notes?: NoteUncheckedUpdateManyWithoutGeneralCityTownNestedInput
  }

  export type CityTownCreateManyInput = {
    id?: number
    name: string
    stateProvinceId: number
    countryId: number
    latitude: number
    longitude: number
  }

  export type CityTownUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
  }

  export type CityTownUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    stateProvinceId?: IntFieldUpdateOperationsInput | number
    countryId?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
  }

  export type StateProvinceCreateInput = {
    name: string
    latitude: number
    longitude: number
    country: CountryCreateNestedOneWithoutStateProvincesInput
    cityTowns?: CityTownCreateNestedManyWithoutStateProvinceInput
    notes?: NoteCreateNestedManyWithoutGeneralStateProvinceInput
  }

  export type StateProvinceUncheckedCreateInput = {
    id?: number
    name: string
    countryId: number
    latitude: number
    longitude: number
    cityTowns?: CityTownUncheckedCreateNestedManyWithoutStateProvinceInput
    notes?: NoteUncheckedCreateNestedManyWithoutGeneralStateProvinceInput
  }

  export type StateProvinceUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    country?: CountryUpdateOneRequiredWithoutStateProvincesNestedInput
    cityTowns?: CityTownUpdateManyWithoutStateProvinceNestedInput
    notes?: NoteUpdateManyWithoutGeneralStateProvinceNestedInput
  }

  export type StateProvinceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    countryId?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    cityTowns?: CityTownUncheckedUpdateManyWithoutStateProvinceNestedInput
    notes?: NoteUncheckedUpdateManyWithoutGeneralStateProvinceNestedInput
  }

  export type StateProvinceCreateManyInput = {
    id?: number
    name: string
    countryId: number
    latitude: number
    longitude: number
  }

  export type StateProvinceUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
  }

  export type StateProvinceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    countryId?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
  }

  export type CountryCreateInput = {
    name: string
    latitude: number
    longitude: number
    cityTowns?: CityTownCreateNestedManyWithoutCountryInput
    stateProvinces?: StateProvinceCreateNestedManyWithoutCountryInput
    notes?: NoteCreateNestedManyWithoutGeneralCountryInput
  }

  export type CountryUncheckedCreateInput = {
    id?: number
    name: string
    latitude: number
    longitude: number
    cityTowns?: CityTownUncheckedCreateNestedManyWithoutCountryInput
    stateProvinces?: StateProvinceUncheckedCreateNestedManyWithoutCountryInput
    notes?: NoteUncheckedCreateNestedManyWithoutGeneralCountryInput
  }

  export type CountryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    cityTowns?: CityTownUpdateManyWithoutCountryNestedInput
    stateProvinces?: StateProvinceUpdateManyWithoutCountryNestedInput
    notes?: NoteUpdateManyWithoutGeneralCountryNestedInput
  }

  export type CountryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    cityTowns?: CityTownUncheckedUpdateManyWithoutCountryNestedInput
    stateProvinces?: StateProvinceUncheckedUpdateManyWithoutCountryNestedInput
    notes?: NoteUncheckedUpdateManyWithoutGeneralCountryNestedInput
  }

  export type CountryCreateManyInput = {
    id?: number
    name: string
    latitude: number
    longitude: number
  }

  export type CountryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
  }

  export type CountryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type CityTownScalarRelationFilter = {
    is?: CityTownWhereInput
    isNot?: CityTownWhereInput
  }

  export type StateProvinceScalarRelationFilter = {
    is?: StateProvinceWhereInput
    isNot?: StateProvinceWhereInput
  }

  export type CountryScalarRelationFilter = {
    is?: CountryWhereInput
    isNot?: CountryWhereInput
  }

  export type NoteCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    text?: SortOrder
    cityTown?: SortOrder
    stateProvince?: SortOrder
    country?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    cityTownId?: SortOrder
    stateProvinceId?: SortOrder
    countryId?: SortOrder
  }

  export type NoteAvgOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    cityTownId?: SortOrder
    stateProvinceId?: SortOrder
    countryId?: SortOrder
  }

  export type NoteMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    text?: SortOrder
    cityTown?: SortOrder
    stateProvince?: SortOrder
    country?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    cityTownId?: SortOrder
    stateProvinceId?: SortOrder
    countryId?: SortOrder
  }

  export type NoteMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    text?: SortOrder
    cityTown?: SortOrder
    stateProvince?: SortOrder
    country?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    cityTownId?: SortOrder
    stateProvinceId?: SortOrder
    countryId?: SortOrder
  }

  export type NoteSumOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    cityTownId?: SortOrder
    stateProvinceId?: SortOrder
    countryId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NoteListRelationFilter = {
    every?: NoteWhereInput
    some?: NoteWhereInput
    none?: NoteWhereInput
  }

  export type NoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CityTownNameStateProvinceIdCountryIdCompoundUniqueInput = {
    name: string
    stateProvinceId: number
    countryId: number
  }

  export type CityTownCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    stateProvinceId?: SortOrder
    countryId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type CityTownAvgOrderByAggregateInput = {
    id?: SortOrder
    stateProvinceId?: SortOrder
    countryId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type CityTownMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    stateProvinceId?: SortOrder
    countryId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type CityTownMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    stateProvinceId?: SortOrder
    countryId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type CityTownSumOrderByAggregateInput = {
    id?: SortOrder
    stateProvinceId?: SortOrder
    countryId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type CityTownListRelationFilter = {
    every?: CityTownWhereInput
    some?: CityTownWhereInput
    none?: CityTownWhereInput
  }

  export type CityTownOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StateProvinceNameCountryIdCompoundUniqueInput = {
    name: string
    countryId: number
  }

  export type StateProvinceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    countryId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type StateProvinceAvgOrderByAggregateInput = {
    id?: SortOrder
    countryId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type StateProvinceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    countryId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type StateProvinceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    countryId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type StateProvinceSumOrderByAggregateInput = {
    id?: SortOrder
    countryId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type StateProvinceListRelationFilter = {
    every?: StateProvinceWhereInput
    some?: StateProvinceWhereInput
    none?: StateProvinceWhereInput
  }

  export type StateProvinceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CountryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type CountryAvgOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type CountryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type CountryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type CountrySumOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type CityTownCreateNestedOneWithoutNotesInput = {
    create?: XOR<CityTownCreateWithoutNotesInput, CityTownUncheckedCreateWithoutNotesInput>
    connectOrCreate?: CityTownCreateOrConnectWithoutNotesInput
    connect?: CityTownWhereUniqueInput
  }

  export type StateProvinceCreateNestedOneWithoutNotesInput = {
    create?: XOR<StateProvinceCreateWithoutNotesInput, StateProvinceUncheckedCreateWithoutNotesInput>
    connectOrCreate?: StateProvinceCreateOrConnectWithoutNotesInput
    connect?: StateProvinceWhereUniqueInput
  }

  export type CountryCreateNestedOneWithoutNotesInput = {
    create?: XOR<CountryCreateWithoutNotesInput, CountryUncheckedCreateWithoutNotesInput>
    connectOrCreate?: CountryCreateOrConnectWithoutNotesInput
    connect?: CountryWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CityTownUpdateOneRequiredWithoutNotesNestedInput = {
    create?: XOR<CityTownCreateWithoutNotesInput, CityTownUncheckedCreateWithoutNotesInput>
    connectOrCreate?: CityTownCreateOrConnectWithoutNotesInput
    upsert?: CityTownUpsertWithoutNotesInput
    connect?: CityTownWhereUniqueInput
    update?: XOR<XOR<CityTownUpdateToOneWithWhereWithoutNotesInput, CityTownUpdateWithoutNotesInput>, CityTownUncheckedUpdateWithoutNotesInput>
  }

  export type StateProvinceUpdateOneRequiredWithoutNotesNestedInput = {
    create?: XOR<StateProvinceCreateWithoutNotesInput, StateProvinceUncheckedCreateWithoutNotesInput>
    connectOrCreate?: StateProvinceCreateOrConnectWithoutNotesInput
    upsert?: StateProvinceUpsertWithoutNotesInput
    connect?: StateProvinceWhereUniqueInput
    update?: XOR<XOR<StateProvinceUpdateToOneWithWhereWithoutNotesInput, StateProvinceUpdateWithoutNotesInput>, StateProvinceUncheckedUpdateWithoutNotesInput>
  }

  export type CountryUpdateOneRequiredWithoutNotesNestedInput = {
    create?: XOR<CountryCreateWithoutNotesInput, CountryUncheckedCreateWithoutNotesInput>
    connectOrCreate?: CountryCreateOrConnectWithoutNotesInput
    upsert?: CountryUpsertWithoutNotesInput
    connect?: CountryWhereUniqueInput
    update?: XOR<XOR<CountryUpdateToOneWithWhereWithoutNotesInput, CountryUpdateWithoutNotesInput>, CountryUncheckedUpdateWithoutNotesInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StateProvinceCreateNestedOneWithoutCityTownsInput = {
    create?: XOR<StateProvinceCreateWithoutCityTownsInput, StateProvinceUncheckedCreateWithoutCityTownsInput>
    connectOrCreate?: StateProvinceCreateOrConnectWithoutCityTownsInput
    connect?: StateProvinceWhereUniqueInput
  }

  export type CountryCreateNestedOneWithoutCityTownsInput = {
    create?: XOR<CountryCreateWithoutCityTownsInput, CountryUncheckedCreateWithoutCityTownsInput>
    connectOrCreate?: CountryCreateOrConnectWithoutCityTownsInput
    connect?: CountryWhereUniqueInput
  }

  export type NoteCreateNestedManyWithoutGeneralCityTownInput = {
    create?: XOR<NoteCreateWithoutGeneralCityTownInput, NoteUncheckedCreateWithoutGeneralCityTownInput> | NoteCreateWithoutGeneralCityTownInput[] | NoteUncheckedCreateWithoutGeneralCityTownInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutGeneralCityTownInput | NoteCreateOrConnectWithoutGeneralCityTownInput[]
    createMany?: NoteCreateManyGeneralCityTownInputEnvelope
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
  }

  export type NoteUncheckedCreateNestedManyWithoutGeneralCityTownInput = {
    create?: XOR<NoteCreateWithoutGeneralCityTownInput, NoteUncheckedCreateWithoutGeneralCityTownInput> | NoteCreateWithoutGeneralCityTownInput[] | NoteUncheckedCreateWithoutGeneralCityTownInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutGeneralCityTownInput | NoteCreateOrConnectWithoutGeneralCityTownInput[]
    createMany?: NoteCreateManyGeneralCityTownInputEnvelope
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
  }

  export type StateProvinceUpdateOneRequiredWithoutCityTownsNestedInput = {
    create?: XOR<StateProvinceCreateWithoutCityTownsInput, StateProvinceUncheckedCreateWithoutCityTownsInput>
    connectOrCreate?: StateProvinceCreateOrConnectWithoutCityTownsInput
    upsert?: StateProvinceUpsertWithoutCityTownsInput
    connect?: StateProvinceWhereUniqueInput
    update?: XOR<XOR<StateProvinceUpdateToOneWithWhereWithoutCityTownsInput, StateProvinceUpdateWithoutCityTownsInput>, StateProvinceUncheckedUpdateWithoutCityTownsInput>
  }

  export type CountryUpdateOneRequiredWithoutCityTownsNestedInput = {
    create?: XOR<CountryCreateWithoutCityTownsInput, CountryUncheckedCreateWithoutCityTownsInput>
    connectOrCreate?: CountryCreateOrConnectWithoutCityTownsInput
    upsert?: CountryUpsertWithoutCityTownsInput
    connect?: CountryWhereUniqueInput
    update?: XOR<XOR<CountryUpdateToOneWithWhereWithoutCityTownsInput, CountryUpdateWithoutCityTownsInput>, CountryUncheckedUpdateWithoutCityTownsInput>
  }

  export type NoteUpdateManyWithoutGeneralCityTownNestedInput = {
    create?: XOR<NoteCreateWithoutGeneralCityTownInput, NoteUncheckedCreateWithoutGeneralCityTownInput> | NoteCreateWithoutGeneralCityTownInput[] | NoteUncheckedCreateWithoutGeneralCityTownInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutGeneralCityTownInput | NoteCreateOrConnectWithoutGeneralCityTownInput[]
    upsert?: NoteUpsertWithWhereUniqueWithoutGeneralCityTownInput | NoteUpsertWithWhereUniqueWithoutGeneralCityTownInput[]
    createMany?: NoteCreateManyGeneralCityTownInputEnvelope
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    update?: NoteUpdateWithWhereUniqueWithoutGeneralCityTownInput | NoteUpdateWithWhereUniqueWithoutGeneralCityTownInput[]
    updateMany?: NoteUpdateManyWithWhereWithoutGeneralCityTownInput | NoteUpdateManyWithWhereWithoutGeneralCityTownInput[]
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[]
  }

  export type NoteUncheckedUpdateManyWithoutGeneralCityTownNestedInput = {
    create?: XOR<NoteCreateWithoutGeneralCityTownInput, NoteUncheckedCreateWithoutGeneralCityTownInput> | NoteCreateWithoutGeneralCityTownInput[] | NoteUncheckedCreateWithoutGeneralCityTownInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutGeneralCityTownInput | NoteCreateOrConnectWithoutGeneralCityTownInput[]
    upsert?: NoteUpsertWithWhereUniqueWithoutGeneralCityTownInput | NoteUpsertWithWhereUniqueWithoutGeneralCityTownInput[]
    createMany?: NoteCreateManyGeneralCityTownInputEnvelope
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    update?: NoteUpdateWithWhereUniqueWithoutGeneralCityTownInput | NoteUpdateWithWhereUniqueWithoutGeneralCityTownInput[]
    updateMany?: NoteUpdateManyWithWhereWithoutGeneralCityTownInput | NoteUpdateManyWithWhereWithoutGeneralCityTownInput[]
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[]
  }

  export type CountryCreateNestedOneWithoutStateProvincesInput = {
    create?: XOR<CountryCreateWithoutStateProvincesInput, CountryUncheckedCreateWithoutStateProvincesInput>
    connectOrCreate?: CountryCreateOrConnectWithoutStateProvincesInput
    connect?: CountryWhereUniqueInput
  }

  export type CityTownCreateNestedManyWithoutStateProvinceInput = {
    create?: XOR<CityTownCreateWithoutStateProvinceInput, CityTownUncheckedCreateWithoutStateProvinceInput> | CityTownCreateWithoutStateProvinceInput[] | CityTownUncheckedCreateWithoutStateProvinceInput[]
    connectOrCreate?: CityTownCreateOrConnectWithoutStateProvinceInput | CityTownCreateOrConnectWithoutStateProvinceInput[]
    createMany?: CityTownCreateManyStateProvinceInputEnvelope
    connect?: CityTownWhereUniqueInput | CityTownWhereUniqueInput[]
  }

  export type NoteCreateNestedManyWithoutGeneralStateProvinceInput = {
    create?: XOR<NoteCreateWithoutGeneralStateProvinceInput, NoteUncheckedCreateWithoutGeneralStateProvinceInput> | NoteCreateWithoutGeneralStateProvinceInput[] | NoteUncheckedCreateWithoutGeneralStateProvinceInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutGeneralStateProvinceInput | NoteCreateOrConnectWithoutGeneralStateProvinceInput[]
    createMany?: NoteCreateManyGeneralStateProvinceInputEnvelope
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
  }

  export type CityTownUncheckedCreateNestedManyWithoutStateProvinceInput = {
    create?: XOR<CityTownCreateWithoutStateProvinceInput, CityTownUncheckedCreateWithoutStateProvinceInput> | CityTownCreateWithoutStateProvinceInput[] | CityTownUncheckedCreateWithoutStateProvinceInput[]
    connectOrCreate?: CityTownCreateOrConnectWithoutStateProvinceInput | CityTownCreateOrConnectWithoutStateProvinceInput[]
    createMany?: CityTownCreateManyStateProvinceInputEnvelope
    connect?: CityTownWhereUniqueInput | CityTownWhereUniqueInput[]
  }

  export type NoteUncheckedCreateNestedManyWithoutGeneralStateProvinceInput = {
    create?: XOR<NoteCreateWithoutGeneralStateProvinceInput, NoteUncheckedCreateWithoutGeneralStateProvinceInput> | NoteCreateWithoutGeneralStateProvinceInput[] | NoteUncheckedCreateWithoutGeneralStateProvinceInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutGeneralStateProvinceInput | NoteCreateOrConnectWithoutGeneralStateProvinceInput[]
    createMany?: NoteCreateManyGeneralStateProvinceInputEnvelope
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
  }

  export type CountryUpdateOneRequiredWithoutStateProvincesNestedInput = {
    create?: XOR<CountryCreateWithoutStateProvincesInput, CountryUncheckedCreateWithoutStateProvincesInput>
    connectOrCreate?: CountryCreateOrConnectWithoutStateProvincesInput
    upsert?: CountryUpsertWithoutStateProvincesInput
    connect?: CountryWhereUniqueInput
    update?: XOR<XOR<CountryUpdateToOneWithWhereWithoutStateProvincesInput, CountryUpdateWithoutStateProvincesInput>, CountryUncheckedUpdateWithoutStateProvincesInput>
  }

  export type CityTownUpdateManyWithoutStateProvinceNestedInput = {
    create?: XOR<CityTownCreateWithoutStateProvinceInput, CityTownUncheckedCreateWithoutStateProvinceInput> | CityTownCreateWithoutStateProvinceInput[] | CityTownUncheckedCreateWithoutStateProvinceInput[]
    connectOrCreate?: CityTownCreateOrConnectWithoutStateProvinceInput | CityTownCreateOrConnectWithoutStateProvinceInput[]
    upsert?: CityTownUpsertWithWhereUniqueWithoutStateProvinceInput | CityTownUpsertWithWhereUniqueWithoutStateProvinceInput[]
    createMany?: CityTownCreateManyStateProvinceInputEnvelope
    set?: CityTownWhereUniqueInput | CityTownWhereUniqueInput[]
    disconnect?: CityTownWhereUniqueInput | CityTownWhereUniqueInput[]
    delete?: CityTownWhereUniqueInput | CityTownWhereUniqueInput[]
    connect?: CityTownWhereUniqueInput | CityTownWhereUniqueInput[]
    update?: CityTownUpdateWithWhereUniqueWithoutStateProvinceInput | CityTownUpdateWithWhereUniqueWithoutStateProvinceInput[]
    updateMany?: CityTownUpdateManyWithWhereWithoutStateProvinceInput | CityTownUpdateManyWithWhereWithoutStateProvinceInput[]
    deleteMany?: CityTownScalarWhereInput | CityTownScalarWhereInput[]
  }

  export type NoteUpdateManyWithoutGeneralStateProvinceNestedInput = {
    create?: XOR<NoteCreateWithoutGeneralStateProvinceInput, NoteUncheckedCreateWithoutGeneralStateProvinceInput> | NoteCreateWithoutGeneralStateProvinceInput[] | NoteUncheckedCreateWithoutGeneralStateProvinceInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutGeneralStateProvinceInput | NoteCreateOrConnectWithoutGeneralStateProvinceInput[]
    upsert?: NoteUpsertWithWhereUniqueWithoutGeneralStateProvinceInput | NoteUpsertWithWhereUniqueWithoutGeneralStateProvinceInput[]
    createMany?: NoteCreateManyGeneralStateProvinceInputEnvelope
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    update?: NoteUpdateWithWhereUniqueWithoutGeneralStateProvinceInput | NoteUpdateWithWhereUniqueWithoutGeneralStateProvinceInput[]
    updateMany?: NoteUpdateManyWithWhereWithoutGeneralStateProvinceInput | NoteUpdateManyWithWhereWithoutGeneralStateProvinceInput[]
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[]
  }

  export type CityTownUncheckedUpdateManyWithoutStateProvinceNestedInput = {
    create?: XOR<CityTownCreateWithoutStateProvinceInput, CityTownUncheckedCreateWithoutStateProvinceInput> | CityTownCreateWithoutStateProvinceInput[] | CityTownUncheckedCreateWithoutStateProvinceInput[]
    connectOrCreate?: CityTownCreateOrConnectWithoutStateProvinceInput | CityTownCreateOrConnectWithoutStateProvinceInput[]
    upsert?: CityTownUpsertWithWhereUniqueWithoutStateProvinceInput | CityTownUpsertWithWhereUniqueWithoutStateProvinceInput[]
    createMany?: CityTownCreateManyStateProvinceInputEnvelope
    set?: CityTownWhereUniqueInput | CityTownWhereUniqueInput[]
    disconnect?: CityTownWhereUniqueInput | CityTownWhereUniqueInput[]
    delete?: CityTownWhereUniqueInput | CityTownWhereUniqueInput[]
    connect?: CityTownWhereUniqueInput | CityTownWhereUniqueInput[]
    update?: CityTownUpdateWithWhereUniqueWithoutStateProvinceInput | CityTownUpdateWithWhereUniqueWithoutStateProvinceInput[]
    updateMany?: CityTownUpdateManyWithWhereWithoutStateProvinceInput | CityTownUpdateManyWithWhereWithoutStateProvinceInput[]
    deleteMany?: CityTownScalarWhereInput | CityTownScalarWhereInput[]
  }

  export type NoteUncheckedUpdateManyWithoutGeneralStateProvinceNestedInput = {
    create?: XOR<NoteCreateWithoutGeneralStateProvinceInput, NoteUncheckedCreateWithoutGeneralStateProvinceInput> | NoteCreateWithoutGeneralStateProvinceInput[] | NoteUncheckedCreateWithoutGeneralStateProvinceInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutGeneralStateProvinceInput | NoteCreateOrConnectWithoutGeneralStateProvinceInput[]
    upsert?: NoteUpsertWithWhereUniqueWithoutGeneralStateProvinceInput | NoteUpsertWithWhereUniqueWithoutGeneralStateProvinceInput[]
    createMany?: NoteCreateManyGeneralStateProvinceInputEnvelope
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    update?: NoteUpdateWithWhereUniqueWithoutGeneralStateProvinceInput | NoteUpdateWithWhereUniqueWithoutGeneralStateProvinceInput[]
    updateMany?: NoteUpdateManyWithWhereWithoutGeneralStateProvinceInput | NoteUpdateManyWithWhereWithoutGeneralStateProvinceInput[]
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[]
  }

  export type CityTownCreateNestedManyWithoutCountryInput = {
    create?: XOR<CityTownCreateWithoutCountryInput, CityTownUncheckedCreateWithoutCountryInput> | CityTownCreateWithoutCountryInput[] | CityTownUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: CityTownCreateOrConnectWithoutCountryInput | CityTownCreateOrConnectWithoutCountryInput[]
    createMany?: CityTownCreateManyCountryInputEnvelope
    connect?: CityTownWhereUniqueInput | CityTownWhereUniqueInput[]
  }

  export type StateProvinceCreateNestedManyWithoutCountryInput = {
    create?: XOR<StateProvinceCreateWithoutCountryInput, StateProvinceUncheckedCreateWithoutCountryInput> | StateProvinceCreateWithoutCountryInput[] | StateProvinceUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: StateProvinceCreateOrConnectWithoutCountryInput | StateProvinceCreateOrConnectWithoutCountryInput[]
    createMany?: StateProvinceCreateManyCountryInputEnvelope
    connect?: StateProvinceWhereUniqueInput | StateProvinceWhereUniqueInput[]
  }

  export type NoteCreateNestedManyWithoutGeneralCountryInput = {
    create?: XOR<NoteCreateWithoutGeneralCountryInput, NoteUncheckedCreateWithoutGeneralCountryInput> | NoteCreateWithoutGeneralCountryInput[] | NoteUncheckedCreateWithoutGeneralCountryInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutGeneralCountryInput | NoteCreateOrConnectWithoutGeneralCountryInput[]
    createMany?: NoteCreateManyGeneralCountryInputEnvelope
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
  }

  export type CityTownUncheckedCreateNestedManyWithoutCountryInput = {
    create?: XOR<CityTownCreateWithoutCountryInput, CityTownUncheckedCreateWithoutCountryInput> | CityTownCreateWithoutCountryInput[] | CityTownUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: CityTownCreateOrConnectWithoutCountryInput | CityTownCreateOrConnectWithoutCountryInput[]
    createMany?: CityTownCreateManyCountryInputEnvelope
    connect?: CityTownWhereUniqueInput | CityTownWhereUniqueInput[]
  }

  export type StateProvinceUncheckedCreateNestedManyWithoutCountryInput = {
    create?: XOR<StateProvinceCreateWithoutCountryInput, StateProvinceUncheckedCreateWithoutCountryInput> | StateProvinceCreateWithoutCountryInput[] | StateProvinceUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: StateProvinceCreateOrConnectWithoutCountryInput | StateProvinceCreateOrConnectWithoutCountryInput[]
    createMany?: StateProvinceCreateManyCountryInputEnvelope
    connect?: StateProvinceWhereUniqueInput | StateProvinceWhereUniqueInput[]
  }

  export type NoteUncheckedCreateNestedManyWithoutGeneralCountryInput = {
    create?: XOR<NoteCreateWithoutGeneralCountryInput, NoteUncheckedCreateWithoutGeneralCountryInput> | NoteCreateWithoutGeneralCountryInput[] | NoteUncheckedCreateWithoutGeneralCountryInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutGeneralCountryInput | NoteCreateOrConnectWithoutGeneralCountryInput[]
    createMany?: NoteCreateManyGeneralCountryInputEnvelope
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
  }

  export type CityTownUpdateManyWithoutCountryNestedInput = {
    create?: XOR<CityTownCreateWithoutCountryInput, CityTownUncheckedCreateWithoutCountryInput> | CityTownCreateWithoutCountryInput[] | CityTownUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: CityTownCreateOrConnectWithoutCountryInput | CityTownCreateOrConnectWithoutCountryInput[]
    upsert?: CityTownUpsertWithWhereUniqueWithoutCountryInput | CityTownUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: CityTownCreateManyCountryInputEnvelope
    set?: CityTownWhereUniqueInput | CityTownWhereUniqueInput[]
    disconnect?: CityTownWhereUniqueInput | CityTownWhereUniqueInput[]
    delete?: CityTownWhereUniqueInput | CityTownWhereUniqueInput[]
    connect?: CityTownWhereUniqueInput | CityTownWhereUniqueInput[]
    update?: CityTownUpdateWithWhereUniqueWithoutCountryInput | CityTownUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: CityTownUpdateManyWithWhereWithoutCountryInput | CityTownUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: CityTownScalarWhereInput | CityTownScalarWhereInput[]
  }

  export type StateProvinceUpdateManyWithoutCountryNestedInput = {
    create?: XOR<StateProvinceCreateWithoutCountryInput, StateProvinceUncheckedCreateWithoutCountryInput> | StateProvinceCreateWithoutCountryInput[] | StateProvinceUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: StateProvinceCreateOrConnectWithoutCountryInput | StateProvinceCreateOrConnectWithoutCountryInput[]
    upsert?: StateProvinceUpsertWithWhereUniqueWithoutCountryInput | StateProvinceUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: StateProvinceCreateManyCountryInputEnvelope
    set?: StateProvinceWhereUniqueInput | StateProvinceWhereUniqueInput[]
    disconnect?: StateProvinceWhereUniqueInput | StateProvinceWhereUniqueInput[]
    delete?: StateProvinceWhereUniqueInput | StateProvinceWhereUniqueInput[]
    connect?: StateProvinceWhereUniqueInput | StateProvinceWhereUniqueInput[]
    update?: StateProvinceUpdateWithWhereUniqueWithoutCountryInput | StateProvinceUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: StateProvinceUpdateManyWithWhereWithoutCountryInput | StateProvinceUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: StateProvinceScalarWhereInput | StateProvinceScalarWhereInput[]
  }

  export type NoteUpdateManyWithoutGeneralCountryNestedInput = {
    create?: XOR<NoteCreateWithoutGeneralCountryInput, NoteUncheckedCreateWithoutGeneralCountryInput> | NoteCreateWithoutGeneralCountryInput[] | NoteUncheckedCreateWithoutGeneralCountryInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutGeneralCountryInput | NoteCreateOrConnectWithoutGeneralCountryInput[]
    upsert?: NoteUpsertWithWhereUniqueWithoutGeneralCountryInput | NoteUpsertWithWhereUniqueWithoutGeneralCountryInput[]
    createMany?: NoteCreateManyGeneralCountryInputEnvelope
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    update?: NoteUpdateWithWhereUniqueWithoutGeneralCountryInput | NoteUpdateWithWhereUniqueWithoutGeneralCountryInput[]
    updateMany?: NoteUpdateManyWithWhereWithoutGeneralCountryInput | NoteUpdateManyWithWhereWithoutGeneralCountryInput[]
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[]
  }

  export type CityTownUncheckedUpdateManyWithoutCountryNestedInput = {
    create?: XOR<CityTownCreateWithoutCountryInput, CityTownUncheckedCreateWithoutCountryInput> | CityTownCreateWithoutCountryInput[] | CityTownUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: CityTownCreateOrConnectWithoutCountryInput | CityTownCreateOrConnectWithoutCountryInput[]
    upsert?: CityTownUpsertWithWhereUniqueWithoutCountryInput | CityTownUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: CityTownCreateManyCountryInputEnvelope
    set?: CityTownWhereUniqueInput | CityTownWhereUniqueInput[]
    disconnect?: CityTownWhereUniqueInput | CityTownWhereUniqueInput[]
    delete?: CityTownWhereUniqueInput | CityTownWhereUniqueInput[]
    connect?: CityTownWhereUniqueInput | CityTownWhereUniqueInput[]
    update?: CityTownUpdateWithWhereUniqueWithoutCountryInput | CityTownUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: CityTownUpdateManyWithWhereWithoutCountryInput | CityTownUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: CityTownScalarWhereInput | CityTownScalarWhereInput[]
  }

  export type StateProvinceUncheckedUpdateManyWithoutCountryNestedInput = {
    create?: XOR<StateProvinceCreateWithoutCountryInput, StateProvinceUncheckedCreateWithoutCountryInput> | StateProvinceCreateWithoutCountryInput[] | StateProvinceUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: StateProvinceCreateOrConnectWithoutCountryInput | StateProvinceCreateOrConnectWithoutCountryInput[]
    upsert?: StateProvinceUpsertWithWhereUniqueWithoutCountryInput | StateProvinceUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: StateProvinceCreateManyCountryInputEnvelope
    set?: StateProvinceWhereUniqueInput | StateProvinceWhereUniqueInput[]
    disconnect?: StateProvinceWhereUniqueInput | StateProvinceWhereUniqueInput[]
    delete?: StateProvinceWhereUniqueInput | StateProvinceWhereUniqueInput[]
    connect?: StateProvinceWhereUniqueInput | StateProvinceWhereUniqueInput[]
    update?: StateProvinceUpdateWithWhereUniqueWithoutCountryInput | StateProvinceUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: StateProvinceUpdateManyWithWhereWithoutCountryInput | StateProvinceUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: StateProvinceScalarWhereInput | StateProvinceScalarWhereInput[]
  }

  export type NoteUncheckedUpdateManyWithoutGeneralCountryNestedInput = {
    create?: XOR<NoteCreateWithoutGeneralCountryInput, NoteUncheckedCreateWithoutGeneralCountryInput> | NoteCreateWithoutGeneralCountryInput[] | NoteUncheckedCreateWithoutGeneralCountryInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutGeneralCountryInput | NoteCreateOrConnectWithoutGeneralCountryInput[]
    upsert?: NoteUpsertWithWhereUniqueWithoutGeneralCountryInput | NoteUpsertWithWhereUniqueWithoutGeneralCountryInput[]
    createMany?: NoteCreateManyGeneralCountryInputEnvelope
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    update?: NoteUpdateWithWhereUniqueWithoutGeneralCountryInput | NoteUpdateWithWhereUniqueWithoutGeneralCountryInput[]
    updateMany?: NoteUpdateManyWithWhereWithoutGeneralCountryInput | NoteUpdateManyWithWhereWithoutGeneralCountryInput[]
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type CityTownCreateWithoutNotesInput = {
    name: string
    latitude: number
    longitude: number
    stateProvince: StateProvinceCreateNestedOneWithoutCityTownsInput
    country: CountryCreateNestedOneWithoutCityTownsInput
  }

  export type CityTownUncheckedCreateWithoutNotesInput = {
    id?: number
    name: string
    stateProvinceId: number
    countryId: number
    latitude: number
    longitude: number
  }

  export type CityTownCreateOrConnectWithoutNotesInput = {
    where: CityTownWhereUniqueInput
    create: XOR<CityTownCreateWithoutNotesInput, CityTownUncheckedCreateWithoutNotesInput>
  }

  export type StateProvinceCreateWithoutNotesInput = {
    name: string
    latitude: number
    longitude: number
    country: CountryCreateNestedOneWithoutStateProvincesInput
    cityTowns?: CityTownCreateNestedManyWithoutStateProvinceInput
  }

  export type StateProvinceUncheckedCreateWithoutNotesInput = {
    id?: number
    name: string
    countryId: number
    latitude: number
    longitude: number
    cityTowns?: CityTownUncheckedCreateNestedManyWithoutStateProvinceInput
  }

  export type StateProvinceCreateOrConnectWithoutNotesInput = {
    where: StateProvinceWhereUniqueInput
    create: XOR<StateProvinceCreateWithoutNotesInput, StateProvinceUncheckedCreateWithoutNotesInput>
  }

  export type CountryCreateWithoutNotesInput = {
    name: string
    latitude: number
    longitude: number
    cityTowns?: CityTownCreateNestedManyWithoutCountryInput
    stateProvinces?: StateProvinceCreateNestedManyWithoutCountryInput
  }

  export type CountryUncheckedCreateWithoutNotesInput = {
    id?: number
    name: string
    latitude: number
    longitude: number
    cityTowns?: CityTownUncheckedCreateNestedManyWithoutCountryInput
    stateProvinces?: StateProvinceUncheckedCreateNestedManyWithoutCountryInput
  }

  export type CountryCreateOrConnectWithoutNotesInput = {
    where: CountryWhereUniqueInput
    create: XOR<CountryCreateWithoutNotesInput, CountryUncheckedCreateWithoutNotesInput>
  }

  export type CityTownUpsertWithoutNotesInput = {
    update: XOR<CityTownUpdateWithoutNotesInput, CityTownUncheckedUpdateWithoutNotesInput>
    create: XOR<CityTownCreateWithoutNotesInput, CityTownUncheckedCreateWithoutNotesInput>
    where?: CityTownWhereInput
  }

  export type CityTownUpdateToOneWithWhereWithoutNotesInput = {
    where?: CityTownWhereInput
    data: XOR<CityTownUpdateWithoutNotesInput, CityTownUncheckedUpdateWithoutNotesInput>
  }

  export type CityTownUpdateWithoutNotesInput = {
    name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    stateProvince?: StateProvinceUpdateOneRequiredWithoutCityTownsNestedInput
    country?: CountryUpdateOneRequiredWithoutCityTownsNestedInput
  }

  export type CityTownUncheckedUpdateWithoutNotesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    stateProvinceId?: IntFieldUpdateOperationsInput | number
    countryId?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
  }

  export type StateProvinceUpsertWithoutNotesInput = {
    update: XOR<StateProvinceUpdateWithoutNotesInput, StateProvinceUncheckedUpdateWithoutNotesInput>
    create: XOR<StateProvinceCreateWithoutNotesInput, StateProvinceUncheckedCreateWithoutNotesInput>
    where?: StateProvinceWhereInput
  }

  export type StateProvinceUpdateToOneWithWhereWithoutNotesInput = {
    where?: StateProvinceWhereInput
    data: XOR<StateProvinceUpdateWithoutNotesInput, StateProvinceUncheckedUpdateWithoutNotesInput>
  }

  export type StateProvinceUpdateWithoutNotesInput = {
    name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    country?: CountryUpdateOneRequiredWithoutStateProvincesNestedInput
    cityTowns?: CityTownUpdateManyWithoutStateProvinceNestedInput
  }

  export type StateProvinceUncheckedUpdateWithoutNotesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    countryId?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    cityTowns?: CityTownUncheckedUpdateManyWithoutStateProvinceNestedInput
  }

  export type CountryUpsertWithoutNotesInput = {
    update: XOR<CountryUpdateWithoutNotesInput, CountryUncheckedUpdateWithoutNotesInput>
    create: XOR<CountryCreateWithoutNotesInput, CountryUncheckedCreateWithoutNotesInput>
    where?: CountryWhereInput
  }

  export type CountryUpdateToOneWithWhereWithoutNotesInput = {
    where?: CountryWhereInput
    data: XOR<CountryUpdateWithoutNotesInput, CountryUncheckedUpdateWithoutNotesInput>
  }

  export type CountryUpdateWithoutNotesInput = {
    name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    cityTowns?: CityTownUpdateManyWithoutCountryNestedInput
    stateProvinces?: StateProvinceUpdateManyWithoutCountryNestedInput
  }

  export type CountryUncheckedUpdateWithoutNotesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    cityTowns?: CityTownUncheckedUpdateManyWithoutCountryNestedInput
    stateProvinces?: StateProvinceUncheckedUpdateManyWithoutCountryNestedInput
  }

  export type StateProvinceCreateWithoutCityTownsInput = {
    name: string
    latitude: number
    longitude: number
    country: CountryCreateNestedOneWithoutStateProvincesInput
    notes?: NoteCreateNestedManyWithoutGeneralStateProvinceInput
  }

  export type StateProvinceUncheckedCreateWithoutCityTownsInput = {
    id?: number
    name: string
    countryId: number
    latitude: number
    longitude: number
    notes?: NoteUncheckedCreateNestedManyWithoutGeneralStateProvinceInput
  }

  export type StateProvinceCreateOrConnectWithoutCityTownsInput = {
    where: StateProvinceWhereUniqueInput
    create: XOR<StateProvinceCreateWithoutCityTownsInput, StateProvinceUncheckedCreateWithoutCityTownsInput>
  }

  export type CountryCreateWithoutCityTownsInput = {
    name: string
    latitude: number
    longitude: number
    stateProvinces?: StateProvinceCreateNestedManyWithoutCountryInput
    notes?: NoteCreateNestedManyWithoutGeneralCountryInput
  }

  export type CountryUncheckedCreateWithoutCityTownsInput = {
    id?: number
    name: string
    latitude: number
    longitude: number
    stateProvinces?: StateProvinceUncheckedCreateNestedManyWithoutCountryInput
    notes?: NoteUncheckedCreateNestedManyWithoutGeneralCountryInput
  }

  export type CountryCreateOrConnectWithoutCityTownsInput = {
    where: CountryWhereUniqueInput
    create: XOR<CountryCreateWithoutCityTownsInput, CountryUncheckedCreateWithoutCityTownsInput>
  }

  export type NoteCreateWithoutGeneralCityTownInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    text: string
    cityTown: string
    stateProvince: string
    country: string
    latitude: number
    longitude: number
    generalStateProvince: StateProvinceCreateNestedOneWithoutNotesInput
    generalCountry: CountryCreateNestedOneWithoutNotesInput
  }

  export type NoteUncheckedCreateWithoutGeneralCityTownInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    text: string
    cityTown: string
    stateProvince: string
    country: string
    latitude: number
    longitude: number
    stateProvinceId: number
    countryId: number
  }

  export type NoteCreateOrConnectWithoutGeneralCityTownInput = {
    where: NoteWhereUniqueInput
    create: XOR<NoteCreateWithoutGeneralCityTownInput, NoteUncheckedCreateWithoutGeneralCityTownInput>
  }

  export type NoteCreateManyGeneralCityTownInputEnvelope = {
    data: NoteCreateManyGeneralCityTownInput | NoteCreateManyGeneralCityTownInput[]
  }

  export type StateProvinceUpsertWithoutCityTownsInput = {
    update: XOR<StateProvinceUpdateWithoutCityTownsInput, StateProvinceUncheckedUpdateWithoutCityTownsInput>
    create: XOR<StateProvinceCreateWithoutCityTownsInput, StateProvinceUncheckedCreateWithoutCityTownsInput>
    where?: StateProvinceWhereInput
  }

  export type StateProvinceUpdateToOneWithWhereWithoutCityTownsInput = {
    where?: StateProvinceWhereInput
    data: XOR<StateProvinceUpdateWithoutCityTownsInput, StateProvinceUncheckedUpdateWithoutCityTownsInput>
  }

  export type StateProvinceUpdateWithoutCityTownsInput = {
    name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    country?: CountryUpdateOneRequiredWithoutStateProvincesNestedInput
    notes?: NoteUpdateManyWithoutGeneralStateProvinceNestedInput
  }

  export type StateProvinceUncheckedUpdateWithoutCityTownsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    countryId?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    notes?: NoteUncheckedUpdateManyWithoutGeneralStateProvinceNestedInput
  }

  export type CountryUpsertWithoutCityTownsInput = {
    update: XOR<CountryUpdateWithoutCityTownsInput, CountryUncheckedUpdateWithoutCityTownsInput>
    create: XOR<CountryCreateWithoutCityTownsInput, CountryUncheckedCreateWithoutCityTownsInput>
    where?: CountryWhereInput
  }

  export type CountryUpdateToOneWithWhereWithoutCityTownsInput = {
    where?: CountryWhereInput
    data: XOR<CountryUpdateWithoutCityTownsInput, CountryUncheckedUpdateWithoutCityTownsInput>
  }

  export type CountryUpdateWithoutCityTownsInput = {
    name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    stateProvinces?: StateProvinceUpdateManyWithoutCountryNestedInput
    notes?: NoteUpdateManyWithoutGeneralCountryNestedInput
  }

  export type CountryUncheckedUpdateWithoutCityTownsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    stateProvinces?: StateProvinceUncheckedUpdateManyWithoutCountryNestedInput
    notes?: NoteUncheckedUpdateManyWithoutGeneralCountryNestedInput
  }

  export type NoteUpsertWithWhereUniqueWithoutGeneralCityTownInput = {
    where: NoteWhereUniqueInput
    update: XOR<NoteUpdateWithoutGeneralCityTownInput, NoteUncheckedUpdateWithoutGeneralCityTownInput>
    create: XOR<NoteCreateWithoutGeneralCityTownInput, NoteUncheckedCreateWithoutGeneralCityTownInput>
  }

  export type NoteUpdateWithWhereUniqueWithoutGeneralCityTownInput = {
    where: NoteWhereUniqueInput
    data: XOR<NoteUpdateWithoutGeneralCityTownInput, NoteUncheckedUpdateWithoutGeneralCityTownInput>
  }

  export type NoteUpdateManyWithWhereWithoutGeneralCityTownInput = {
    where: NoteScalarWhereInput
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyWithoutGeneralCityTownInput>
  }

  export type NoteScalarWhereInput = {
    AND?: NoteScalarWhereInput | NoteScalarWhereInput[]
    OR?: NoteScalarWhereInput[]
    NOT?: NoteScalarWhereInput | NoteScalarWhereInput[]
    id?: IntFilter<"Note"> | number
    createdAt?: DateTimeFilter<"Note"> | Date | string
    updatedAt?: DateTimeFilter<"Note"> | Date | string
    text?: StringFilter<"Note"> | string
    cityTown?: StringFilter<"Note"> | string
    stateProvince?: StringFilter<"Note"> | string
    country?: StringFilter<"Note"> | string
    latitude?: FloatFilter<"Note"> | number
    longitude?: FloatFilter<"Note"> | number
    cityTownId?: IntFilter<"Note"> | number
    stateProvinceId?: IntFilter<"Note"> | number
    countryId?: IntFilter<"Note"> | number
  }

  export type CountryCreateWithoutStateProvincesInput = {
    name: string
    latitude: number
    longitude: number
    cityTowns?: CityTownCreateNestedManyWithoutCountryInput
    notes?: NoteCreateNestedManyWithoutGeneralCountryInput
  }

  export type CountryUncheckedCreateWithoutStateProvincesInput = {
    id?: number
    name: string
    latitude: number
    longitude: number
    cityTowns?: CityTownUncheckedCreateNestedManyWithoutCountryInput
    notes?: NoteUncheckedCreateNestedManyWithoutGeneralCountryInput
  }

  export type CountryCreateOrConnectWithoutStateProvincesInput = {
    where: CountryWhereUniqueInput
    create: XOR<CountryCreateWithoutStateProvincesInput, CountryUncheckedCreateWithoutStateProvincesInput>
  }

  export type CityTownCreateWithoutStateProvinceInput = {
    name: string
    latitude: number
    longitude: number
    country: CountryCreateNestedOneWithoutCityTownsInput
    notes?: NoteCreateNestedManyWithoutGeneralCityTownInput
  }

  export type CityTownUncheckedCreateWithoutStateProvinceInput = {
    id?: number
    name: string
    countryId: number
    latitude: number
    longitude: number
    notes?: NoteUncheckedCreateNestedManyWithoutGeneralCityTownInput
  }

  export type CityTownCreateOrConnectWithoutStateProvinceInput = {
    where: CityTownWhereUniqueInput
    create: XOR<CityTownCreateWithoutStateProvinceInput, CityTownUncheckedCreateWithoutStateProvinceInput>
  }

  export type CityTownCreateManyStateProvinceInputEnvelope = {
    data: CityTownCreateManyStateProvinceInput | CityTownCreateManyStateProvinceInput[]
  }

  export type NoteCreateWithoutGeneralStateProvinceInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    text: string
    cityTown: string
    stateProvince: string
    country: string
    latitude: number
    longitude: number
    generalCityTown: CityTownCreateNestedOneWithoutNotesInput
    generalCountry: CountryCreateNestedOneWithoutNotesInput
  }

  export type NoteUncheckedCreateWithoutGeneralStateProvinceInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    text: string
    cityTown: string
    stateProvince: string
    country: string
    latitude: number
    longitude: number
    cityTownId: number
    countryId: number
  }

  export type NoteCreateOrConnectWithoutGeneralStateProvinceInput = {
    where: NoteWhereUniqueInput
    create: XOR<NoteCreateWithoutGeneralStateProvinceInput, NoteUncheckedCreateWithoutGeneralStateProvinceInput>
  }

  export type NoteCreateManyGeneralStateProvinceInputEnvelope = {
    data: NoteCreateManyGeneralStateProvinceInput | NoteCreateManyGeneralStateProvinceInput[]
  }

  export type CountryUpsertWithoutStateProvincesInput = {
    update: XOR<CountryUpdateWithoutStateProvincesInput, CountryUncheckedUpdateWithoutStateProvincesInput>
    create: XOR<CountryCreateWithoutStateProvincesInput, CountryUncheckedCreateWithoutStateProvincesInput>
    where?: CountryWhereInput
  }

  export type CountryUpdateToOneWithWhereWithoutStateProvincesInput = {
    where?: CountryWhereInput
    data: XOR<CountryUpdateWithoutStateProvincesInput, CountryUncheckedUpdateWithoutStateProvincesInput>
  }

  export type CountryUpdateWithoutStateProvincesInput = {
    name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    cityTowns?: CityTownUpdateManyWithoutCountryNestedInput
    notes?: NoteUpdateManyWithoutGeneralCountryNestedInput
  }

  export type CountryUncheckedUpdateWithoutStateProvincesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    cityTowns?: CityTownUncheckedUpdateManyWithoutCountryNestedInput
    notes?: NoteUncheckedUpdateManyWithoutGeneralCountryNestedInput
  }

  export type CityTownUpsertWithWhereUniqueWithoutStateProvinceInput = {
    where: CityTownWhereUniqueInput
    update: XOR<CityTownUpdateWithoutStateProvinceInput, CityTownUncheckedUpdateWithoutStateProvinceInput>
    create: XOR<CityTownCreateWithoutStateProvinceInput, CityTownUncheckedCreateWithoutStateProvinceInput>
  }

  export type CityTownUpdateWithWhereUniqueWithoutStateProvinceInput = {
    where: CityTownWhereUniqueInput
    data: XOR<CityTownUpdateWithoutStateProvinceInput, CityTownUncheckedUpdateWithoutStateProvinceInput>
  }

  export type CityTownUpdateManyWithWhereWithoutStateProvinceInput = {
    where: CityTownScalarWhereInput
    data: XOR<CityTownUpdateManyMutationInput, CityTownUncheckedUpdateManyWithoutStateProvinceInput>
  }

  export type CityTownScalarWhereInput = {
    AND?: CityTownScalarWhereInput | CityTownScalarWhereInput[]
    OR?: CityTownScalarWhereInput[]
    NOT?: CityTownScalarWhereInput | CityTownScalarWhereInput[]
    id?: IntFilter<"CityTown"> | number
    name?: StringFilter<"CityTown"> | string
    stateProvinceId?: IntFilter<"CityTown"> | number
    countryId?: IntFilter<"CityTown"> | number
    latitude?: FloatFilter<"CityTown"> | number
    longitude?: FloatFilter<"CityTown"> | number
  }

  export type NoteUpsertWithWhereUniqueWithoutGeneralStateProvinceInput = {
    where: NoteWhereUniqueInput
    update: XOR<NoteUpdateWithoutGeneralStateProvinceInput, NoteUncheckedUpdateWithoutGeneralStateProvinceInput>
    create: XOR<NoteCreateWithoutGeneralStateProvinceInput, NoteUncheckedCreateWithoutGeneralStateProvinceInput>
  }

  export type NoteUpdateWithWhereUniqueWithoutGeneralStateProvinceInput = {
    where: NoteWhereUniqueInput
    data: XOR<NoteUpdateWithoutGeneralStateProvinceInput, NoteUncheckedUpdateWithoutGeneralStateProvinceInput>
  }

  export type NoteUpdateManyWithWhereWithoutGeneralStateProvinceInput = {
    where: NoteScalarWhereInput
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyWithoutGeneralStateProvinceInput>
  }

  export type CityTownCreateWithoutCountryInput = {
    name: string
    latitude: number
    longitude: number
    stateProvince: StateProvinceCreateNestedOneWithoutCityTownsInput
    notes?: NoteCreateNestedManyWithoutGeneralCityTownInput
  }

  export type CityTownUncheckedCreateWithoutCountryInput = {
    id?: number
    name: string
    stateProvinceId: number
    latitude: number
    longitude: number
    notes?: NoteUncheckedCreateNestedManyWithoutGeneralCityTownInput
  }

  export type CityTownCreateOrConnectWithoutCountryInput = {
    where: CityTownWhereUniqueInput
    create: XOR<CityTownCreateWithoutCountryInput, CityTownUncheckedCreateWithoutCountryInput>
  }

  export type CityTownCreateManyCountryInputEnvelope = {
    data: CityTownCreateManyCountryInput | CityTownCreateManyCountryInput[]
  }

  export type StateProvinceCreateWithoutCountryInput = {
    name: string
    latitude: number
    longitude: number
    cityTowns?: CityTownCreateNestedManyWithoutStateProvinceInput
    notes?: NoteCreateNestedManyWithoutGeneralStateProvinceInput
  }

  export type StateProvinceUncheckedCreateWithoutCountryInput = {
    id?: number
    name: string
    latitude: number
    longitude: number
    cityTowns?: CityTownUncheckedCreateNestedManyWithoutStateProvinceInput
    notes?: NoteUncheckedCreateNestedManyWithoutGeneralStateProvinceInput
  }

  export type StateProvinceCreateOrConnectWithoutCountryInput = {
    where: StateProvinceWhereUniqueInput
    create: XOR<StateProvinceCreateWithoutCountryInput, StateProvinceUncheckedCreateWithoutCountryInput>
  }

  export type StateProvinceCreateManyCountryInputEnvelope = {
    data: StateProvinceCreateManyCountryInput | StateProvinceCreateManyCountryInput[]
  }

  export type NoteCreateWithoutGeneralCountryInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    text: string
    cityTown: string
    stateProvince: string
    country: string
    latitude: number
    longitude: number
    generalCityTown: CityTownCreateNestedOneWithoutNotesInput
    generalStateProvince: StateProvinceCreateNestedOneWithoutNotesInput
  }

  export type NoteUncheckedCreateWithoutGeneralCountryInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    text: string
    cityTown: string
    stateProvince: string
    country: string
    latitude: number
    longitude: number
    cityTownId: number
    stateProvinceId: number
  }

  export type NoteCreateOrConnectWithoutGeneralCountryInput = {
    where: NoteWhereUniqueInput
    create: XOR<NoteCreateWithoutGeneralCountryInput, NoteUncheckedCreateWithoutGeneralCountryInput>
  }

  export type NoteCreateManyGeneralCountryInputEnvelope = {
    data: NoteCreateManyGeneralCountryInput | NoteCreateManyGeneralCountryInput[]
  }

  export type CityTownUpsertWithWhereUniqueWithoutCountryInput = {
    where: CityTownWhereUniqueInput
    update: XOR<CityTownUpdateWithoutCountryInput, CityTownUncheckedUpdateWithoutCountryInput>
    create: XOR<CityTownCreateWithoutCountryInput, CityTownUncheckedCreateWithoutCountryInput>
  }

  export type CityTownUpdateWithWhereUniqueWithoutCountryInput = {
    where: CityTownWhereUniqueInput
    data: XOR<CityTownUpdateWithoutCountryInput, CityTownUncheckedUpdateWithoutCountryInput>
  }

  export type CityTownUpdateManyWithWhereWithoutCountryInput = {
    where: CityTownScalarWhereInput
    data: XOR<CityTownUpdateManyMutationInput, CityTownUncheckedUpdateManyWithoutCountryInput>
  }

  export type StateProvinceUpsertWithWhereUniqueWithoutCountryInput = {
    where: StateProvinceWhereUniqueInput
    update: XOR<StateProvinceUpdateWithoutCountryInput, StateProvinceUncheckedUpdateWithoutCountryInput>
    create: XOR<StateProvinceCreateWithoutCountryInput, StateProvinceUncheckedCreateWithoutCountryInput>
  }

  export type StateProvinceUpdateWithWhereUniqueWithoutCountryInput = {
    where: StateProvinceWhereUniqueInput
    data: XOR<StateProvinceUpdateWithoutCountryInput, StateProvinceUncheckedUpdateWithoutCountryInput>
  }

  export type StateProvinceUpdateManyWithWhereWithoutCountryInput = {
    where: StateProvinceScalarWhereInput
    data: XOR<StateProvinceUpdateManyMutationInput, StateProvinceUncheckedUpdateManyWithoutCountryInput>
  }

  export type StateProvinceScalarWhereInput = {
    AND?: StateProvinceScalarWhereInput | StateProvinceScalarWhereInput[]
    OR?: StateProvinceScalarWhereInput[]
    NOT?: StateProvinceScalarWhereInput | StateProvinceScalarWhereInput[]
    id?: IntFilter<"StateProvince"> | number
    name?: StringFilter<"StateProvince"> | string
    countryId?: IntFilter<"StateProvince"> | number
    latitude?: FloatFilter<"StateProvince"> | number
    longitude?: FloatFilter<"StateProvince"> | number
  }

  export type NoteUpsertWithWhereUniqueWithoutGeneralCountryInput = {
    where: NoteWhereUniqueInput
    update: XOR<NoteUpdateWithoutGeneralCountryInput, NoteUncheckedUpdateWithoutGeneralCountryInput>
    create: XOR<NoteCreateWithoutGeneralCountryInput, NoteUncheckedCreateWithoutGeneralCountryInput>
  }

  export type NoteUpdateWithWhereUniqueWithoutGeneralCountryInput = {
    where: NoteWhereUniqueInput
    data: XOR<NoteUpdateWithoutGeneralCountryInput, NoteUncheckedUpdateWithoutGeneralCountryInput>
  }

  export type NoteUpdateManyWithWhereWithoutGeneralCountryInput = {
    where: NoteScalarWhereInput
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyWithoutGeneralCountryInput>
  }

  export type NoteCreateManyGeneralCityTownInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    text: string
    cityTown: string
    stateProvince: string
    country: string
    latitude: number
    longitude: number
    stateProvinceId: number
    countryId: number
  }

  export type NoteUpdateWithoutGeneralCityTownInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    cityTown?: StringFieldUpdateOperationsInput | string
    stateProvince?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    generalStateProvince?: StateProvinceUpdateOneRequiredWithoutNotesNestedInput
    generalCountry?: CountryUpdateOneRequiredWithoutNotesNestedInput
  }

  export type NoteUncheckedUpdateWithoutGeneralCityTownInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    cityTown?: StringFieldUpdateOperationsInput | string
    stateProvince?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    stateProvinceId?: IntFieldUpdateOperationsInput | number
    countryId?: IntFieldUpdateOperationsInput | number
  }

  export type NoteUncheckedUpdateManyWithoutGeneralCityTownInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    cityTown?: StringFieldUpdateOperationsInput | string
    stateProvince?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    stateProvinceId?: IntFieldUpdateOperationsInput | number
    countryId?: IntFieldUpdateOperationsInput | number
  }

  export type CityTownCreateManyStateProvinceInput = {
    id?: number
    name: string
    countryId: number
    latitude: number
    longitude: number
  }

  export type NoteCreateManyGeneralStateProvinceInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    text: string
    cityTown: string
    stateProvince: string
    country: string
    latitude: number
    longitude: number
    cityTownId: number
    countryId: number
  }

  export type CityTownUpdateWithoutStateProvinceInput = {
    name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    country?: CountryUpdateOneRequiredWithoutCityTownsNestedInput
    notes?: NoteUpdateManyWithoutGeneralCityTownNestedInput
  }

  export type CityTownUncheckedUpdateWithoutStateProvinceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    countryId?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    notes?: NoteUncheckedUpdateManyWithoutGeneralCityTownNestedInput
  }

  export type CityTownUncheckedUpdateManyWithoutStateProvinceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    countryId?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
  }

  export type NoteUpdateWithoutGeneralStateProvinceInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    cityTown?: StringFieldUpdateOperationsInput | string
    stateProvince?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    generalCityTown?: CityTownUpdateOneRequiredWithoutNotesNestedInput
    generalCountry?: CountryUpdateOneRequiredWithoutNotesNestedInput
  }

  export type NoteUncheckedUpdateWithoutGeneralStateProvinceInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    cityTown?: StringFieldUpdateOperationsInput | string
    stateProvince?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    cityTownId?: IntFieldUpdateOperationsInput | number
    countryId?: IntFieldUpdateOperationsInput | number
  }

  export type NoteUncheckedUpdateManyWithoutGeneralStateProvinceInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    cityTown?: StringFieldUpdateOperationsInput | string
    stateProvince?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    cityTownId?: IntFieldUpdateOperationsInput | number
    countryId?: IntFieldUpdateOperationsInput | number
  }

  export type CityTownCreateManyCountryInput = {
    id?: number
    name: string
    stateProvinceId: number
    latitude: number
    longitude: number
  }

  export type StateProvinceCreateManyCountryInput = {
    id?: number
    name: string
    latitude: number
    longitude: number
  }

  export type NoteCreateManyGeneralCountryInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    text: string
    cityTown: string
    stateProvince: string
    country: string
    latitude: number
    longitude: number
    cityTownId: number
    stateProvinceId: number
  }

  export type CityTownUpdateWithoutCountryInput = {
    name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    stateProvince?: StateProvinceUpdateOneRequiredWithoutCityTownsNestedInput
    notes?: NoteUpdateManyWithoutGeneralCityTownNestedInput
  }

  export type CityTownUncheckedUpdateWithoutCountryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    stateProvinceId?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    notes?: NoteUncheckedUpdateManyWithoutGeneralCityTownNestedInput
  }

  export type CityTownUncheckedUpdateManyWithoutCountryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    stateProvinceId?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
  }

  export type StateProvinceUpdateWithoutCountryInput = {
    name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    cityTowns?: CityTownUpdateManyWithoutStateProvinceNestedInput
    notes?: NoteUpdateManyWithoutGeneralStateProvinceNestedInput
  }

  export type StateProvinceUncheckedUpdateWithoutCountryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    cityTowns?: CityTownUncheckedUpdateManyWithoutStateProvinceNestedInput
    notes?: NoteUncheckedUpdateManyWithoutGeneralStateProvinceNestedInput
  }

  export type StateProvinceUncheckedUpdateManyWithoutCountryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
  }

  export type NoteUpdateWithoutGeneralCountryInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    cityTown?: StringFieldUpdateOperationsInput | string
    stateProvince?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    generalCityTown?: CityTownUpdateOneRequiredWithoutNotesNestedInput
    generalStateProvince?: StateProvinceUpdateOneRequiredWithoutNotesNestedInput
  }

  export type NoteUncheckedUpdateWithoutGeneralCountryInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    cityTown?: StringFieldUpdateOperationsInput | string
    stateProvince?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    cityTownId?: IntFieldUpdateOperationsInput | number
    stateProvinceId?: IntFieldUpdateOperationsInput | number
  }

  export type NoteUncheckedUpdateManyWithoutGeneralCountryInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    cityTown?: StringFieldUpdateOperationsInput | string
    stateProvince?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    cityTownId?: IntFieldUpdateOperationsInput | number
    stateProvinceId?: IntFieldUpdateOperationsInput | number
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