
    <script setup>
        import { Icon } from '@iconify/vue';
    </script>


<template>
    <Icon icon="mdi-light:home" />
    <Icon icon="mdi-light:add-to-home-screen-rounded" />

        <div>
		<p>
			Block:
			<Icon icon="line-md:image-twotone" />
			<Icon icon="mdi:account-box-outline" />
		</p>
		<p>
			Inline:
			<Icon icon="line-md:image-twotone" :inline="true" />
			<Icon icon="mdi:account-box-outline" :inline="true" />
		</p>
	</div>
    <Icon icon="mdi-light:home" :height="24" />

<Icon icon="mdi-light:home" :width="16" :height="16" />
<Icon icon="eva:alert-triangle-fill" color="red" />
<Icon icon="eva:alert-triangle-fill" color="#f00" />
<Icon icon="eva:alert-triangle-fill" style="color: red;" />
<Icon icon="eva:alert-triangle-fill" :style="{color: 'red'}" />
<Icon icon="eva:alert-triangle-fill" :style="{color: '#f00'}" />
	<Icon icon="eva:alert-triangle-fill" class="red-icon" />

     <div>
       <div class="light-blue-block">
           All icons inside this div are light blue, including a bell icon
           <Icon icon="bi:bell-fill" :inline="true" />
           and stopwatch icon
           <Icon icon="bi:stopwatch" :inline="true" />
       </div>
       <div class="orange-block">
           This text and icon are orange:
           <Icon icon="bi:bell-fill" :inline="true" />
       </div>
       <div>
           Red home icons (shows different ways to change color):
           <Icon class="red-icon" icon="bx:bx-home" :inline="true" />
           <Icon :style="{ color: 'red' }" icon="bx:bx-home" :inline="true" />
           <Icon color="red" icon="bx:bx-home" :inline="true" />
       </div>
       <div>Icon with palette: <Icon icon="noto:paintbrush" :inline="true" /></div>
   </div>
</template>


<style>
.red-icon {
	color: red;
}
</style>
