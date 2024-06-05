<script lang="ts">
  import type { ActionData } from "./$types"
  
  export let form: ActionData
  
  let name = ''
</script>

<form method="post" action="/">
  <input name="name" type="text" bind:value={name} placeholder="Enter your name">
  <button>Submit</button>
</form>

{#if form}
  <p>{form.message}</p>
{/if}
