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
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export declare namespace ICampaign {
  export type ConfigStruct = {
    token: PromiseOrValue<string>;
    start: PromiseOrValue<BigNumberish>;
    end: PromiseOrValue<BigNumberish>;
    presaleTokens: PromiseOrValue<BigNumberish>;
    liquidityTokens: PromiseOrValue<BigNumberish>;
    minPurchaseBnb: PromiseOrValue<BigNumberish>;
    maxPurchaseBnb: PromiseOrValue<BigNumberish>;
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
    minPurchaseBnb: BigNumber;
    maxPurchaseBnb: BigNumber;
    softCap: BigNumber;
    tokensPerBnb: BigNumber;
    dex: number;
    action: number;
    liquidityPercent: number;
    liquidityLockupPeriod: number;
  };
}

export interface ICampaignInterface extends utils.Interface {
  functions: {
    "initialize(address,uint16,address,(address,uint32,uint32,uint256,uint256,uint256,uint256,uint256,uint256,uint8,uint8,uint16,uint32))": FunctionFragment;
    "raised()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "initialize" | "raised"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "initialize",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      ICampaign.ConfigStruct
    ]
  ): string;
  encodeFunctionData(functionFragment: "raised", values?: undefined): string;

  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "raised", data: BytesLike): Result;

  events: {};
}

export interface ICampaign extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ICampaignInterface;

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
    initialize(
      _owner: PromiseOrValue<string>,
      _fee: PromiseOrValue<BigNumberish>,
      _router: PromiseOrValue<string>,
      _config: ICampaign.ConfigStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    raised(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  initialize(
    _owner: PromiseOrValue<string>,
    _fee: PromiseOrValue<BigNumberish>,
    _router: PromiseOrValue<string>,
    _config: ICampaign.ConfigStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  raised(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    initialize(
      _owner: PromiseOrValue<string>,
      _fee: PromiseOrValue<BigNumberish>,
      _router: PromiseOrValue<string>,
      _config: ICampaign.ConfigStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    raised(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    initialize(
      _owner: PromiseOrValue<string>,
      _fee: PromiseOrValue<BigNumberish>,
      _router: PromiseOrValue<string>,
      _config: ICampaign.ConfigStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    raised(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    initialize(
      _owner: PromiseOrValue<string>,
      _fee: PromiseOrValue<BigNumberish>,
      _router: PromiseOrValue<string>,
      _config: ICampaign.ConfigStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    raised(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
