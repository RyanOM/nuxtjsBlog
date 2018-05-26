<template>
  <section>
    <section class="section is-medium" style="padding-top: 30px">
      <div class="container has-text-centered">
        <h1 class="title">Contact</h1>
        <p>
          You can reach out to me via the social networks listed on this site or by completing the contact form below.
        </p>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns ">
          <div class="column">
            <form name="contact" action="" method="post" netlify>
              <input type="hidden" name="form-name" value="contact-form" />
              <div class="field">
                <label class="label" for="name">Name</label>
                <div class="control">
                  <input class="input" type="text" placeholder="Obi Wan" required id="name" name="name">
                </div>
              </div>

              <div class="field">
                <label class="label" for="email">Email</label>
                <div class="control">
                  <input class="input" type="email" placeholder="kenobi@council.jd" required id="email" name="email">
                </div>
              </div>

              <div class="field">
                <label class="label" for="subject">Subject</label>
                <div class="control">
                  <input class="input" type="text" placeholder="Hello there!" required id="subject" name="subject">
                </div>
              </div>

              <div class="field">
                <label class="label" for="message">Message</label>
                <div class="control">
                  <textarea class="textarea" placeholder="Your message" required id="message" name="message"></textarea>
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <label class="checkbox">
                    <input type="checkbox">
                    I want to receive emails about news and articles about the blog and future projects. (I promise no spam)
                  </label>
                </div>
              </div>

              <div class="field is-grouped">
                <div class="control">
                  <button class="button is-link" type="submit">Submit</button>
                </div>
                <!--
                <div class="control">
                  <button class="button is-text">Cancel</button>
                </div>-->
              </div>

              <!--
              <div class="field">
                <label class="label">Username</label>
                <div class="control has-icons-left has-icons-right">
                  <input class="input is-success" type="text" placeholder="Text input" value="bulma">
                  <span class="icon is-small is-left">
                <i class="fa fa-user"></i>
              </span>
                  <span class="icon is-small is-right">
                <i class="fa fa-check"></i>
              </span>
                </div>
                <p class="help is-success">This username is available</p>
              </div>

              <div class="field">
                <label class="label">Email</label>
                <div class="control has-icons-left has-icons-right">
                  <input class="input is-danger" type="email" placeholder="Email input" value="hello@">
                  <span class="icon is-small is-left">
                <i class="fa fa-envelope"></i>
              </span>
                  <span class="icon is-small is-right">
                <i class="fa fa-exclamation-triangle"></i>
              </span>
                </div>
                <p class="help is-danger">This email is invalid</p>
              </div>

              <div class="field">
                <label class="label">Subject</label>
                <div class="control">
                  <div class="select">
                    <select>
                      <option>Select dropdown</option>
                      <option>With options</option>
                    </select>
                  </div>
                </div>

                <div class="field">
                  <div class="control">
                    <label class="radio">
                      <input type="radio" name="question">
                      Yes
                    </label>
                    <label class="radio">
                      <input type="radio" name="question">
                      No
                    </label>
                  </div>
                </div>
                </div>
                -->
            </form>
          </div>
          <div class="column" style="padding-left: 30px">
            <h3 class="title is-5">Where you can find me:</h3>
            <h3 class="title is-5">
              <span class="icon" style="color: #333;"><i class="fa fa-github"></i></span> &nbsp;<a href="https://github.com/ryanom" target="_blank">github.com/ryanom</a>
            </h3>
            <h3 class="title is-5">
              <span class="icon" style="color: #0077B5;"><i class="fa fa-linkedin"></i></span> &nbsp;<a href="https://www.linkedin.com/in/ryanomullan/" target="_blank">linkedin.com/in/ryanomullan</a>
            </h3>
            <h3 class="title is-5">
              <span class="icon" style="color: #0084b4;"><i class="fa fa-twitter"></i></span> &nbsp;<a href="https://twitter.com/ryanomullan" target="_blank">twitter.com/ryanomullan</a>
            </h3>
            <h3 class="title is-5">
              <span class="icon" style="color: dimgrey"><i class="fa fa-link"></i></span> &nbsp;<a href="http://ryan.omullan.com" target="_blank">ryan.omullan.com</a>
            </h3>
            <h3 class="title is-5">
              <span class="icon" style="color: lightslategrey"><i class="fa fa-envelope"></i></span> &nbsp;<a href="mailto:omullan.ryan@gmail.com" target="_blank">omullan.ryan@gmail.com</a>
            </h3>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
  export default {
    name: "contact.vue"
  }
</script>

<style scoped>

</style>
