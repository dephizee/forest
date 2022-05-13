import { AppObject } from '@/shared/namespaces';

namespace UserNamespace {
  export interface User extends AppObject {
    username?: string;
    followers: number;
    followings: number;
    avatar?: string;
    banner?: string;
    walletAddress: string;
    emailAccount?: {
      verifyCodeExpiration: any;
      verified: boolean;
    };
    accountVerified?: boolean;
    publicId: string;
  }
}
