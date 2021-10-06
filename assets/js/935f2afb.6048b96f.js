"use strict";(self.webpackChunk_graphql_mesh_website=self.webpackChunk_graphql_mesh_website||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","isLast":true,"docsSidebars":{"sidebar":[{"collapsed":true,"type":"category","label":"Getting Started","items":[{"type":"link","label":"Introduction","href":"/docs/getting-started/introduction"},{"type":"link","label":"Installation","href":"/docs/getting-started/installation"},{"type":"link","label":"Basic Usage","href":"/docs/getting-started/basic-example"}]},{"collapsed":true,"type":"category","label":"Recipes","items":[{"type":"link","label":"Combine and extend sources","href":"/docs/recipes/multiple-apis"},{"type":"link","label":"Build Artifacts","href":"/docs/recipes/build-mesh-artifacts"},{"type":"link","label":"TypeScript Support","href":"/docs/recipes/typescript"},{"type":"link","label":"Mesh as SDK","href":"/docs/recipes/as-sdk"},{"type":"link","label":"Mesh as Gateway","href":"/docs/recipes/as-gateway"},{"type":"link","label":"Custom Server (Apollo etc.)","href":"/docs/recipes/custom-server"},{"type":"link","label":"Subscriptions & Webhooks","href":"/docs/recipes/subscriptions-webhooks"},{"type":"link","label":"Live Queries","href":"/docs/recipes/live-queries"}]},{"collapsed":true,"type":"category","label":"Source Handlers","items":[{"type":"link","label":"Introduction","href":"/docs/handlers/handlers-introduction"},{"type":"link","label":"GraphQL","href":"/docs/handlers/graphql"},{"type":"link","label":"OpenAPI / Swagger","href":"/docs/handlers/openapi"},{"type":"link","label":"gRPC / Protobuf","href":"/docs/handlers/grpc"},{"type":"link","label":"JSON Schema or Samples","href":"/docs/handlers/json-schema"},{"type":"link","label":"PostgreSQL / PostGraphile","href":"/docs/handlers/postgraphile"},{"type":"link","label":"SOAP","href":"/docs/handlers/soap"},{"type":"link","label":"MongoDB / Mongoose","href":"/docs/handlers/mongoose"},{"type":"link","label":"OData / Microsoft Graph","href":"/docs/handlers/odata"},{"type":"link","label":"Apache Thrift","href":"/docs/handlers/thrift"},{"type":"link","label":"SQLite / Tuql","href":"/docs/handlers/tuql"},{"type":"link","label":"MySQL","href":"/docs/handlers/mysql"},{"type":"link","label":"Neo4j","href":"/docs/handlers/neo4j"}]},{"collapsed":true,"type":"category","label":"Transforms","items":[{"type":"link","label":"Introduction","href":"/docs/transforms/transforms-introduction"},{"type":"link","label":"Rename","href":"/docs/transforms/rename"},{"type":"link","label":"Prefix","href":"/docs/transforms/prefix"},{"type":"link","label":"Encapsulate","href":"/docs/transforms/encapsulate"},{"type":"link","label":"Cache","href":"/docs/transforms/cache"},{"type":"link","label":"Snapshot","href":"/docs/transforms/snapshot"},{"type":"link","label":"Mock","href":"/docs/transforms/mock"},{"type":"link","label":"Resolvers Composition","href":"/docs/transforms/resolvers-composition"},{"type":"link","label":"Filter Schema","href":"/docs/transforms/filter-schema"},{"type":"link","label":"Naming Convention","href":"/docs/transforms/naming-convention"},{"type":"link","label":"Type Merging","href":"/docs/transforms/type-merging"},{"type":"link","label":"Apollo Federation","href":"/docs/transforms/federation"},{"type":"link","label":"Extend","href":"/docs/transforms/extend"}]},{"collapsed":true,"type":"category","label":"Cache","items":[{"type":"link","label":"InMemory LRU","href":"/docs/cache/inmemory-lru"},{"type":"link","label":"File","href":"/docs/cache/cache-file"},{"type":"link","label":"LocalForage","href":"/docs/cache/localforage"},{"type":"link","label":"Redis","href":"/docs/cache/cache-redis"}]},{"collapsed":true,"type":"category","label":"API Reference","items":[{"collapsed":true,"type":"category","label":"Modules","items":[{"type":"link","label":"cli","href":"/docs/api/modules/cli"},{"type":"link","label":"config","href":"/docs/api/modules/config"},{"type":"link","label":"json-machete","href":"/docs/api/modules/json-machete"},{"type":"link","label":"runtime","href":"/docs/api/modules/runtime"},{"type":"link","label":"store","href":"/docs/api/modules/store"},{"type":"link","label":"types","href":"/docs/api/modules/types"},{"type":"link","label":"utils","href":"/docs/api/modules/utils"},{"type":"link","label":"cache-file","href":"/docs/api/modules/cache-file"},{"type":"link","label":"cache-inmemory-lru","href":"/docs/api/modules/cache-inmemory-lru"},{"type":"link","label":"cache-localforage","href":"/docs/api/modules/cache-localforage"},{"type":"link","label":"cache-redis","href":"/docs/api/modules/cache-redis"},{"type":"link","label":"cache-store","href":"/docs/api/modules/cache-store"},{"type":"link","label":"graphql","href":"/docs/api/modules/graphql"},{"type":"link","label":"grpc","href":"/docs/api/modules/grpc"},{"type":"link","label":"json-schema","href":"/docs/api/modules/json-schema"},{"type":"link","label":"mongoose","href":"/docs/api/modules/mongoose"},{"type":"link","label":"mysql","href":"/docs/api/modules/mysql"},{"type":"link","label":"neo4j","href":"/docs/api/modules/neo4j"},{"type":"link","label":"odata","href":"/docs/api/modules/odata"},{"type":"link","label":"openapi","href":"/docs/api/modules/openapi"},{"type":"link","label":"postgraphile","href":"/docs/api/modules/postgraphile"},{"type":"link","label":"soap","href":"/docs/api/modules/soap"},{"type":"link","label":"thrift","href":"/docs/api/modules/thrift"},{"type":"link","label":"tuql","href":"/docs/api/modules/tuql"},{"type":"link","label":"transform-cache","href":"/docs/api/modules/transform-cache"},{"type":"link","label":"transform-encapsulate","href":"/docs/api/modules/transform-encapsulate"},{"type":"link","label":"transform-extend","href":"/docs/api/modules/transform-extend"},{"type":"link","label":"transform-federation","href":"/docs/api/modules/transform-federation"},{"type":"link","label":"transform-filter-schema","href":"/docs/api/modules/transform-filter-schema"},{"type":"link","label":"transform-mock","href":"/docs/api/modules/transform-mock"},{"type":"link","label":"transform-naming-convention","href":"/docs/api/modules/transform-naming-convention"},{"type":"link","label":"transform-prefix","href":"/docs/api/modules/transform-prefix"},{"type":"link","label":"transform-rename","href":"/docs/api/modules/transform-rename"},{"type":"link","label":"replace-field","href":"/docs/api/modules/replace-field"},{"type":"link","label":"transform-resolvers-composition","href":"/docs/api/modules/transform-resolvers-composition"},{"type":"link","label":"transform-snapshot","href":"/docs/api/modules/transform-snapshot"},{"type":"link","label":"transform-type-merging","href":"/docs/api/modules/transform-type-merging"},{"type":"link","label":"merger-bare","href":"/docs/api/modules/merger-bare"},{"type":"link","label":"merger-federation","href":"/docs/api/modules/merger-federation"},{"type":"link","label":"merger-stitching","href":"/docs/api/modules/merger-stitching"}]},{"collapsed":true,"type":"category","label":"Classes","items":[{"type":"link","label":"Class: DefaultLogger","href":"/docs/api/classes/utils_src.DefaultLogger"},{"type":"link","label":"Class: FsStoreStorageAdapter","href":"/docs/api/classes/store_src.FsStoreStorageAdapter"},{"type":"link","label":"Class: InMemoryStoreStorageAdapter","href":"/docs/api/classes/store_src.InMemoryStoreStorageAdapter"},{"type":"link","label":"Class: MeshStore","href":"/docs/api/classes/store_src.MeshStore"},{"type":"link","label":"Class: ReadonlyStoreError","href":"/docs/api/classes/store_src.ReadonlyStoreError"},{"type":"link","label":"Class: ValidationError","href":"/docs/api/classes/store_src.ValidationError"},{"type":"link","label":"Class: default&lt;V\\\\&gt;","href":"/docs/api/classes/cache_file_src.default"},{"type":"link","label":"Class: default&lt;V\\\\&gt;","href":"/docs/api/classes/cache_inmemory_lru_src.default"},{"type":"link","label":"Class: default&lt;V\\\\&gt;","href":"/docs/api/classes/cache_localforage_src.default"},{"type":"link","label":"Class: default&lt;V\\\\&gt;","href":"/docs/api/classes/cache_redis_src.default"},{"type":"link","label":"Class: default&lt;V\\\\&gt;","href":"/docs/api/classes/cache_store_src.default"},{"type":"link","label":"Class: default","href":"/docs/api/classes/handlers_graphql_src.default"},{"type":"link","label":"Class: default","href":"/docs/api/classes/handlers_grpc_src.default"},{"type":"link","label":"Class: default","href":"/docs/api/classes/handlers_json_schema_src.default"},{"type":"link","label":"Class: default","href":"/docs/api/classes/handlers_mongoose_src.default"},{"type":"link","label":"Class: default","href":"/docs/api/classes/handlers_mysql_src.default"},{"type":"link","label":"Class: default","href":"/docs/api/classes/handlers_neo4j_src.default"},{"type":"link","label":"Class: default","href":"/docs/api/classes/handlers_odata_src.default"},{"type":"link","label":"Class: default","href":"/docs/api/classes/handlers_openapi_src.default"},{"type":"link","label":"Class: default","href":"/docs/api/classes/handlers_postgraphile_src.default"},{"type":"link","label":"Class: default","href":"/docs/api/classes/handlers_soap_src.default"},{"type":"link","label":"Class: default","href":"/docs/api/classes/handlers_thrift_src.default"},{"type":"link","label":"Class: default","href":"/docs/api/classes/handlers_tuql_src.default"},{"type":"link","label":"Class: default","href":"/docs/api/classes/mergers_bare_src.default"},{"type":"link","label":"Class: default","href":"/docs/api/classes/mergers_federation_src.default"},{"type":"link","label":"Class: default","href":"/docs/api/classes/mergers_stitching_src.default"},{"type":"link","label":"Class: default","href":"/docs/api/classes/transforms_cache_src.default"},{"type":"link","label":"Class: default","href":"/docs/api/classes/transforms_encapsulate_src.default"},{"type":"link","label":"Class: default","href":"/docs/api/classes/transforms_extend_src.default"},{"type":"link","label":"Class: default","href":"/docs/api/classes/transforms_federation_src.default"},{"type":"link","label":"Class: default","href":"/docs/api/classes/transforms_mock_src.default"},{"type":"link","label":"Class: default","href":"/docs/api/classes/transforms_naming_convention_src.default"},{"type":"link","label":"Class: default","href":"/docs/api/classes/transforms_replace_field_src.default"},{"type":"link","label":"Class: default","href":"/docs/api/classes/transforms_resolvers_composition_src.default"},{"type":"link","label":"Class: default","href":"/docs/api/classes/transforms_snapshot_src.default"},{"type":"link","label":"Class: default","href":"/docs/api/classes/transforms_type_merging_src.default"}]},{"collapsed":true,"type":"category","label":"Interfaces","items":[{"type":"link","label":"Interface: AdditionalStitchingBatchResolverObject","href":"/docs/api/interfaces/types_src.YamlConfig.AdditionalStitchingBatchResolverObject"},{"type":"link","label":"Interface: AdditionalStitchingResolverObject","href":"/docs/api/interfaces/types_src.YamlConfig.AdditionalStitchingResolverObject"},{"type":"link","label":"Interface: AdditionalSubscriptionObject","href":"/docs/api/interfaces/types_src.YamlConfig.AdditionalSubscriptionObject"},{"type":"link","label":"Interface: Cache","href":"/docs/api/interfaces/types_src.YamlConfig.Cache"},{"type":"link","label":"Interface: CacheEffectingOperationConfig","href":"/docs/api/interfaces/types_src.YamlConfig.CacheEffectingOperationConfig"},{"type":"link","label":"Interface: CacheInvalidateConfig","href":"/docs/api/interfaces/types_src.YamlConfig.CacheInvalidateConfig"},{"type":"link","label":"Interface: CacheTransformConfig","href":"/docs/api/interfaces/types_src.YamlConfig.CacheTransformConfig"},{"type":"link","label":"Interface: ComposeMongooseInputType","href":"/docs/api/interfaces/types_src.YamlConfig.ComposeMongooseInputType"},{"type":"link","label":"Interface: ComposeWithMongooseFieldsOpts","href":"/docs/api/interfaces/types_src.YamlConfig.ComposeWithMongooseFieldsOpts"},{"type":"link","label":"Interface: ComposeWithMongooseFieldsOpts1","href":"/docs/api/interfaces/types_src.YamlConfig.ComposeWithMongooseFieldsOpts1"},{"type":"link","label":"Interface: ComposeWithMongooseOpts","href":"/docs/api/interfaces/types_src.YamlConfig.ComposeWithMongooseOpts"},{"type":"link","label":"Interface: ComposeWithMongooseResolverOpts","href":"/docs/api/interfaces/types_src.YamlConfig.ComposeWithMongooseResolverOpts"},{"type":"link","label":"Interface: ComputedAnnotation","href":"/docs/api/interfaces/types_src.YamlConfig.ComputedAnnotation"},{"type":"link","label":"Interface: Config","href":"/docs/api/interfaces/types_src.YamlConfig.Config"},{"type":"link","label":"Interface: CorsConfig","href":"/docs/api/interfaces/types_src.YamlConfig.CorsConfig"},{"type":"link","label":"Interface: EncapsulateTransformApplyTo","href":"/docs/api/interfaces/types_src.YamlConfig.EncapsulateTransformApplyTo"},{"type":"link","label":"Interface: EncapsulateTransformObject","href":"/docs/api/interfaces/types_src.YamlConfig.EncapsulateTransformObject"},{"type":"link","label":"Interface: ExpressHandler","href":"/docs/api/interfaces/types_src.YamlConfig.ExpressHandler"},{"type":"link","label":"Interface: ExtendTransform","href":"/docs/api/interfaces/types_src.YamlConfig.ExtendTransform"},{"type":"link","label":"Interface: FederationField","href":"/docs/api/interfaces/types_src.YamlConfig.FederationField"},{"type":"link","label":"Interface: FederationFieldConfig","href":"/docs/api/interfaces/types_src.YamlConfig.FederationFieldConfig"},{"type":"link","label":"Interface: FederationObjectConfig","href":"/docs/api/interfaces/types_src.YamlConfig.FederationObjectConfig"},{"type":"link","label":"Interface: FederationTransform","href":"/docs/api/interfaces/types_src.YamlConfig.FederationTransform"},{"type":"link","label":"Interface: FederationTransformType","href":"/docs/api/interfaces/types_src.YamlConfig.FederationTransformType"},{"type":"link","label":"Interface: FileCacheConfig","href":"/docs/api/interfaces/types_src.YamlConfig.FileCacheConfig"},{"type":"link","label":"Interface: FilterHelperArgsOpts","href":"/docs/api/interfaces/types_src.YamlConfig.FilterHelperArgsOpts"},{"type":"link","label":"Interface: FilterSchemaTransform","href":"/docs/api/interfaces/types_src.YamlConfig.FilterSchemaTransform"},{"type":"link","label":"Interface: FsStoreStorageAdapterOptions","href":"/docs/api/interfaces/store_src.FsStoreStorageAdapterOptions"},{"type":"link","label":"Interface: GenerateOperationsConfig","href":"/docs/api/interfaces/types_src.YamlConfig.GenerateOperationsConfig"},{"type":"link","label":"Interface: GetFromMockStoreConfig","href":"/docs/api/interfaces/types_src.YamlConfig.GetFromMockStoreConfig"},{"type":"link","label":"Interface: GraphQLHandler","href":"/docs/api/interfaces/types_src.YamlConfig.GraphQLHandler"},{"type":"link","label":"Interface: GrpcCredentialsSsl","href":"/docs/api/interfaces/types_src.YamlConfig.GrpcCredentialsSsl"},{"type":"link","label":"Interface: GrpcHandler","href":"/docs/api/interfaces/types_src.YamlConfig.GrpcHandler"},{"type":"link","label":"Interface: HTTPSConfig","href":"/docs/api/interfaces/types_src.YamlConfig.HTTPSConfig"},{"type":"link","label":"Interface: Handler","href":"/docs/api/interfaces/types_src.YamlConfig.Handler"},{"type":"link","label":"Interface: InMemoryLRUConfig","href":"/docs/api/interfaces/types_src.YamlConfig.InMemoryLRUConfig"},{"type":"link","label":"Interface: JSONSchemaObject","href":"/docs/api/interfaces/json_machete_src.JSONSchemaObject"},{"type":"link","label":"Interface: JSONSchemaVisitorContext&lt;T\\\\&gt;","href":"/docs/api/interfaces/json_machete_src.JSONSchemaVisitorContext"},{"type":"link","label":"Interface: JsonSchemaHandler","href":"/docs/api/interfaces/types_src.YamlConfig.JsonSchemaHandler"},{"type":"link","label":"Interface: JsonSchemaOperation","href":"/docs/api/interfaces/types_src.YamlConfig.JsonSchemaOperation"},{"type":"link","label":"Interface: KeyAnnotation","href":"/docs/api/interfaces/types_src.YamlConfig.KeyAnnotation"},{"type":"link","label":"Interface: KeyValueCache&lt;V\\\\&gt;","href":"/docs/api/interfaces/types_src.KeyValueCache"},{"type":"link","label":"Interface: KeyValueCacheSetOptions","href":"/docs/api/interfaces/types_src.KeyValueCacheSetOptions"},{"type":"link","label":"Interface: LimitHelperArgsOpts","href":"/docs/api/interfaces/types_src.YamlConfig.LimitHelperArgsOpts"},{"type":"link","label":"Interface: LiveQueryInvalidation","href":"/docs/api/interfaces/types_src.YamlConfig.LiveQueryInvalidation"},{"type":"link","label":"Interface: LoadOptions","href":"/docs/api/interfaces/types_src.YamlConfig.LoadOptions"},{"type":"link","label":"Interface: LocalforageConfig","href":"/docs/api/interfaces/types_src.YamlConfig.LocalforageConfig"},{"type":"link","label":"Interface: MergedRootFieldConfig","href":"/docs/api/interfaces/types_src.YamlConfig.MergedRootFieldConfig"},{"type":"link","label":"Interface: MergedTypeConfig","href":"/docs/api/interfaces/types_src.YamlConfig.MergedTypeConfig"},{"type":"link","label":"Interface: MergedTypeField","href":"/docs/api/interfaces/types_src.YamlConfig.MergedTypeField"},{"type":"link","label":"Interface: MeshHandler&lt;TContext\\\\&gt;","href":"/docs/api/interfaces/types_src.MeshHandler"},{"type":"link","label":"Interface: MeshHandlerLibrary&lt;TConfig, TContext\\\\&gt;","href":"/docs/api/interfaces/types_src.MeshHandlerLibrary"},{"type":"link","label":"Interface: MeshInstance","href":"/docs/api/interfaces/runtime_src.MeshInstance"},{"type":"link","label":"Interface: MeshMerger","href":"/docs/api/interfaces/types_src.MeshMerger"},{"type":"link","label":"Interface: MeshMergerContext","href":"/docs/api/interfaces/types_src.MeshMergerContext"},{"type":"link","label":"Interface: MeshMergerLibrary","href":"/docs/api/interfaces/types_src.MeshMergerLibrary"},{"type":"link","label":"Interface: MeshMergerOptions","href":"/docs/api/interfaces/types_src.MeshMergerOptions"},{"type":"link","label":"Interface: MeshPubSub","href":"/docs/api/interfaces/types_src.MeshPubSub"},{"type":"link","label":"Interface: MeshTransform","href":"/docs/api/interfaces/types_src.MeshTransform"},{"type":"link","label":"Interface: MeshTransformLibrary&lt;Config\\\\&gt;","href":"/docs/api/interfaces/types_src.MeshTransformLibrary"},{"type":"link","label":"Interface: MeshTransformOptions&lt;Config\\\\&gt;","href":"/docs/api/interfaces/types_src.MeshTransformOptions"},{"type":"link","label":"Interface: MockingConfig","href":"/docs/api/interfaces/types_src.YamlConfig.MockingConfig"},{"type":"link","label":"Interface: MockingFieldConfig","href":"/docs/api/interfaces/types_src.YamlConfig.MockingFieldConfig"},{"type":"link","label":"Interface: MongooseHandler","href":"/docs/api/interfaces/types_src.YamlConfig.MongooseHandler"},{"type":"link","label":"Interface: MongooseModel","href":"/docs/api/interfaces/types_src.YamlConfig.MongooseModel"},{"type":"link","label":"Interface: MySQLHandler","href":"/docs/api/interfaces/types_src.YamlConfig.MySQLHandler"},{"type":"link","label":"Interface: NamingConventionTransformConfig","href":"/docs/api/interfaces/types_src.YamlConfig.NamingConventionTransformConfig"},{"type":"link","label":"Interface: Neo4JHandler","href":"/docs/api/interfaces/types_src.YamlConfig.Neo4JHandler"},{"type":"link","label":"Interface: ODataHandler","href":"/docs/api/interfaces/types_src.YamlConfig.ODataHandler"},{"type":"link","label":"Interface: OpenapiHandler","href":"/docs/api/interfaces/types_src.YamlConfig.OpenapiHandler"},{"type":"link","label":"Interface: PaginationResolverOpts","href":"/docs/api/interfaces/types_src.YamlConfig.PaginationResolverOpts"},{"type":"link","label":"Interface: PostGraphileHandler","href":"/docs/api/interfaces/types_src.YamlConfig.PostGraphileHandler"},{"type":"link","label":"Interface: PrefixTransformConfig","href":"/docs/api/interfaces/types_src.YamlConfig.PrefixTransformConfig"},{"type":"link","label":"Interface: ProtoFilePath","href":"/docs/api/interfaces/types_src.YamlConfig.ProtoFilePath"},{"type":"link","label":"Interface: PubSubConfig","href":"/docs/api/interfaces/types_src.YamlConfig.PubSubConfig"},{"type":"link","label":"Interface: ReadFileOrUrlOptions","href":"/docs/api/interfaces/utils_src.ReadFileOrUrlOptions"},{"type":"link","label":"Interface: RecordHelperArgsOpts","href":"/docs/api/interfaces/types_src.YamlConfig.RecordHelperArgsOpts"},{"type":"link","label":"Interface: RedisConfig","href":"/docs/api/interfaces/types_src.YamlConfig.RedisConfig"},{"type":"link","label":"Interface: RenameConfig","href":"/docs/api/interfaces/types_src.YamlConfig.RenameConfig"},{"type":"link","label":"Interface: RenameConfig1","href":"/docs/api/interfaces/types_src.YamlConfig.RenameConfig1"},{"type":"link","label":"Interface: RenameTransform","href":"/docs/api/interfaces/types_src.YamlConfig.RenameTransform"},{"type":"link","label":"Interface: RenameTransformObject","href":"/docs/api/interfaces/types_src.YamlConfig.RenameTransformObject"},{"type":"link","label":"Interface: ReplaceFieldConfig","href":"/docs/api/interfaces/types_src.YamlConfig.ReplaceFieldConfig"},{"type":"link","label":"Interface: ReplaceFieldConfig1","href":"/docs/api/interfaces/types_src.YamlConfig.ReplaceFieldConfig1"},{"type":"link","label":"Interface: ReplaceFieldTransformConfig","href":"/docs/api/interfaces/types_src.YamlConfig.ReplaceFieldTransformConfig"},{"type":"link","label":"Interface: ReplaceFieldTransformObject","href":"/docs/api/interfaces/types_src.YamlConfig.ReplaceFieldTransformObject"},{"type":"link","label":"Interface: ResolveReferenceObject","href":"/docs/api/interfaces/types_src.YamlConfig.ResolveReferenceObject"},{"type":"link","label":"Interface: ResolversCompositionTransform","href":"/docs/api/interfaces/types_src.YamlConfig.ResolversCompositionTransform"},{"type":"link","label":"Interface: ResolversCompositionTransformObject","href":"/docs/api/interfaces/types_src.YamlConfig.ResolversCompositionTransformObject"},{"type":"link","label":"Interface: SDKConfig","href":"/docs/api/interfaces/types_src.YamlConfig.SDKConfig"},{"type":"link","label":"Interface: SelectQueryOrMutationFieldConfig","href":"/docs/api/interfaces/types_src.YamlConfig.SelectQueryOrMutationFieldConfig"},{"type":"link","label":"Interface: ServeConfig","href":"/docs/api/interfaces/types_src.YamlConfig.ServeConfig"},{"type":"link","label":"Interface: SnapshotTransformConfig","href":"/docs/api/interfaces/types_src.YamlConfig.SnapshotTransformConfig"},{"type":"link","label":"Interface: SoapHandler","href":"/docs/api/interfaces/types_src.YamlConfig.SoapHandler"},{"type":"link","label":"Interface: SoapSecurityBasicAuthConfig","href":"/docs/api/interfaces/types_src.YamlConfig.SoapSecurityBasicAuthConfig"},{"type":"link","label":"Interface: SoapSecurityCertificateConfig","href":"/docs/api/interfaces/types_src.YamlConfig.SoapSecurityCertificateConfig"},{"type":"link","label":"Interface: SortHelperArgsOpts","href":"/docs/api/interfaces/types_src.YamlConfig.SortHelperArgsOpts"},{"type":"link","label":"Interface: Source","href":"/docs/api/interfaces/types_src.YamlConfig.Source"},{"type":"link","label":"Interface: TableField","href":"/docs/api/interfaces/types_src.YamlConfig.TableField"},{"type":"link","label":"Interface: ThriftHandler","href":"/docs/api/interfaces/types_src.YamlConfig.ThriftHandler"},{"type":"link","label":"Interface: Transform","href":"/docs/api/interfaces/types_src.YamlConfig.Transform"},{"type":"link","label":"Interface: TuqlHandler","href":"/docs/api/interfaces/types_src.YamlConfig.TuqlHandler"},{"type":"link","label":"Interface: TypeConverterResolversOpts","href":"/docs/api/interfaces/types_src.YamlConfig.TypeConverterResolversOpts"},{"type":"link","label":"Interface: TypeConverterResolversOpts1","href":"/docs/api/interfaces/types_src.YamlConfig.TypeConverterResolversOpts1"},{"type":"link","label":"Interface: TypeMergingConfig","href":"/docs/api/interfaces/types_src.YamlConfig.TypeMergingConfig"},{"type":"link","label":"Interface: UpdateMockStoreConfig","href":"/docs/api/interfaces/types_src.YamlConfig.UpdateMockStoreConfig"},{"type":"link","label":"Interface: UploadOptions","href":"/docs/api/interfaces/types_src.YamlConfig.UploadOptions"},{"type":"link","label":"Interface: WebhookHandler","href":"/docs/api/interfaces/types_src.YamlConfig.WebhookHandler"}]},{"collapsed":true,"type":"category","label":"Enums","items":[{"type":"link","label":"Enumeration: OnCircularReference","href":"/docs/api/enums/json_machete_src.OnCircularReference"},{"type":"link","label":"Enumeration: PredefinedProxyOptionsName","href":"/docs/api/enums/store_src.PredefinedProxyOptionsName"}]}]}]},"permalinkToSidebar":{"/docs/api/classes/cache_file_src.default":"sidebar","/docs/api/classes/cache_inmemory_lru_src.default":"sidebar","/docs/api/classes/cache_localforage_src.default":"sidebar","/docs/api/classes/cache_redis_src.default":"sidebar","/docs/api/classes/cache_store_src.default":"sidebar","/docs/api/classes/handlers_graphql_src.default":"sidebar","/docs/api/classes/handlers_grpc_src.default":"sidebar","/docs/api/classes/handlers_json_schema_src.default":"sidebar","/docs/api/classes/handlers_mongoose_src.default":"sidebar","/docs/api/classes/handlers_mysql_src.default":"sidebar","/docs/api/classes/handlers_neo4j_src.default":"sidebar","/docs/api/classes/handlers_odata_src.default":"sidebar","/docs/api/classes/handlers_openapi_src.default":"sidebar","/docs/api/classes/handlers_postgraphile_src.default":"sidebar","/docs/api/classes/handlers_soap_src.default":"sidebar","/docs/api/classes/handlers_thrift_src.default":"sidebar","/docs/api/classes/handlers_tuql_src.default":"sidebar","/docs/api/classes/mergers_bare_src.default":"sidebar","/docs/api/classes/mergers_federation_src.default":"sidebar","/docs/api/classes/mergers_stitching_src.default":"sidebar","/docs/api/classes/store_src.FsStoreStorageAdapter":"sidebar","/docs/api/classes/store_src.InMemoryStoreStorageAdapter":"sidebar","/docs/api/classes/store_src.MeshStore":"sidebar","/docs/api/classes/store_src.ReadonlyStoreError":"sidebar","/docs/api/classes/store_src.ValidationError":"sidebar","/docs/api/classes/transforms_cache_src.default":"sidebar","/docs/api/classes/transforms_encapsulate_src.default":"sidebar","/docs/api/classes/transforms_extend_src.default":"sidebar","/docs/api/classes/transforms_federation_src.default":"sidebar","/docs/api/classes/transforms_mock_src.default":"sidebar","/docs/api/classes/transforms_naming_convention_src.default":"sidebar","/docs/api/classes/transforms_replace_field_src.default":"sidebar","/docs/api/classes/transforms_resolvers_composition_src.default":"sidebar","/docs/api/classes/transforms_snapshot_src.default":"sidebar","/docs/api/classes/transforms_type_merging_src.default":"sidebar","/docs/api/classes/utils_src.DefaultLogger":"sidebar","/docs/api/enums/json_machete_src.OnCircularReference":"sidebar","/docs/api/enums/store_src.PredefinedProxyOptionsName":"sidebar","/docs/api/interfaces/json_machete_src.JSONSchemaObject":"sidebar","/docs/api/interfaces/json_machete_src.JSONSchemaVisitorContext":"sidebar","/docs/api/interfaces/runtime_src.MeshInstance":"sidebar","/docs/api/interfaces/store_src.FsStoreStorageAdapterOptions":"sidebar","/docs/api/interfaces/types_src.KeyValueCache":"sidebar","/docs/api/interfaces/types_src.KeyValueCacheSetOptions":"sidebar","/docs/api/interfaces/types_src.MeshHandler":"sidebar","/docs/api/interfaces/types_src.MeshHandlerLibrary":"sidebar","/docs/api/interfaces/types_src.MeshMerger":"sidebar","/docs/api/interfaces/types_src.MeshMergerContext":"sidebar","/docs/api/interfaces/types_src.MeshMergerLibrary":"sidebar","/docs/api/interfaces/types_src.MeshMergerOptions":"sidebar","/docs/api/interfaces/types_src.MeshPubSub":"sidebar","/docs/api/interfaces/types_src.MeshTransform":"sidebar","/docs/api/interfaces/types_src.MeshTransformLibrary":"sidebar","/docs/api/interfaces/types_src.MeshTransformOptions":"sidebar","/docs/api/interfaces/types_src.YamlConfig.AdditionalStitchingBatchResolverObject":"sidebar","/docs/api/interfaces/types_src.YamlConfig.AdditionalStitchingResolverObject":"sidebar","/docs/api/interfaces/types_src.YamlConfig.AdditionalSubscriptionObject":"sidebar","/docs/api/interfaces/types_src.YamlConfig.Cache":"sidebar","/docs/api/interfaces/types_src.YamlConfig.CacheEffectingOperationConfig":"sidebar","/docs/api/interfaces/types_src.YamlConfig.CacheInvalidateConfig":"sidebar","/docs/api/interfaces/types_src.YamlConfig.CacheTransformConfig":"sidebar","/docs/api/interfaces/types_src.YamlConfig.ComposeMongooseInputType":"sidebar","/docs/api/interfaces/types_src.YamlConfig.ComposeWithMongooseFieldsOpts":"sidebar","/docs/api/interfaces/types_src.YamlConfig.ComposeWithMongooseFieldsOpts1":"sidebar","/docs/api/interfaces/types_src.YamlConfig.ComposeWithMongooseOpts":"sidebar","/docs/api/interfaces/types_src.YamlConfig.ComposeWithMongooseResolverOpts":"sidebar","/docs/api/interfaces/types_src.YamlConfig.ComputedAnnotation":"sidebar","/docs/api/interfaces/types_src.YamlConfig.Config":"sidebar","/docs/api/interfaces/types_src.YamlConfig.CorsConfig":"sidebar","/docs/api/interfaces/types_src.YamlConfig.EncapsulateTransformApplyTo":"sidebar","/docs/api/interfaces/types_src.YamlConfig.EncapsulateTransformObject":"sidebar","/docs/api/interfaces/types_src.YamlConfig.ExpressHandler":"sidebar","/docs/api/interfaces/types_src.YamlConfig.ExtendTransform":"sidebar","/docs/api/interfaces/types_src.YamlConfig.FederationField":"sidebar","/docs/api/interfaces/types_src.YamlConfig.FederationFieldConfig":"sidebar","/docs/api/interfaces/types_src.YamlConfig.FederationObjectConfig":"sidebar","/docs/api/interfaces/types_src.YamlConfig.FederationTransform":"sidebar","/docs/api/interfaces/types_src.YamlConfig.FederationTransformType":"sidebar","/docs/api/interfaces/types_src.YamlConfig.FileCacheConfig":"sidebar","/docs/api/interfaces/types_src.YamlConfig.FilterHelperArgsOpts":"sidebar","/docs/api/interfaces/types_src.YamlConfig.FilterSchemaTransform":"sidebar","/docs/api/interfaces/types_src.YamlConfig.GenerateOperationsConfig":"sidebar","/docs/api/interfaces/types_src.YamlConfig.GetFromMockStoreConfig":"sidebar","/docs/api/interfaces/types_src.YamlConfig.GraphQLHandler":"sidebar","/docs/api/interfaces/types_src.YamlConfig.GrpcCredentialsSsl":"sidebar","/docs/api/interfaces/types_src.YamlConfig.GrpcHandler":"sidebar","/docs/api/interfaces/types_src.YamlConfig.Handler":"sidebar","/docs/api/interfaces/types_src.YamlConfig.HTTPSConfig":"sidebar","/docs/api/interfaces/types_src.YamlConfig.InMemoryLRUConfig":"sidebar","/docs/api/interfaces/types_src.YamlConfig.JsonSchemaHandler":"sidebar","/docs/api/interfaces/types_src.YamlConfig.JsonSchemaOperation":"sidebar","/docs/api/interfaces/types_src.YamlConfig.KeyAnnotation":"sidebar","/docs/api/interfaces/types_src.YamlConfig.LimitHelperArgsOpts":"sidebar","/docs/api/interfaces/types_src.YamlConfig.LiveQueryInvalidation":"sidebar","/docs/api/interfaces/types_src.YamlConfig.LoadOptions":"sidebar","/docs/api/interfaces/types_src.YamlConfig.LocalforageConfig":"sidebar","/docs/api/interfaces/types_src.YamlConfig.MergedRootFieldConfig":"sidebar","/docs/api/interfaces/types_src.YamlConfig.MergedTypeConfig":"sidebar","/docs/api/interfaces/types_src.YamlConfig.MergedTypeField":"sidebar","/docs/api/interfaces/types_src.YamlConfig.MockingConfig":"sidebar","/docs/api/interfaces/types_src.YamlConfig.MockingFieldConfig":"sidebar","/docs/api/interfaces/types_src.YamlConfig.MongooseHandler":"sidebar","/docs/api/interfaces/types_src.YamlConfig.MongooseModel":"sidebar","/docs/api/interfaces/types_src.YamlConfig.MySQLHandler":"sidebar","/docs/api/interfaces/types_src.YamlConfig.NamingConventionTransformConfig":"sidebar","/docs/api/interfaces/types_src.YamlConfig.Neo4JHandler":"sidebar","/docs/api/interfaces/types_src.YamlConfig.ODataHandler":"sidebar","/docs/api/interfaces/types_src.YamlConfig.OpenapiHandler":"sidebar","/docs/api/interfaces/types_src.YamlConfig.PaginationResolverOpts":"sidebar","/docs/api/interfaces/types_src.YamlConfig.PostGraphileHandler":"sidebar","/docs/api/interfaces/types_src.YamlConfig.PrefixTransformConfig":"sidebar","/docs/api/interfaces/types_src.YamlConfig.ProtoFilePath":"sidebar","/docs/api/interfaces/types_src.YamlConfig.PubSubConfig":"sidebar","/docs/api/interfaces/types_src.YamlConfig.RecordHelperArgsOpts":"sidebar","/docs/api/interfaces/types_src.YamlConfig.RedisConfig":"sidebar","/docs/api/interfaces/types_src.YamlConfig.RenameConfig":"sidebar","/docs/api/interfaces/types_src.YamlConfig.RenameConfig1":"sidebar","/docs/api/interfaces/types_src.YamlConfig.RenameTransform":"sidebar","/docs/api/interfaces/types_src.YamlConfig.RenameTransformObject":"sidebar","/docs/api/interfaces/types_src.YamlConfig.ReplaceFieldConfig":"sidebar","/docs/api/interfaces/types_src.YamlConfig.ReplaceFieldConfig1":"sidebar","/docs/api/interfaces/types_src.YamlConfig.ReplaceFieldTransformConfig":"sidebar","/docs/api/interfaces/types_src.YamlConfig.ReplaceFieldTransformObject":"sidebar","/docs/api/interfaces/types_src.YamlConfig.ResolveReferenceObject":"sidebar","/docs/api/interfaces/types_src.YamlConfig.ResolversCompositionTransform":"sidebar","/docs/api/interfaces/types_src.YamlConfig.ResolversCompositionTransformObject":"sidebar","/docs/api/interfaces/types_src.YamlConfig.SDKConfig":"sidebar","/docs/api/interfaces/types_src.YamlConfig.SelectQueryOrMutationFieldConfig":"sidebar","/docs/api/interfaces/types_src.YamlConfig.ServeConfig":"sidebar","/docs/api/interfaces/types_src.YamlConfig.SnapshotTransformConfig":"sidebar","/docs/api/interfaces/types_src.YamlConfig.SoapHandler":"sidebar","/docs/api/interfaces/types_src.YamlConfig.SoapSecurityBasicAuthConfig":"sidebar","/docs/api/interfaces/types_src.YamlConfig.SoapSecurityCertificateConfig":"sidebar","/docs/api/interfaces/types_src.YamlConfig.SortHelperArgsOpts":"sidebar","/docs/api/interfaces/types_src.YamlConfig.Source":"sidebar","/docs/api/interfaces/types_src.YamlConfig.TableField":"sidebar","/docs/api/interfaces/types_src.YamlConfig.ThriftHandler":"sidebar","/docs/api/interfaces/types_src.YamlConfig.Transform":"sidebar","/docs/api/interfaces/types_src.YamlConfig.TuqlHandler":"sidebar","/docs/api/interfaces/types_src.YamlConfig.TypeConverterResolversOpts":"sidebar","/docs/api/interfaces/types_src.YamlConfig.TypeConverterResolversOpts1":"sidebar","/docs/api/interfaces/types_src.YamlConfig.TypeMergingConfig":"sidebar","/docs/api/interfaces/types_src.YamlConfig.UpdateMockStoreConfig":"sidebar","/docs/api/interfaces/types_src.YamlConfig.UploadOptions":"sidebar","/docs/api/interfaces/types_src.YamlConfig.WebhookHandler":"sidebar","/docs/api/interfaces/utils_src.ReadFileOrUrlOptions":"sidebar","/docs/api/modules/cache-file":"sidebar","/docs/api/modules/cache-inmemory-lru":"sidebar","/docs/api/modules/cache-localforage":"sidebar","/docs/api/modules/cache-redis":"sidebar","/docs/api/modules/cache-store":"sidebar","/docs/api/modules/cli":"sidebar","/docs/api/modules/config":"sidebar","/docs/api/modules/graphql":"sidebar","/docs/api/modules/grpc":"sidebar","/docs/api/modules/json-machete":"sidebar","/docs/api/modules/json-schema":"sidebar","/docs/api/modules/merger-bare":"sidebar","/docs/api/modules/merger-federation":"sidebar","/docs/api/modules/merger-stitching":"sidebar","/docs/api/modules/mongoose":"sidebar","/docs/api/modules/mysql":"sidebar","/docs/api/modules/neo4j":"sidebar","/docs/api/modules/odata":"sidebar","/docs/api/modules/openapi":"sidebar","/docs/api/modules/postgraphile":"sidebar","/docs/api/modules/replace-field":"sidebar","/docs/api/modules/runtime":"sidebar","/docs/api/modules/soap":"sidebar","/docs/api/modules/store":"sidebar","/docs/api/modules/thrift":"sidebar","/docs/api/modules/transform-cache":"sidebar","/docs/api/modules/transform-encapsulate":"sidebar","/docs/api/modules/transform-extend":"sidebar","/docs/api/modules/transform-federation":"sidebar","/docs/api/modules/transform-filter-schema":"sidebar","/docs/api/modules/transform-mock":"sidebar","/docs/api/modules/transform-naming-convention":"sidebar","/docs/api/modules/transform-prefix":"sidebar","/docs/api/modules/transform-rename":"sidebar","/docs/api/modules/transform-resolvers-composition":"sidebar","/docs/api/modules/transform-snapshot":"sidebar","/docs/api/modules/transform-type-merging":"sidebar","/docs/api/modules/tuql":"sidebar","/docs/api/modules/types":"sidebar","/docs/api/modules/utils":"sidebar","/docs/cache/cache-file":"sidebar","/docs/cache/cache-redis":"sidebar","/docs/cache/inmemory-lru":"sidebar","/docs/cache/localforage":"sidebar","/docs/getting-started/basic-example":"sidebar","/docs/getting-started/installation":"sidebar","/docs/getting-started/introduction":"sidebar","/docs/handlers/graphql":"sidebar","/docs/handlers/grpc":"sidebar","/docs/handlers/handlers-introduction":"sidebar","/docs/handlers/json-schema":"sidebar","/docs/handlers/mongoose":"sidebar","/docs/handlers/mysql":"sidebar","/docs/handlers/neo4j":"sidebar","/docs/handlers/odata":"sidebar","/docs/handlers/openapi":"sidebar","/docs/handlers/postgraphile":"sidebar","/docs/handlers/soap":"sidebar","/docs/handlers/thrift":"sidebar","/docs/handlers/tuql":"sidebar","/docs/recipes/as-gateway":"sidebar","/docs/recipes/as-sdk":"sidebar","/docs/recipes/build-mesh-artifacts":"sidebar","/docs/recipes/custom-server":"sidebar","/docs/recipes/live-queries":"sidebar","/docs/recipes/multiple-apis":"sidebar","/docs/recipes/subscriptions-webhooks":"sidebar","/docs/recipes/typescript":"sidebar","/docs/transforms/cache":"sidebar","/docs/transforms/encapsulate":"sidebar","/docs/transforms/extend":"sidebar","/docs/transforms/federation":"sidebar","/docs/transforms/filter-schema":"sidebar","/docs/transforms/mock":"sidebar","/docs/transforms/naming-convention":"sidebar","/docs/transforms/prefix":"sidebar","/docs/transforms/rename":"sidebar","/docs/transforms/resolvers-composition":"sidebar","/docs/transforms/snapshot":"sidebar","/docs/transforms/transforms-introduction":"sidebar","/docs/transforms/type-merging":"sidebar"}}')}}]);