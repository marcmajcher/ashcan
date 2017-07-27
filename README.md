# Ashcan - A Place for Prototypes

Ashcan is a website that allows game designers and developers to make their game
prototypes available to playtesters, and allows players to play games in development
and provide feedback to the designers through playtest reports.

## Use Cases

### Use Case: Casual User

A Casual User is someone who comes to the site with no specific intentions. They
don't have a game to playtest, and they don't even know if they want to play anything yet.

A Casual User...

* should be able to see a list of the most recent open prototypes
* should be able to see a list of the most popular or active games
* should be able to search games by title, description, tags, length, number of players, or author/contributor
* should be able to see the page for a game release that is open to the public
* should be able to easily log into the site via Google sign-in
* should be able to easily log out of the site once logged in

### Use Case: Designer

A designer is a user that has one or more games that they're working on, and
they want to make one or more prototypes available to players or playtest groups
to get feedback on their design.

A Designer...

* should be able to log in to the site via Google sign-in
* should have the access same views as a Casual User
* should be able to create an entry for a new game prototype
* should be able to give a new game entry a name, and a short and long description
* should be able to tag their game with various categories
* should be able to add a teaser image to their game entry
* should have a default image for their new game entry if they don't have one
* should be able to add a new release version to their game entry
* should be able to specify the release phase of their game: development, alpha, beta, candidate, or gold
* should be able to specify a version number for their release
* should be able to specify whether a particular release is open or closed to testers
* should be able to upload assets for a game release
* should be able to view playtest reports for a game or release
* should be able to edit the attributes of a game or release
* should be able to change the public/private/closed state of a release
* should be able to get a list of all playtesters for a game
* should be able to invite playtesters to a private release
* should be able to schedule and announce a playtest and invite playtesters

### Use Case: Playtester

A Playtester is a user that wants to play game prototypes, and offer feedback to
the game designers.

* should be able to log in to the site via Google sign-in
* should have the access same views as a Casual User
* should be able to sign up for a playtest of a release of a public game
* should be able to request access to a private game
* should be able to see details for a game that they have access to
* should be able to download play materials and instructions for a game release
* should be able to log a playtest
* should be able to enter notes for a completed playtest

## Models

### User  

* Google Id
* First Name
* Last Name
* Credit Name
* Email Address
* Public or Private profile
* Language locale
* Thumbnail image
* Location
* Interests
* Currency 

### Game

* Title (unique?)
* Short description (pitch)
* Long description
* Number of players
* Play time
* Authors and contributors
  * Designers
  * Writers
  * Artists
  * Editors
* Tags
* Releases

### Release

* Game id
* Stage - development, alpha, beta, release, gold
* Version number
* Public, private, or closed
* Permitted users (if private)
* Game assets, files, etc
  * URLs at first - maybe host for $$$?
* Release notes and changes

### Playtest

* Release id
* List of playtesters
* Type of test - blind, live, remote, etc
* Date
* Location
* Number of players
* Feedback and notes from each player
