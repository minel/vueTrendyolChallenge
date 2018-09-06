<template>
  <div class="createSession">
    <form id="createSession">
      <div class="textBoxes">
        <span>Session Name:</span>
        <input id="sessionName" type="text" required maxlength="200" />
        <span>Number of Voters:</span>
        <input id="voters" type="number" required min="1" />
      </div>
      <p>Paste your story List (Each line will be converted as a story)</p>
      <div>
        <textarea name="" id="storyList"></textarea>
      </div>
      <div class="submit">
        <input @click="createSession" type="submit" name="" id="button" value="Start Session">
      </div>
    </form>
  </div>
</template>

<script>

import { mapActions } from 'vuex';

export default {
  name: 'createSession',
  methods: {
    ...mapActions([
      '_createSession',
    ]),
    createSession() {
      let session = {
        sessionName: '',
        voters: '',
        storyList: [],
      };
      session.sessionName = document.getElementById('sessionName').value.trim();
      session.voters = document.getElementById('voters').value.trim();
      session.storyList = document.getElementById('storyList').value.trim().split('\n');
      this._createSession(session);
      //ScrumMaster sayfasına sessionName bilgisiyle gitmeli ki o name e ait storyler sayfada gösterilsin.
      this.$router.push({ name: 'ScrumMaster' });
    },
  },
}
</script>


<style>

.createSession p {
  text-align: left;
}

.textBoxes input {
  width: 30%;
}

input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}

#storyList {
  resize: none;
  width: 100%;
  height: 50vh;
}

.submit {
  text-align: right;
}

#button {
  text-align: center;
  width: 20%;
  border: none;
  background: #f27a1a;
  font-family: Open Sans, sans-serif;
  font-weight: bold;
  font-size: 0.7em;
  color: white;
  border-radius: 5px;
  padding: 8px 15px 8px 15px;
}

#button:hover {
  opacity: 0.9;
  cursor: pointer;
}


</style>
