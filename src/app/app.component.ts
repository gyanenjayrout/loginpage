import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'sign-up';


  signupUsers : any[]=[];
  signUpObj : any = {
    userName:'',
    email : '',
    password : ''

  };
  loginObj = 
  {
    userName:'',
    password : ''

  };
  ngOnInit(): void {
    
    
    const localData = localStorage.getItem('signupUsers ');
    if(localData != null)
    {
      this.signupUsers =JSON.parse(localData);
    }

  }
  onSignUp()
  {
    this.signupUsers.push(this.signUpObj);
    localStorage.setItem('signupUsers',JSON.stringify(this.signupUsers));
    this.signUpObj = {
      userName:'',
      email : '',
      password : ''
  


  };
}

onLogin()
{

 if(this.loginObj.userName !='' &&  this.loginObj.password !='')
 {
  alert('user login successfully');
 }
 else{
  alert('wrong credentials');
 }
}
}