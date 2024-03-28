export type UserCredentialResponse = 
  {
    id: String,
    email:String,
    full_name:String,
    username: String,
    dateOfBirth:Date,
    authProvider:String,
    status:String,
    createdAt:Date,
    updatedAt:Date,
    deleted: Boolean,
    user_profile: ProfileResponse
  }