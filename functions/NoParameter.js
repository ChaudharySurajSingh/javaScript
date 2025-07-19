
const noUserName = () => {
      console.log('User name is not provided. Do you want to search it from the database?');
      return 'UnknownUser';
    }
const noUserId = ()=>{

    console.log('User ID cannot be empty. Please provide a valid user ID.');
    return 'UnknownID';
}
function userLogin(userName=noUserName(),userId=noUserId()) {
    console.log(`${userName} logged in successfully with the reference ID ${userId + 'srj089'}`);
  }
  
  userLogin('suraj singh','lxn136');
  