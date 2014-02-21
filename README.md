BM-Scaffolding
==============

Basic module scaffolding pattern for building sub-apps within a Backbone Marionette Application. 

Reference this repo for great pattern examples:

http://github.com/davidsulc/marionette-gentle-introduction


# Anatomy of an App
![Anatomy of an App](https://docs.google.com/drawings/d/1-RPDMfAtH2376cUGESFmfjTL3VlWG6QHTwSu3J0Mp68/pub?w=960&h=720)


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
