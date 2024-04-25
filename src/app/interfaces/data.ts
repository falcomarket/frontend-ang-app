
export interface UserDto {
  username: string;
  password: string;
  role: string;
  // Vous pouvez ajouter d'autres champs selon les besoins de votre application, comme email, firstName, lastName, etc.
}


// Define an interface for the recovery response
export interface RecoveryResponse {
  message: string;
}
