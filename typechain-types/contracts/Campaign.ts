/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export declare namespace ICampaign {
  export type ConfigStruct = {
    token: PromiseOrValue<string>;
    start: PromiseOrValue<BigNumberish>;
    end: PromiseOrValue<BigNumberish>;
    presaleTokens: PromiseOrValue<BigNumberish>;
    liquidityTokens: PromiseOrValue<BigNumberish>;
    minPurchaseTokens: PromiseOrValue<BigNumberish>;
    maxPurchaseTokens: PromiseOrValue<BigNumberish>;
    softCap: PromiseOrValue<BigNumberish>;
    tokensPerBnb: PromiseOrValue<BigNumberish>;
    dex: PromiseOrValue<BigNumberish>;
    action: PromiseOrValue<BigNumberish>;
    liquidityPercent: PromiseOrValue<BigNumberish>;
    liquidityLockupPeriod: PromiseOrValue<BigNumberish>;
  };

  export type ConfigStructOutput = [
    string,
    number,
    number,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    number,
    number,
    number,
    number
  ] & {
    token: string;
    start: number;
    end: number;
    presaleTokens: BigNumber;
    liquidityTokens: BigNumber;
    minPurchaseTokens: BigNumber;
    maxPurchaseTokens: BigNumber;
    softCap: BigNumber;
    tokensPerBnb: BigNumber;
    dex: number;
    action: number;
    liquidityPercent: number;
    liquidityLockupPeriod: number;
  };
}

export interface CampaignInterface extends utils.Interface {
  functions: {
    "buyTokens()": FunctionFragment;
    "calculateTokens(uint256)": FunctionFragment;
    "config()": FunctionFragment;
    "contributors()": FunctionFragment;
    "factory()": FunctionFragment;
    "fee()": FunctionFragment;
    "finishPresale()": FunctionFragment;
    "finished()": FunctionFragment;
    "getPair()": FunctionFragment;
    "getReservedTokens()": FunctionFragment;
    "hardCap()": FunctionFragment;
    "initialize(address,uint16,address,(address,uint32,uint32,uint256,uint256,uint256,uint256,uint256,uint256,uint8,uint8,uint16,uint32))": FunctionFragment;
    "lpLocked()": FunctionFragment;
    "lp_lock_until()": FunctionFragment;
    "owner()": FunctionFragment;
    "raised()": FunctionFragment;
    "refund()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "reserved_bnbs(address)": FunctionFragment;
    "reserved_tokens(address)": FunctionFragment;
    "reset()": FunctionFragment;
    "reseted()": FunctionFragment;
    "router()": FunctionFragment;
    "sweep(address,address)": FunctionFragment;
    "tokens_sold()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "unlockLiquidity()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "buyTokens"
      | "calculateTokens"
      | "config"
      | "contributors"
      | "factory"
      | "fee"
      | "finishPresale"
      | "finished"
      | "getPair"
      | "getReservedTokens"
      | "hardCap"
      | "initialize"
      | "lpLocked"
      | "lp_lock_until"
      | "owner"
      | "raised"
      | "refund"
      | "renounceOwnership"
      | "reserved_bnbs"
      | "reserved_tokens"
      | "reset"
      | "reseted"
      | "router"
      | "sweep"
      | "tokens_sold"
      | "transferOwnership"
      | "unlockLiquidity"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "buyTokens", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "calculateTokens",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "config", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "contributors",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "factory", values?: undefined): string;
  encodeFunctionData(functionFragment: "fee", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "finishPresale",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "finished", values?: undefined): string;
  encodeFunctionData(functionFragment: "getPair", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getReservedTokens",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "hardCap", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      ICampaign.ConfigStruct
    ]
  ): string;
  encodeFunctionData(functionFragment: "lpLocked", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "lp_lock_until",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "raised", values?: undefined): string;
  encodeFunctionData(functionFragment: "refund", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "reserved_bnbs",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "reserved_tokens",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "reset", values?: undefined): string;
  encodeFunctionData(functionFragment: "reseted", values?: undefined): string;
  encodeFunctionData(functionFragment: "router", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "sweep",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "tokens_sold",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "unlockLiquidity",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "buyTokens", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "calculateTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "config", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "contributors",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "finishPresale",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "finished", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getPair", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getReservedTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "hardCap", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lpLocked", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lp_lock_until",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "raised", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "refund", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "reserved_bnbs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "reserved_tokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "reset", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "reseted", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "router", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sweep", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tokens_sold",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unlockLiquidity",
    data: BytesLike
  ): Result;

  events: {
    "FeeTaken(uint256)": EventFragment;
    "Initialized(uint8)": EventFragment;
    "LiquidityAdded(uint256,uint256,uint256,uint32)": EventFragment;
    "LiquidityReleased()": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Refund(address,uint256,uint256)": EventFragment;
    "Reset()": EventFragment;
    "TokensRealized(address,uint256)": EventFragment;
    "TokensReserve(address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "FeeTaken"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LiquidityAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LiquidityReleased"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Refund"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Reset"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokensRealized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokensReserve"): EventFragment;
}

export interface FeeTakenEventObject {
  bnb_amount: BigNumber;
}
export type FeeTakenEvent = TypedEvent<[BigNumber], FeeTakenEventObject>;

export type FeeTakenEventFilter = TypedEventFilter<FeeTakenEvent>;

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface LiquidityAddedEventObject {
  bnb_amount: BigNumber;
  token_amount: BigNumber;
  lp_tokens: BigNumber;
  lock_until: number;
}
export type LiquidityAddedEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, number],
  LiquidityAddedEventObject
>;

export type LiquidityAddedEventFilter = TypedEventFilter<LiquidityAddedEvent>;

export interface LiquidityReleasedEventObject {}
export type LiquidityReleasedEvent = TypedEvent<
  [],
  LiquidityReleasedEventObject
>;

export type LiquidityReleasedEventFilter =
  TypedEventFilter<LiquidityReleasedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface RefundEventObject {
  user: string;
  bnb_val: BigNumber;
  tokens_amount: BigNumber;
}
export type RefundEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  RefundEventObject
>;

export type RefundEventFilter = TypedEventFilter<RefundEvent>;

export interface ResetEventObject {}
export type ResetEvent = TypedEvent<[], ResetEventObject>;

export type ResetEventFilter = TypedEventFilter<ResetEvent>;

export interface TokensRealizedEventObject {
  user: string;
  tokens_amount: BigNumber;
}
export type TokensRealizedEvent = TypedEvent<
  [string, BigNumber],
  TokensRealizedEventObject
>;

export type TokensRealizedEventFilter = TypedEventFilter<TokensRealizedEvent>;

export interface TokensReserveEventObject {
  user: string;
  bnb_val: BigNumber;
  tokens_amount: BigNumber;
}
export type TokensReserveEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  TokensReserveEventObject
>;

export type TokensReserveEventFilter = TypedEventFilter<TokensReserveEvent>;

export interface Campaign extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CampaignInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    buyTokens(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    calculateTokens(
      bnb_value: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        _tokens_to_buy: BigNumber;
        _refund_val: BigNumber;
        _buy_val: BigNumber;
      }
    >;

    config(
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        number,
        number,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        number,
        number,
        number
      ] & {
        token: string;
        start: number;
        end: number;
        presaleTokens: BigNumber;
        liquidityTokens: BigNumber;
        minPurchaseTokens: BigNumber;
        maxPurchaseTokens: BigNumber;
        softCap: BigNumber;
        tokensPerBnb: BigNumber;
        dex: number;
        action: number;
        liquidityPercent: number;
        liquidityLockupPeriod: number;
      }
    >;

    contributors(overrides?: CallOverrides): Promise<[BigNumber]>;

    factory(overrides?: CallOverrides): Promise<[string]>;

    fee(overrides?: CallOverrides): Promise<[number]>;

    finishPresale(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    finished(overrides?: CallOverrides): Promise<[boolean]>;

    getPair(overrides?: CallOverrides): Promise<[string]>;

    getReservedTokens(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    hardCap(overrides?: CallOverrides): Promise<[BigNumber]>;

    initialize(
      _owner: PromiseOrValue<string>,
      _fee: PromiseOrValue<BigNumberish>,
      _router: PromiseOrValue<string>,
      _config: ICampaign.ConfigStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    lpLocked(overrides?: CallOverrides): Promise<[BigNumber]>;

    lp_lock_until(overrides?: CallOverrides): Promise<[number]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    raised(overrides?: CallOverrides): Promise<[BigNumber]>;

    refund(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    reserved_bnbs(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    reserved_tokens(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    reset(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    reseted(overrides?: CallOverrides): Promise<[boolean]>;

    router(overrides?: CallOverrides): Promise<[string]>;

    sweep(
      token: PromiseOrValue<string>,
      receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    tokens_sold(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    unlockLiquidity(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  buyTokens(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  calculateTokens(
    bnb_value: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      _tokens_to_buy: BigNumber;
      _refund_val: BigNumber;
      _buy_val: BigNumber;
    }
  >;

  config(
    overrides?: CallOverrides
  ): Promise<
    [
      string,
      number,
      number,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      number,
      number,
      number,
      number
    ] & {
      token: string;
      start: number;
      end: number;
      presaleTokens: BigNumber;
      liquidityTokens: BigNumber;
      minPurchaseTokens: BigNumber;
      maxPurchaseTokens: BigNumber;
      softCap: BigNumber;
      tokensPerBnb: BigNumber;
      dex: number;
      action: number;
      liquidityPercent: number;
      liquidityLockupPeriod: number;
    }
  >;

  contributors(overrides?: CallOverrides): Promise<BigNumber>;

  factory(overrides?: CallOverrides): Promise<string>;

  fee(overrides?: CallOverrides): Promise<number>;

  finishPresale(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  finished(overrides?: CallOverrides): Promise<boolean>;

  getPair(overrides?: CallOverrides): Promise<string>;

  getReservedTokens(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  hardCap(overrides?: CallOverrides): Promise<BigNumber>;

  initialize(
    _owner: PromiseOrValue<string>,
    _fee: PromiseOrValue<BigNumberish>,
    _router: PromiseOrValue<string>,
    _config: ICampaign.ConfigStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  lpLocked(overrides?: CallOverrides): Promise<BigNumber>;

  lp_lock_until(overrides?: CallOverrides): Promise<number>;

  owner(overrides?: CallOverrides): Promise<string>;

  raised(overrides?: CallOverrides): Promise<BigNumber>;

  refund(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  reserved_bnbs(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  reserved_tokens(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  reset(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  reseted(overrides?: CallOverrides): Promise<boolean>;

  router(overrides?: CallOverrides): Promise<string>;

  sweep(
    token: PromiseOrValue<string>,
    receiver: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  tokens_sold(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  unlockLiquidity(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    buyTokens(overrides?: CallOverrides): Promise<void>;

    calculateTokens(
      bnb_value: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        _tokens_to_buy: BigNumber;
        _refund_val: BigNumber;
        _buy_val: BigNumber;
      }
    >;

    config(
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        number,
        number,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        number,
        number,
        number
      ] & {
        token: string;
        start: number;
        end: number;
        presaleTokens: BigNumber;
        liquidityTokens: BigNumber;
        minPurchaseTokens: BigNumber;
        maxPurchaseTokens: BigNumber;
        softCap: BigNumber;
        tokensPerBnb: BigNumber;
        dex: number;
        action: number;
        liquidityPercent: number;
        liquidityLockupPeriod: number;
      }
    >;

    contributors(overrides?: CallOverrides): Promise<BigNumber>;

    factory(overrides?: CallOverrides): Promise<string>;

    fee(overrides?: CallOverrides): Promise<number>;

    finishPresale(overrides?: CallOverrides): Promise<void>;

    finished(overrides?: CallOverrides): Promise<boolean>;

    getPair(overrides?: CallOverrides): Promise<string>;

    getReservedTokens(overrides?: CallOverrides): Promise<void>;

    hardCap(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _owner: PromiseOrValue<string>,
      _fee: PromiseOrValue<BigNumberish>,
      _router: PromiseOrValue<string>,
      _config: ICampaign.ConfigStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    lpLocked(overrides?: CallOverrides): Promise<BigNumber>;

    lp_lock_until(overrides?: CallOverrides): Promise<number>;

    owner(overrides?: CallOverrides): Promise<string>;

    raised(overrides?: CallOverrides): Promise<BigNumber>;

    refund(overrides?: CallOverrides): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    reserved_bnbs(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    reserved_tokens(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    reset(overrides?: CallOverrides): Promise<void>;

    reseted(overrides?: CallOverrides): Promise<boolean>;

    router(overrides?: CallOverrides): Promise<string>;

    sweep(
      token: PromiseOrValue<string>,
      receiver: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    tokens_sold(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    unlockLiquidity(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "FeeTaken(uint256)"(bnb_amount?: null): FeeTakenEventFilter;
    FeeTaken(bnb_amount?: null): FeeTakenEventFilter;

    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "LiquidityAdded(uint256,uint256,uint256,uint32)"(
      bnb_amount?: null,
      token_amount?: null,
      lp_tokens?: null,
      lock_until?: null
    ): LiquidityAddedEventFilter;
    LiquidityAdded(
      bnb_amount?: null,
      token_amount?: null,
      lp_tokens?: null,
      lock_until?: null
    ): LiquidityAddedEventFilter;

    "LiquidityReleased()"(): LiquidityReleasedEventFilter;
    LiquidityReleased(): LiquidityReleasedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "Refund(address,uint256,uint256)"(
      user?: PromiseOrValue<string> | null,
      bnb_val?: null,
      tokens_amount?: null
    ): RefundEventFilter;
    Refund(
      user?: PromiseOrValue<string> | null,
      bnb_val?: null,
      tokens_amount?: null
    ): RefundEventFilter;

    "Reset()"(): ResetEventFilter;
    Reset(): ResetEventFilter;

    "TokensRealized(address,uint256)"(
      user?: PromiseOrValue<string> | null,
      tokens_amount?: null
    ): TokensRealizedEventFilter;
    TokensRealized(
      user?: PromiseOrValue<string> | null,
      tokens_amount?: null
    ): TokensRealizedEventFilter;

    "TokensReserve(address,uint256,uint256)"(
      user?: PromiseOrValue<string> | null,
      bnb_val?: null,
      tokens_amount?: null
    ): TokensReserveEventFilter;
    TokensReserve(
      user?: PromiseOrValue<string> | null,
      bnb_val?: null,
      tokens_amount?: null
    ): TokensReserveEventFilter;
  };

  estimateGas: {
    buyTokens(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    calculateTokens(
      bnb_value: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    config(overrides?: CallOverrides): Promise<BigNumber>;

    contributors(overrides?: CallOverrides): Promise<BigNumber>;

    factory(overrides?: CallOverrides): Promise<BigNumber>;

    fee(overrides?: CallOverrides): Promise<BigNumber>;

    finishPresale(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    finished(overrides?: CallOverrides): Promise<BigNumber>;

    getPair(overrides?: CallOverrides): Promise<BigNumber>;

    getReservedTokens(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    hardCap(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _owner: PromiseOrValue<string>,
      _fee: PromiseOrValue<BigNumberish>,
      _router: PromiseOrValue<string>,
      _config: ICampaign.ConfigStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    lpLocked(overrides?: CallOverrides): Promise<BigNumber>;

    lp_lock_until(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    raised(overrides?: CallOverrides): Promise<BigNumber>;

    refund(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    reserved_bnbs(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    reserved_tokens(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    reset(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    reseted(overrides?: CallOverrides): Promise<BigNumber>;

    router(overrides?: CallOverrides): Promise<BigNumber>;

    sweep(
      token: PromiseOrValue<string>,
      receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    tokens_sold(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    unlockLiquidity(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    buyTokens(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    calculateTokens(
      bnb_value: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    config(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    contributors(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    fee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    finishPresale(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    finished(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPair(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getReservedTokens(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    hardCap(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      _owner: PromiseOrValue<string>,
      _fee: PromiseOrValue<BigNumberish>,
      _router: PromiseOrValue<string>,
      _config: ICampaign.ConfigStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    lpLocked(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lp_lock_until(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    raised(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    refund(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    reserved_bnbs(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    reserved_tokens(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    reset(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    reseted(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    router(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    sweep(
      token: PromiseOrValue<string>,
      receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    tokens_sold(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    unlockLiquidity(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
