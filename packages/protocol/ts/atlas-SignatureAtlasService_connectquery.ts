// @generated by protoc-gen-connect-query v0.6.0 with parameter "target=ts,import_extension=none"
// @generated from file atlas.proto (package dm.atlas, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Empty, MethodKind } from "@bufbuild/protobuf";
import { SignatureReturn, SignatureReturns } from "./atlas_pb";
import { CharId } from "./shared_pb";
import { createQueryService, createUnaryHooks, UnaryFunctionsWithHooks } from "@connectrpc/connect-query";

export const typeName = "dm.atlas.SignatureAtlasService";

/**
 * @generated from service dm.atlas.SignatureAtlasService
 */
export const SignatureAtlasService = {
  typeName: "dm.atlas.SignatureAtlasService",
  methods: {
    /**
     * @generated from rpc dm.atlas.SignatureAtlasService.List
     */
    list: {
      name: "List",
      I: Empty,
      O: SignatureReturns,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc dm.atlas.SignatureAtlasService.ByCharId
     */
    byCharId: {
      name: "ByCharId",
      I: CharId,
      O: SignatureReturn,
      kind: MethodKind.Unary,
    },
  }
} as const;

const $queryService = createQueryService({  service: SignatureAtlasService,});

/**
 * @generated from rpc dm.atlas.SignatureAtlasService.List
 */
export const list: UnaryFunctionsWithHooks<Empty, SignatureReturns> = {   ...$queryService.list,  ...createUnaryHooks($queryService.list)};

/**
 * @generated from rpc dm.atlas.SignatureAtlasService.ByCharId
 */
export const byCharId: UnaryFunctionsWithHooks<CharId, SignatureReturn> = {   ...$queryService.byCharId,  ...createUnaryHooks($queryService.byCharId)};
