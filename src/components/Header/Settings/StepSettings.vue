<template lang="html">
  <div>
    <h6 class="step-id"> Step {{ step + 1 }} </h6>

    <!-- Getting errors on the text entry here because Vue hasn't been
         updated. Annoying as things seem to break when I do that. -->
    <!-- <v-text-field
              name='input-1'
              label='Label Text'
              id='testing'
              ></v-text-field> -->

    <div>
      <p class="label"> Tools required: </p>

      <v-btn
        :flat="!config.steps[step].tools.pan"
        class="tool elevation-1"
        small
        @click.native="config.steps[step].tools.pan = !config.steps[step].tools.pan"
      >
        <i
          :class="{
            'fa': true,
            'fa-lock': true,
            'faIcons': true,
          }"
        />
      </v-btn>

      <v-btn
        :flat="!config.steps[step].tools.circle"
        class="tool elevation-1"
        small
        @click.native="config.steps[step].tools.circle = !config.steps[step].tools.circle"
      >
        <i
          :class="{
            'fa': true,
            'fa-circle': true,
            'faIcons': true,
          }"
        />
      </v-btn>

      <v-btn
        :flat="!config.steps[step].tools.rectangle"
        class="tool elevation-1"
        small
        @click.native="config.steps[step].tools.rectangle = !config.steps[step].tools.rectangle"
      >
        <v-icon>
          crop_landscape
        </v-icon>
      </v-btn>

      <v-btn
        :flat="!config.steps[step].tools.pen"
        class="tool elevation-1"
        small
        @click.native="config.steps[step].tools.pen = !config.steps[step].tools.pen"
      >
        <v-icon>
          timeline
        </v-icon>
      </v-btn>

      <v-btn
        :flat="!config.steps[step].tools.pencil"
        class="tool elevation-1"
        small
        @click.native="config.steps[step].tools.pencil = !config.steps[step].tools.pencil"
      >
        <i
          :class="{
            'fa': true,
            'fa-pencil': true,
            'faIcons': true,
          }"
        />
      </v-btn>

      <v-btn
        :flat="!config.steps[step].tools.move"
        class="tool elevation-1"
        small
        @click.native="config.steps[step].tools.move = !config.steps[step].tools.move"
      >
        <i
          :class="{
            'fa': true,
            'fa-mouse-pointer': true,
            'faIcons': true,
          }"
        />
      </v-btn>

      <v-btn
        :flat="!config.steps[step].tools.node"
        class="tool elevation-1"
        small
        @click.native="config.steps[step].tools.node = !config.steps[step].tools.node"
      >
        <i
          :class="{
            'fa': true,
            'fa-location-arrow': true,
            'faIcons': true,
        }"/>
      </v-btn>

    </div>

  </div>
</template>

<script>
export default {

  props: {
    config: {
      type: Object,
      default: function () { return {} }
    },
    step: {
      type: Number,
      default: 1
    }
  },

  data () {
    return {
      title: ''
    }
  }
}
</script>

<style lang='css' scoped>

.step-id{
  padding-bottom: 20px;
  font-size: 18px;
}

.step-info {
  margin-bottom: 20px;
}

.instruction-input{
  font-size: 14px;
}

.label {
  color: rgba(0,0,0,0.38);
  font-size: 16px;
}
</style>
