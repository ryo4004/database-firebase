import { User } from '../Library/Firebase/Authentication'

export interface SessionState {
  loading: boolean,
  user: User | false,
  error: {code: string, message: string}
}