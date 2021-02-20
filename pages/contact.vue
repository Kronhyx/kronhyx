<template>
  <section id="contact" class="contact">
    <b-container>
      <div class="section-title">
        <h2>Contact</h2>
        <p>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
          Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
          Quia fugiat sit in iste officiis commodi quidem hic quas.
        </p>
      </div>

      <b-row>
        <b-col lg="5">
          <div class="info">
            <div class="address">
              <i class="bx bx-map-pin" />
              <h4>Location:</h4>
              <p>A108 Adam Street, New York, NY 535022</p>
            </div>

            <div class="email">
              <i class="bx bx-envelope" />
              <h4>Email:</h4>
              <p>kronhyx@gmail.com</p>
            </div>

            <div class="phone">
              <i class="bx bx-phone" />
              <h4>Call:</h4>
              <p>+1 305 697 8854</p>
            </div>

            <iframe
              src="https://maps.google.com/maps?q=SKwezr&output=embed"
              style="height: 290px; width: 100%"
              frameborder="0"
              allowfullscreen
            />
          </div>
        </b-col>

        <b-col lg="7" align-self="stretch">
          <b-form>
            <b-card class="shadow border-0">
              <b-row>
                <b-col>
                  <b-form-group label="Your Name">
                    <b-form-input required />
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group label="Your Email">
                    <b-form-input type="email" required />
                  </b-form-group>
                </b-col>
              </b-row>
              <b-form-group label="Subject">
                <b-form-input required />
              </b-form-group>
              <b-form-group label="Message">
                <b-form-textarea :rows="12" required />
              </b-form-group>
              <div class="text-center">
                <b-btn variant="primary" size="lg" type="submit">
                  Send Message
                </b-btn>
              </div>
            </b-card>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import ResumeItem from '~/components/ResumeItem.vue'

@Component({ components: { ResumeItem } })
export default class ContactPage extends Vue {
}
</script>
