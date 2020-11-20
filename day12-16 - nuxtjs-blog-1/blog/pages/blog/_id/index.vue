<template>
    <div class="wrapper-content wrapper-content--fixed">
        <section class="post">
            <div class="container">
                <div class="post-header">
                    <img :src="post.img" :alt="post.img">
                    <h1 class="title"> {{post.title}}</h1>
                    <p>{{post.descr}}</p>  
                </div>

                <div class="post-body">
                    <p>{{post.content}}</p>
                </div>
            
            </div>
        </section>

  </div>
</template>