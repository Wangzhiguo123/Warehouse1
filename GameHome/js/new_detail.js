$(function () {

    // 获取跳转参数
    var searchUrl = window.location.href;
    var searchData = searchUrl.split("=");
    var searchText = decodeURI(searchData[1]);
    init(searchText);

});
function init(type) {
    switch(type)
    {
        case '0':
        {
            var str='';
            str +=
        '<div id="show_more_box" class="list01">'+
            '<h3>Update</h3>'+
            '<div class="show_more_tit_pic">'+
            '<img src="images/new/new_bj01.jpg" alt="">'+
            '<h1>March 29 Update</h1>'+
        '<div class="show_more_date">2018-3-29</div>'+
            '</div>'+
            '<div class="show_more_content">'+
            '<div class="show_more_list">'+
            '<p>1. Blacklist Function</p>'+
        '<p class="ts_p">Added a blacklist function. Blocking other players will stop you receiving their global chat and private messages.</p>'+
        '<div class="list_img">'+
            '<img src="images/new/new_list_0_01.jpg" alt="">'+
            '</div>'+
            '</div>'+
            '<div class="show_more_list">'+
            '<p>2. Universe Map Improvements</p>'+
        '<p class="ts_p">You can now search for a specific galaxy (server) on the Universe Map by name or number.</p>'+
        '<div class="list_img">'+
            '<img src="images/new/new_list_0_02.jpg" alt="">'+
            '</div>'+
            '</div>'+
            '<div class="show_more_list">'+
            '<p>3. Kraken Balance Changes</p>'+
        '<p class="ts_p">You can now search for a specific galaxy (server) on the Universe Map by name or number.</p>'+
        '<p class="ts_p">a. Each alliance can now only hold one portal. In addition, after holding one portal, an alliance\'s fleets will take an extra 30% damage in other portal (connecting) systems.</p>'+
        '<p class="ts_p">b. While the event is open, regular elite pirates spawning across the galaxy will become Kraken fleets. When these are destroyed, they have a chance to drop limited Kraken blueprints, only allowing a set number of ships to be built.</p>'+
        '<p class="ts_p">c. When portals or the arc are captured, Kraken fleets will occasionally spawn within the Kraken Fracture too. These fleets also have a chance to drop a limited amount of Kraken build chances.</p>'+
        '</div>'+
        '<div class="show_more_list">'+
            '<p>4. Scanning Changes</p>'+
        '<p class="ts_p">Scan events adjusted.</p>'+
        '<div class="list_img">'+
            '<img src="images/new/new_list_0_03.jpg" alt="">'+
            '</div>'+
            '</div>'+
            '<div class="show_more_list">'+
            '<p>5. Other Changes</p>'+
        '<p class="ts_p">a. Improvements to some visual effects</p>'+
        '<p class="ts_p">b. Various bug fixes</p>'+
        '</div>'+
        '</div>'+
        '</div>';
            $('#content_list_box').html(str);
        }
            break;
        case '1':
        {
            {
                var str='';
                str +=
            '<div id="show_more_box" class="list02">'+
                '<h3>Update</h3>'+
                '<div class="show_more_tit_pic">'+
                '<img src="images/new/new_bj02.jpg" alt="">'+
                '<h1>March 08 Update</h1>'+
            '<div class="show_more_date">2018-3-08</div>'+
                '</div>'+
                '<div class="show_more_content">'+
                '<div class="show_more_list">'+
                '<p>1. Alliances</p>'+
            '<p class="ts_p">a.Star System Bonuses</p>'+
            '<p class="ts_p">Systems under alliance control will provide various bonuses to all members of the alliance.</p>'+
            '<p class="ts_p">b.Legion Rework</p>'+
            '<p class="ts_p">Legions have been temporarily disabled while they are being completely reworked for an update soon. Star system bonuses have been added to make up for any losses from this.</p>'+
            '<p class="ts_p">c.Alliance Mail</p>'+
            '<p class="ts_p">From the main page of the alliance screen, alliance leaders can now send mail to all alliance members at once.</p>'+
            '</div>'+
            '<div class="show_more_list">'+
                '<p>2. Galaxy War</p>'+
            '<p class="ts_p">The cross-galaxy battle event, Galaxy War, will open soon for a few galaxies as we test its effectiveness and work with players’ feedback to improve the event. [Hyperes (135), Nemesis (136) , Icarius (137), Centauri (138)] After this period, it will open across more galaxies. When Galaxy War opens on a weekend, it will replace the Kraken Fracture or Pirate Invasion event for that week.</p>'+
            '</div>'+
            '<div class="show_more_list">'+
                '<p>3. Pirate Invasion</p>'+
            '<p class="ts_p">a.Fixed a bug where alliance buildings built underneath where the pirates territory appeared weren’t being removed.</p>'+
            '<p class="ts_p">b.Pirate territory appearing will destroy any defences built under it. As a result of this, there is a risk of losing defences if you build them in alliance border systems.</p>'+
            '</div>'+
            '<div class="show_more_list">'+
                '<p>4. Fleet and Battle Improvements</p>'+
            '<p class="ts_p">a.Added a Group Move function that can be used to move multiple fleets with one click.</p>'+
            '<p class="ts_p">b.Max amount of resources contained in a single piece of debris increased.</p>'+
            '<div class="list_img">'+
                '<img src="images/new/new_list_1_01.jpg" alt="">'+
                '</div>'+
                '</div>'+
                '<div class="show_more_list">'+
                '<p>5. Other Changes</p>'+
            '<p class="ts_p">a.Increased the spawn rate of low-mid strength pirates.</p>'+
            '<p class="ts_p">b.Added Spanish, Portuguese and Italian language support.</p>'+
            '<p class="ts_p">c.Improved various UIs.</p>'+
            '<p class="ts_p">d.Various bug fixes.</p>'+

            '</div>'+
            '</div>'+
            '</div>';
                $('#content_list_box').html(str);
            }
        }
            break;
        case '2':
        {
            {
                var str='';
                str +=
                    '<div id="show_more_box" class="list02">'+
                    '<h3>Update</h3>'+
                    '<div class="show_more_tit_pic">'+
                    '<img src="images/new/new_bj02.jpg" alt="">'+
                    '<h1>May 07 Update</h1>'+
                    '<div class="show_more_date">2018-5-07</div>'+
                    '</div>'+
                    '<div class="show_more_content">'+
                    '<div class="show_more_list">'+
                    '<p>1. Alliances</p>'+
                    '<div class="list_img">'+
                    '<img src="images/new/new_list_2_02.png" alt="">'+
                    '</div>'+
                    '<p class="ts_p">a. Legion Missions</p>'+
                    '<p class="ts_p">Legions can now be used to launch special multiplayer legion missions. Each player can participate in missions 3 times per day.</p>'+
                    '<p class="ts_p">Missions can be started when the required amount of players have joined the mission group.</p>'+
                    '<p class="ts_p">Completing missions rewards alliance credits, with some missions also providing extra rewards! These will continue to be adjusted and added to going forwards.</p>'+
                    '<p class="ts_p">b. Custom Legions</p>'+
                    '<p class="ts_p">Rank 3 and 4 alliance members can create custom legions, similar to the old style of legions.</p>'+
                    '<p class="ts_p">The legion creator can share bookmarks that will display on all legion members\' system and galaxy maps.</p>'+
                    '<p class="ts_p">c. Rejoining Alliances</p>'+
                    '<p class="ts_p">After leaving an alliance, players won\'t be allowed to rejoin the same alliance within 24 hours.</p>'+
                    '<p class="ts_p">Each day a player is allowed to join up 5 alliances. After this, you will not able to join another alliance until the following day.</p>'+
                    '</div>'+
                    '<div class="show_more_list">'+
                    '<p>2. Safe Zone Improvements</p>'+
                    '<p class="ts_p">Players within the safe zone are now limited to attacking players outside the safe zone 3 times, at which point they will be automatically jumped to outside of the safe zone.</p>'+
                    '</div>'+
                    '<div class="show_more_list">'+
                    '<p>3. Space Station Recovery Missions</p>'+
                    '<p class="ts_p">New series of recovery missions added. When attacked, sometimes Space Stations will become damaged. If damaged, certain aspects of the station will not function properly. Complete recovery missions to restore the station to normal status and at the same time earn large rewards.</p>'+
                    '</div>'+
                    '<div class="show_more_list">'+
                    '<p>4. Void Research</p>'+
                    '<div class="list_img">'+
                    '<img src="images/new/new_list_2_01.png" alt="">'+
                    '</div>'+
                    '<p class="ts_p">Added new "void research" projects. These rare projects must be unlocked by collecting research fragments to piece together information about these advanced technologies. Once unlocked, your science team can begin work on researching them. Fragments may be available through scan storylines and events.</p>'+
                    '</div>'+
                    '<div class="show_more_list">'+
                    '<p>5. Other changes</p>'+
                    '<p class="ts_p">a. Fixed admiral shield recovery ability bug. Changed from "restores x% of shields" to "restores shields to x%".</p>'+
                    '<p class="ts_p">b. Battle performance improvements.</p>'+
                    '<p class="ts_p">c. Miscellaneous bug and interface improvements.</p>'+
                    '<p class="ts_p">d. Adjusted fleet jump speed calculation. Bigger ships will now be able to jump faster than smaller ships.</p>'+

                    '</div>'+
                    '</div>'+
                    '</div>';
                $('#content_list_box').html(str);
            }
        }
            break;
        // 新增（wzg）
        case '3':
        {
            {
                var str='';
                str +=
                    '<div id="show_more_box" class="list02">'+
                    '<h3>Update</h3>'+
                    '<div class="show_more_tit_pic">'+
                    '<img src="images/new/new_bj02.jpg" alt="">'+
                    '<h1>May 06 Update</h1>'+
                    '<div class="show_more_date">2018-5-07</div>'+
                    '</div>'+
                    '<div class="show_more_content">'+
                    '<div class="show_more_list">'+
                    '<p>1. Alliances</p>'+
                    '<div class="list_img">'+
                    '<img src="images/new/new_list_2_02.png" alt="">'+
                    '</div>'+
                    '<p class="ts_p">a. Legion Missions</p>'+
                    '<p class="ts_p">Legions can now be used to launch special multiplayer legion missions. Each player can participate in missions 3 times per day.</p>'+
                    '<p class="ts_p">Missions can be started when the required amount of players have joined the mission group.</p>'+
                    '<p class="ts_p">Completing missions rewards alliance credits, with some missions also providing extra rewards! These will continue to be adjusted and added to going forwards.</p>'+
                    '<p class="ts_p">b. Custom Legions</p>'+
                    '<p class="ts_p">Rank 3 and 4 alliance members can create custom legions, similar to the old style of legions.</p>'+
                    '<p class="ts_p">The legion creator can share bookmarks that will display on all legion members\' system and galaxy maps.</p>'+
                    '<p class="ts_p">c. Rejoining Alliances</p>'+
                    '<p class="ts_p">After leaving an alliance, players won\'t be allowed to rejoin the same alliance within 24 hours.</p>'+
                    '<p class="ts_p">Each day a player is allowed to join up 5 alliances. After this, you will not able to join another alliance until the following day.</p>'+
                    '</div>'+
                    '<div class="show_more_list">'+
                    '<p>2. Safe Zone Improvements</p>'+
                    '<p class="ts_p">Players within the safe zone are now limited to attacking players outside the safe zone 3 times, at which point they will be automatically jumped to outside of the safe zone.</p>'+
                    '</div>'+
                    '<div class="show_more_list">'+
                    '<p>3. Space Station Recovery Missions</p>'+
                    '<p class="ts_p">New series of recovery missions added. When attacked, sometimes Space Stations will become damaged. If damaged, certain aspects of the station will not function properly. Complete recovery missions to restore the station to normal status and at the same time earn large rewards.</p>'+
                    '</div>'+
                    '<div class="show_more_list">'+
                    '<p>4. Void Research</p>'+
                    '<div class="list_img">'+
                    '<img src="images/new/new_list_2_01.png" alt="">'+
                    '</div>'+
                    '<p class="ts_p">Added new "void research" projects. These rare projects must be unlocked by collecting research fragments to piece together information about these advanced technologies. Once unlocked, your science team can begin work on researching them. Fragments may be available through scan storylines and events.</p>'+
                    '</div>'+
                    '<div class="show_more_list">'+
                    '<p>5. Other changes</p>'+
                    '<p class="ts_p">a. Fixed admiral shield recovery ability bug. Changed from "restores x% of shields" to "restores shields to x%".</p>'+
                    '<p class="ts_p">b. Battle performance improvements.</p>'+
                    '<p class="ts_p">c. Miscellaneous bug and interface improvements.</p>'+
                    '<p class="ts_p">d. Adjusted fleet jump speed calculation. Bigger ships will now be able to jump faster than smaller ships.</p>'+

                    '</div>'+
                    '</div>'+
                    '</div>';
                $('#content_list_box').html(str);
            }
        }
        default:
        {

        }
    }
}