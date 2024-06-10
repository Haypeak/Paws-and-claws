# Paws-and-claws
All developments for the paws and claws project

In the repository there are two folders `dev` and `main`.

### dev

This is for all development work that needs to be tested before being deployed.
After the feature is developed, the Testers will write tests for the feature and place the tests in the **tests folder**. Until the feature is tested, The feature will not be added to the main folder.
All features will need to have comments that state how each feature is implemented, the resources needed for implementation and the type of the data it inputs and outputs.

The dev folder will be used as a open space to try all the different features before the feature is deployed

### Main

This is the main project folder. This folder will contain code and documentation for the project.
Without proper tests and validation no code will be placed in this folder.
This is to prevent breaks in the website when it is deployed so for every implementation made, it will have to be tested and validated by the testers and devops engineers before the feature is deployed. This does not mean that there would have to be a long meeting to validate the feature, just after the testers and Devops engineers have tested the feature and made sure there are no problems the feature can be added to the main folder. 

The templates folder holds the html files that will be used in the website, flask calls the pages templates
so what we'll have is a base template that contains all the things that are constant on every page like the header, footer, links to css files and js files.
The base file looks something like this
```jinja
<!Doctype html>
    <head>
        <!--links to css html javascript can go here if they are necessary for the way the page looks and not just functionality -->
        {% block head%}

        {% end block %}
    <head>
    <body>
        <header>
        <!-- header can go here-->
        </header>
        {% block body %}

        {% end block%}
        <footer>
            <!--footer can go here-->
        </footer>
    </body>
    <!-- other css and js files that can cause a slow page load can go at the bottom here-->
</html>
```

the other html files will look like

```jinja
{% extends "base.html" %}
{% block head %}
    code for the head goes here
{% end block %}

{% block body%}
    //Code for the body goes here
{% end block %}
```


:warning: Each file in the main folder would have to be well documented to allow the other developers working with you to easily understand what you have done. This will also prevent unnecessary crashing due to lack of proper dependencies.



### What we are building

- A feature to handle animal records and display them on the user profile screen.

- A feature to handle the buying and selling in the Animal shop

- A feature for newsletters and appointments
    * the appointments should be on a calendar-like page to allow the user to select available times

- An Admin Page
    * alllows admin to manage the appointments.
    * allows admin to manage the shop.
    * allows admin to send out newsletters.
    * allow admin to add client records.
    * allow admin to edit content on the pages.

    Roles
    - Admin
    - Maintainance
    - User

    Payments Methods
    - Stripe
    - Mobile money (**MTN**, AirtelTigo, **Telecel**)
    - *Paypal*



## EPICS

### Building a Veterinary Site

#### User Stories
-------------
1. The user should be able to sign up for a newsletter.

2. The user should be able to book appointmentss.

3. The user should be able to login and sign up to the site.

4. The user should be able to access the about us, our services and landing pages.






### Building a Pet shop site


