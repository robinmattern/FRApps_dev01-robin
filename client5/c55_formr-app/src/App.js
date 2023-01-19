   import   React            from "react";
   import { Switch, Route }  from "react-router-dom";

   import   NavBar           from "./views/NavBar.js";                          // .(10915.07.1 RAM Was: ./components/NavBar.js)
   import   Home             from "./views/HomePage.js";                        // .(10915.07.2 RAM Was: ./components/HomePage.js)

   import   Login            from "./views/rauth/LoginForm.js";                 // .(10915.07.2 RAM Was: ./components/Access/..)
   import   Logout           from "./views/rauth/LogoutPage.js";                // .(10915.07.3)
   import   Register         from "./views/rauth/RegisterForm.js";              // .(10915.07.4)
   import   Profile          from "./views/rauth/ProfilePage.js";               // .(10915.07.5)
   import   ForgotPassword   from "./views/rauth/ForgotPasswordForm.js";        // .(10915.07.6)
   import   ResetPassword    from "./views/rauth/ResetPasswordForm.js";         // .(10915.07.7)
   import   ChangeProfile    from "./views/rauth/ChangeProfileForm.js";         // .(10915.07.8)

// import   DataEdit         from "./views/rauth/DataEdit.js"                   // .(10915.08.1 RAM Not Used??).(10916.01.1 RAM Used for BezKoder menus)
   import   AdminEdit        from "./views/admin/AdminEdit.js"                  // .(10915.08.2 RAM s.b. lowercase)
   import   WorldEdit        from "./views/world/WorldEdit.js"                  // .(10915.08.3)


function App() {
  return (
    <div>



      <NavBar />

      <div>
        <Switch>

          <Route exact path="/home"           component={ Home } />

          <Route exact path="/login"          component={ Login } />
          <Route exact path="/logout"         component={ Logout } />
          <Route exact path="/register"       component={ Register } />
          <Route exact path="/profile"        component={ Profile } />
          <Route exact path="/forgotpassword" component={ ForgotPassword } />
          <Route exact path="/resetpassword"  component={ ResetPassword } />
          <Route exact path="/changeprofile"  component={ ChangeProfile } />

{/*       <Route exact path="/admin"          component={ () => DataEdit( 'FormR' ) } />  */}
{/*       <Route exact path="/world"          component={ () => DataEdit( 'World' ) } />  */}     

          <Route exact path="/admin"          component={ AdminEdit } />     
          <Route exact path="/world"          component={ WorldEdit } />     
        </Switch>
      </div>

    </div>
    );
  }

export default App;
