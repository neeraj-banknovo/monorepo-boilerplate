import { Environment } from '../enums';

export const configMethods = {
  isLocalEnv: (): boolean => process.env.NODE_ENV === Environment.Local,
  isDevelopmentEnv: (): boolean => process.env.NODE_ENV === Environment.Development,
  isProductionEnv: (): boolean => process.env.NODE_ENV === Environment.Production,
  isTestEnv: (): boolean => process.env.NODE_ENV === Environment.Testing,
  isStageEnv: (): boolean => process.env.NODE_ENV === Environment.Staging,
};
