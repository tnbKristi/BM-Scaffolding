generator-bbmodule - A Backbone/Marionette Scaffolding Helper
==============

Basic module scaffolding pattern for building sub-apps within a Backbone Marionette Application. 

Reference this repo for great pattern examples:  
http://github.com/davidsulc/marionette-gentle-introduction


# Installation

`npm install -g generator-bbmodule`

Make sure you have yeoman installed! `npm install -g yeoman`

# Usage

Start a new module, use the core generator:  
`yo bbmodule`

To create a sub-module or component, use the sub-generator:  
`yo bbmodule:submodule`

For both, you will be guided through the steps required to namespace your modules. 


## Example Folder Structure

```
module
 |- module.app.js
 |- submodule/
        |- submodule.controller.js
        |- submodule.view.js
        |- component/
            |- component.controller.js
            |- component.view.js
```

# Modules
- creates the app.js file
- is the base of the module "app"

# Submodules
- Hard rule: Modules have route handlers inside app
- live directly under module folder
- are rendered inside the app "mainView" 

# Components
- Usually live under submodules
- do not have route handlers (are considered "partials")
- Usually are rendered inside a submodule's layout's regions 
- Components may not have Controllers, just Views
- exceptions: components can be app-level or module-level 
