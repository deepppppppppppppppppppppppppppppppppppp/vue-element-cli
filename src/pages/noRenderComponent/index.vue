<template>
  <div id="app"
    class="font-sans text-black bg-grey-lighter px-8 py-8 min-h-screen">
    <div class="max-w-sm w-full mx-auto">
      <div class="mb-8">
        <h4 class="font-semibold text-grey-darker mb-2">no-render-component</h4>
        <tags-input v-model="tags">
          <!-- <tags-input :value="tags"> -->
          <div class="tags-input"
            slot-scope="{ tags, removeTag, inputAttrs, inputEvents }">
            <span class="tags-input-tag"
              v-for="tag in tags"
              :key="tag.id">
              <span>{{ tag }}</span>
              <button type="button"
                class="tags-input-remove"
                @click="removeTag(tag)">&times;</button>
            </span>

            <input class="tags-input-text"
              placeholder="Add tag..."
              v-on="inputEvents"
              v-bind="inputAttrs">
          </div>
        </tags-input>
      </div>

      <!-- <div>
        <h4 class="font-semibold text-grey-darker mb-2">Layout B</h4>
        <tags-input v-model="tags">
          <div slot-scope="{ tags, addTag, removeTag, inputAttrs, inputEvents }"
            class="p-4 rounded border bg-white">
            <div class="flex">
              <input class="text-input flex-1 mr-2"
                placeholder="New tag"
                v-on="inputEvents"
                v-bind="inputAttrs">
              <button type="button"
                class="btn btn-primary"
                @click="addTag">
                Add
              </button>
            </div>

            <ul v-show="tags.length > 0"
              class="mt-4 pl-6">
              <li v-for="tag in tags"
                class="mb-2">
                <span class="mr-2">{{ tag }}</span>
                <button class="text-grey-dark hover:text-grey-darkest underline text-sm"
                  @click="removeTag(tag)">Remove</button>
              </li>
            </ul>
          </div>
        </tags-input>
      </div> -->
    </div>
  </div>

</template>

<script>
  import './index.js'

  export default {
    name: 'renderComponent',
    data() {
      return {
        tags: ['Testing', 'Design', 'xcy']
      }
    },
    methods: {}
  }
</script>

<style scoped>
  .tags-input {
    display: flex;
    flex-wrap: wrap;
    background-color: #fff;
    border-width: 1px;
    border-radius: 0.25rem;
    padding-left: 0.5rem;
    padding-right: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.25rem;
  }

  .tags-input-tag {
    display: inline-flex;
    line-height: 1;
    align-items: center;
    font-size: 0.875rem;
    background-color: #bcdefa;
    color: #1c3d5a;
    border-radius: 0.25rem;
    user-select: none;
    padding: 0.25rem;
    margin-right: 0.5rem;
    margin-bottom: 0.25rem;
  }

  .tags-input-tag:last-of-type {
    margin-right: 0;
  }

  .tags-input-remove {
    color: #2779bd;
    font-size: 1.125rem;
    line-height: 1;
  }

  .tags-input-remove:first-child {
    margin-right: 0.25rem;
  }

  .tags-input-remove:last-child {
    margin-left: 0.25rem;
  }

  .tags-input-remove:focus {
    outline: 0;
  }

  .tags-input-text {
    flex: 1;
    outline: 0;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    margin-left: 0.5rem;
    margin-bottom: 0.25rem;
    min-width: 10rem;
  }

  .text-input {
    background-color: #fff;
    border-width: 1px;
    border-radius: 0.25rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    width: 100%;
  }

  .text-input:focus {
    outline: 0;
  }

  .btn {
    font-weight: 600;
    border-radius: 0.25rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }

  .btn-primary {
    color: #fff;
    background-color: #6574cd;
  }

  .btn-primary:hover {
    background-color: #7886d7;
  }

  .py-16 {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
</style>
