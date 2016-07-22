#Capybara and Travis-CI

###Learning Objectives
* Understand what Capybara is used for, BDD overview
* Understand continuous integration
* Add Travis-CI to a Rails project

##BDD and Capybara

###BDD Overview
* BDD behavior driven development, phrasing things in terms of a story.

###What is Capybara?
* Capybara is a tool that interacts with a website the way a human would (like visiting a url, clicking a link, typing text into a form and submitting it). It is used to emulate a user's flow through a website. 

###Let's Check it Out!
1. Copy the `shopping_list_app` into your `wdi/labs` folder
2. Make sure you are not inside a repo!
3. Run `bundle install`
4. Run `bundle exec rspec`

Look at all those tests! Let's go through what's happening.

### Capybara Matchers/ Structure
* `visit`
* `click_link, click_button,  click_on (links or buttons)`
* `fill_in`
* http://suvankar.svbtle.com/capybara-cheat-sheet
* `have_field, have_content, redirect_to, render`

### Interacting with forms:
* fill_in('First Name', :with => 'John')
* fill_in('Password', :with => 'Seekrit')
* fill_in('Description', :with => 'Really Long Text...')
* choose('A Radio Button')
* check('A Checkbox')
* uncheck('A Checkbox')
* attach_file('Image', '/path/to/image.jpg')
* select('Option', :from => 'Select Box')

##Continuous Integration

From [http://www.thoughtworks.com/continuous-integration](http://www.thoughtworks.com/continuous-integration): 

> Continuous Integration (CI) is a development practice that requires developers to integrate code into a shared repository several times a day. Each check-in is then verified by an automated build, allowing teams to detect problems early.

> By integrating regularly, you can detect errors quickly, and locate them more easily.

As a matter of fact, their full write-up on CI is pretty good. 

**Take 5 minutes to read it through, then discuss it with a partner.**

##Try It Out

Take a couple of minutes to create a repo for the `shopping_list_app` and push it up to GitHub.

###Set Up Travis-CI

 1. Head over to [https://travis-ci.org/](https://travis-ci.org/) and sign up with GitHub.
 2. Click on the + to the left to add a new repo from your list.
 3. Enable CI on one of your repos (use a rails repo for now)
 4. Push commits to that repo to trigger a CI run
 5. Create a new branch
 6. Add a `.travis.yml` file in that new branch:

	```yaml
	language: ruby
	rvm:
	  - 2.2.2
	  - 2.1.5
	cache: bundler
	script: bundle exec rspec
	```

 7. Commit and push
 8. Create a pull request to the master branch
 9. Add the build badge to your README:

	```markdown
	[![Build Status](https://travis-ci.org/<owner>/<repo>.svg?branch=master)](https://travis-ci.org/<owner>/<repo>)
	```

### The Docs

[http://docs.travis-ci.com/](http://docs.travis-ci.com/)

### Other CI Options:
* [Snap CI](https://snap-ci.com/)
* [Circle CI](https://circleci.com/?gclid=Cj0KEQjwvZq6BRC9kfq2zKfQ_94BEiQAOeUVC2KRqCM8vYlpMGDhuiFcGl05mRULgEWWGldnKHj2GYsaAoUb8P8HAQ)
* [Magnum CI](https://magnum-ci.com/)