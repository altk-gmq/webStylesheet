 $(function(){
            //下拉列表
            $(".bdtd-selectInput").click(function(event){
                event.preventDefault()
                // 获取input文本值
                var oldValue = $(this).children(".selectbtn").attr('value');

                //增加类openlist 
                $(this).toggleClass("openlist");

                // 判断下列列表是否展开
                var isshow = $(this).next(".bdtd-selectMenu").css('display');
                if(isshow == 'none'){
                   $(this).next(".bdtd-selectMenu").slideDown(100);
                }else{
                   $(this).next(".bdtd-selectMenu").slideUp(50)
                };
                $(this).find(".bdtd-input").focus();
                $(this).next(".bdtd-selectMenu").children(".bdtd-menu-item").mousedown(function(event){
                    // 取消默认点击事件
                    event.preventDefault()

                    // 获取当前点击的li文本值
                    var thisValue = $(this).text()
                    // alert(thisValue)
                    // 替换input文本值
                    $(this).parent(".bdtd-selectMenu").prev().children(".selectbtn").attr('value',thisValue);

                    $(this).parent(".bdtd-selectMenu").slideUp(50);
                    // 去掉类openlist
                    $(this).parent(".bdtd-selectMenu").prev().removeClass('openlist');
                    $(this).parent(".bdtd-selectMenu").prev().children(".selectbtn").blur()
                });
                $(".selectbtn").blur(function(){
                    $(this).parent(".bdtd-selectInput").next(".bdtd-selectMenu").slideUp(50);
                    $(this).parent(".bdtd-selectInput").removeClass('openlist');
                });

            });
             //折叠面板
            $(".basemodel .bdtd-collapse-title").click(function(){
                $(this).toggleClass("collapse-item-active")
                $(this).next(".bdtd-collapse-content").slideToggle()
            });
            $(".sfqmodel .bdtd-collapse-title").click(function(){
                $(this).toggleClass("collapse-item-active")
                $(this).parent().siblings().children(".bdtd-collapse-title").removeClass("collapse-item-active")
                $(this).next(".bdtd-collapse-content").slideToggle()
                $(this).parent().siblings().children(".bdtd-collapse-content").slideUp()
            });
            //水平菜单
            $(".itemlist").mouseover(function(){
                $(this).addClass("itemlist-active");
            }).mouseout(function(){
                $(this).removeClass("itemlist-active")
            }).click(function(){
                $(this).addClass("itemlist-select");
                $(this).siblings().removeClass("itemlist-select");
                $(this).siblings().children(".itemlist-submenu-title").removeClass("itemlist-select");
            })
            $(".itemlist-submenu").mouseover(function(){
                $(this).addClass("itemlist-active");
                $(this).children(".itemlist-select-dropdown").show()
            }).mouseout(function(){
                $(this).removeClass("itemlist-active")
                $(this).children(".itemlist-select-dropdown").hide()
            });
            $(".itemlist-submenu .subitemlist").click(function(){
                // alert(123)
                $(this).parents(".itemlist-submenu").addClass("itemlist-select");
                $(this).parents(".itemlist-submenu").siblings(".itemlist").removeClass("itemlist-select")
            })

            //垂直菜单
            $(".vertical-itemlist").mouseover(function(){
                $(this).addClass("itemlist-active");
            }).mouseout(function(){
                $(this).removeClass("itemlist-active")
            }).click(function(){
                $(this).addClass("itemlist-select").siblings().removeClass("itemlist-select")
            })
            $(".vertical-itemlist-submenu .itemlist-submenu-title").mouseover(function(){
                $(this).addClass("itemlist-active");
                
            }).mouseout(function(){
                $(this).removeClass("itemlist-active")
            }).click(function(){
                $(this).next(".itemlist-select-dropdown").toggle();
                $(this).toggleClass("itemlist-select");
            });
            //关闭alert
            $(".closeAlert").click(function(){
              $(this).parents(".bdtd-alert").hide()
            })
            //tab切换
             $(".tab-title-item").click(function(){
              $(this).addClass("bdtd-this").siblings().removeClass("bdtd-this");
              $(".bdtd-tab-content .tab-content-item").eq(($(".tab-title-item").index(this))).addClass("bdtd-show").siblings().removeClass("bdtd-show");
            })
             //switch 开关
             $(".bdtd-switch").click(function(event){
            if($(this).hasClass("is-disable")){
              event.stopPropagation();
            }else {
              $(this).toggleClass("is-checked");
              if($(this).hasClass("is-checked")){
                // $(this).children(".bdtd-switch-core").css({'background-color':'rgb(19, 206, 102)','border-color': 'rgb(19, 206, 102)'})
                $(this).children(".bdtd-switch-input").attr("checked",true)
              }else{
                // $(this).children(".bdtd-switch-core").css({'background-color':'rgb(255, 73, 73)','border-color': 'rgb(255, 73, 73)'})
                $(this).children(".bdtd-switch-input").attr("checked",false)
              };
            };
          });
         //进度条
    })