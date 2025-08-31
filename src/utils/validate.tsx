export const checkValidData = (email: string, password: string) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );

  if (!isEmailValid)
    return "Email Id is not valid !! Please enter a correct email id";
  if (!isPasswordValid) return "Password is not valid !! please check again";
  return null;
};
