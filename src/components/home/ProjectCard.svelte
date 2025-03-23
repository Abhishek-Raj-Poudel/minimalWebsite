<script>
export let title = "Ribera Solutions"
export let content = "A feature rich website filled with scroll-based animation powered by GSAP. Beautiful UI’s created with Tailwind css and the oveall web design done in Figma for consistant and responsive website."
export let badges = 
  [{
    name:"wordpress",
    icon:"wordpress"
},
{
    name:"tailwind",
    icon:"tailwind"
},
{
    name:"figma",
    icon:"figma"
},
{
    name:"gsap animaiton",
    icon:"gsap"
},

  ]

export let altBg = false;


</script>
<section class={`flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-2.5 pt-20 ${altBg ? "bg-background-alternative": "" }`}>
 <article class={`flex  flex-col-reverse ${altBg ? " lg:flex-row-reverse": "" } justify-between items-start flex-grow-0 flex-shrink-0 max-w-screen-xl gap-[120px] px-20`}>
        <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2.5">
          <img src="/images/mockups/riberasolution.webp" alt="Ribera Mockup"
            class="flex-grow-0 flex-shrink-0 w-[501px] h-[671px] object-cover border-t-4 border-r-4 border-b-0 border-l-4 border-[#444]" loading="lazy">


        </div>
        <div
          class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 max-w-[400px] relative gap-10 py-10">
          <h3 class="self-stretch flex-grow-0 flex-shrink-0 w-[400px] text-5xl font-bold text-left text-white">
        {title}
          </h3>
          <p class="self-stretch flex-grow-0 flex-shrink-0 w-[400px] text-xl text-left text-white">{content}</p>
          <ul class="flex flex-wrap gap-2 font-primary">
        {#each badges as badge}
<li class="flex p-2 border-2 border-border gap-2">
              <img src={`/images/icons/${badge.icon}.svg`} alt={badge.name} class="object-contain" width="20" height="20" loading="laxy" />
              <p class="text-xl text-left uppercase">{badge.name}</p>
            </li>
        {/each}
            
          </ul>
          <a
            class="font-primary flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-6 py-4 bg-[#ddd] border-2 border-[#aaa] text-black uppercase"
            style="box-shadow: 0px 6px 0px 0 #aaa;">
            <img src="/images/icons/download.svg" alt="download" width="16" height="16" loading="lazy">
            <p>Demo</p>
          </a>
        </div>
      </article>
    </section>
