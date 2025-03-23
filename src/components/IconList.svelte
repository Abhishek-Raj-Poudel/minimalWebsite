<script>
export let icons = [
  {
    image:"Linkedin.svg",
    link:"https://www.linkedin.com/in/abhishek-raj-poudel/"
  },
//{
//    image:"instagram.svg",
//    link:"https://www.linkedin.com/in/abhishek-raj-poudel/"
//  },
{
    image:"github.svg",
    link:"https://github.com/abhishek-raj-poudel"
  },
  ];
export let width = 20;
export let height = 28;
</script>

<ul class="flex gap-5">
  {#each icons as icon}
    <li>
    <a href={icon.link}>
      <img src={`/images/icons/${icon.image}`} height={height} width={width} loading="eager" alt={icon.image}>
    </a>
    </li>
  {/each}
</ul>
