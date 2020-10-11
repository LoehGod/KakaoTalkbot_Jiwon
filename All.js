/*
  지원이의 지원봇
  Main Command
*/

const baseModule = require("baseval.js");
const dateMudule = require("date.js");

const bv = new baseModule();
const date = new dateMudule();

const THIS_FILENAME = "All";
const blacklist = ["키보드팬들모여라"]; 

// Imposter
var countImposter = 0;
const NUMIMPOSTER = 3;

// swap "\n" in the master room
var ison = false;

// Main
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
    try {
        var list = msg.split(" ");
        var cmd = list[0];
        var option = [];
        var nbcmd = msg.replace(/\s/g, "");
        var nbsender = sender.replace(/\s/g, "");

        // options after cmd divided by space
        for (let i = 0; i < list.length; i++) {
            if (i != 0) {
                option[i-1] = list[i];
            }
        }

        /*
          CMD starts
        */
        
        // No Access for blacklisted rooms
        if (blacklist.indexOf(room) == -1) {
           
            /*
              지원봇 소개
            */

            if (["!누구세요", "!명령어"].indexOf(nbcmd) != -1) {
                replier.reply("안녕하세요. 저는 지원이가 만든 지원봇입니다.🎉\n필요한게 있으면 저를 불러보세요.\n\n!아침추천 !점심추천 !저녁추천 !야식추천 !간식추천\n!날씨 -> 지역 이름을 넣으면 해당 지역의 날씨를 보여줍니다\n!코로나 !실검\n!주사위 !동전던지기 !골라줘\n!윷놀이 !러시안룰렛 !임포스터\n!가위 !바위 !보\n!나 오늘 생일이야");
            }

            if (nbcmd == "!지원봇") {
                replier.reply("만든사람: 서지원\n탄생일: 2020년 5월 5일\n사는곳: Galaxy S7\n사용앱: 메신저봇R\n소스코드: https://github.com/ziwoni-zi/KakaoTalkbot_Jiwon" + bv.COMPRESS + "\n\n사실 사람 한명 고용해서 시급 10원 주고 24시간동안 물도 못먹고 잠도 못자게 하면서 답장만 시키고 있음 살려주세요🥕🥕");
            }   //소개끝

            /*
              가위바위보
            */

            // 가위바위보 소개
            if (cmd == "!가위바위보") {
                replier.reply("가위바위보 해요ㅎㅎ\n!가위 !바위 !보\n근데 가끔 제가 변덕이 심할 때가 있으니 양해 부탁드려용");
            }

            // 바위 0, 보 1, 가위 2, 아니면 -1
            // arr의 첫번째 순서 결정
            var meRSP = ["!바위", "!보", "!가위"].indexOf(nbcmd);

            if (meRSP != -1) {
                if (Math.floor(Math.random() * 10) == 5) {
                    replier.reply("엥 너따위의 것과는 게임하기 싫어요 ㅋㅅㅋ");

                    return;
                }
                //0에서 2 랜덤 번호
                let enemy = Math.floor(Math.random() * 3);

                let arr = [
                    ["가위", "바위", "보"],
                    ["바위", "보", "가위"],
                    ["보", "가위", "바위"],
                ]

                switch (enemy) {
                    case 0: // 승리
                        replier.reply(arr[meRSP][enemy] + "!");
                        replier.reply("이기셨네요. 근데 고작 인공지능 따위한테 이겨서 기분이 좋나요?");
                        break;
                    case 1: // 무승부
                        replier.reply(arr[meRSP][enemy] + "!");
                        replier.reply("다행히도 당신은 봇과의 가위바위보에서 비기셨습니다");
                        break;
                    case 2: // 패배
                        replier.reply(arr[meRSP][enemy] + "!");
                        replier.reply("안타깝군요. 당신은 고작 인공지능과의 승부에서 처참히 발리셨습니다!");
                        break;
                    default:
                        break;
                }
            }   // 가위바위보 끝

            if (nbcmd == "!주사위") {
                replier.reply("데구르르르르르..... (저 멀리 굴러간다)... 툭");
                let result = Math.floor(Math.random() * 6) + 1;
                java.lang.Thread.sleep(500);
                replier.reply((Math.floor(Math.random() * 2) ? "어? " : "오호.. ") + result + (([1, 3, 6].indexOf(result) != -1) ? "이" : "가") +" 나왔네요");
            }

            if (nbcmd == "!동전던지기") {
                replier.reply("핑! 휘리리리리리리리릭 챱!");
                java.lang.Thread.sleep(500);
                
                if ((Math.floor(Math.random() * 12)) == 7) {
                    replier.reply((Math.floor(Math.random() * 2) ? "엥" : "헐") + " 동전이 옆면으로 세워졌어요!ㄷㄷ");
                } else {
                    replier.reply((Math.floor(Math.random() * 2) ? "어? " : "오호.. ") + ((Math.floor(Math.random() * 2)) ? "앞면" : "뒷면") + "이 나왔네요");
                }
            }

            if (nbcmd == "!윷놀이") {
                replier.reply("휘릭~ 덜그럭");
                replier.reply("빽도!");
                replier.reply("저런! 뒤에 절벽이 있네요. 나가 떨어지십쇼!");
            }

            if (nbcmd == "!눈물") {
                replier.reply(Math.floor(Math.random() * 2) ? "ㄱㅏ끔은 눈물을 참을 수 없는 ㄴㅐ가 별루ㄷㅏ…\n맘이 ㅇㅏㅍㅏ서….\n소ㄹㅣ치며… 울 수 있ㄷㅏ는건….\n좋은ㄱㅓㅇㅑ…..\nㅁㅓ… 꼭 슬ㅍㅓㅇㅑ만 우는 건 ㅇㅏ니잖ㅇㅏ…^^\n난…눈물ㅇㅣ…. 좋 다….\nㅇㅏ니…\nㅁㅓ리가ㅇㅏ닌….\n맘으로…..우는 ㄴㅐㄱㅏ좋ㄷㅏ….." : "난 우울할 때..빗속에서 『깡』을 춰...\nヽ｀ヽ｀、ヽヽ｀ヽ、ヽ\nヽ｀ヽ｀ヽ、ヽ｀ヽ｀、ヽ\n、ヽ｀、ヽヽ ዽ ヽ｀｀");
            }

            if (nbcmd == "!공부가뭐야") {
                replier.reply("먹는거야?");
            }

            if (nbcmd == "!포항") {
                replier.reply("포항항ꉂꉂ(ᵔᗜᵔ*)ㅋㅋㅋㅋ🛳🌊포항항항🚢🌊포핳핳항🛳🌊🚢🌊⚓️⛴포항항ꉂꉂ(ᵔᗜᵔ*)ㅋㅋㅋㅋ🛳🌊포항항항🚢🌊포항항ꉂꉂ(ᵔᗜᵔ*)⛴🛳🌊⚓️🚢🌊⛴포항항항항⛴🌊 포항항ꉂꉂ(ᵔᗜᵔ*)ㅋㅋㅋㅋ🛳🌊포항항항🚢🌊포핳핳항🛳🌊🚢🌊⚓️⛴포항항ꉂꉂ(ᵔᗜᵔ*)ㅋㅋㅋㅋ🛳🌊포항항항🚢🌊포항항ꉂꉂ(ᵔᗜᵔ*)⛴🛳🌊⚓️🚢🌊⛴포항항항항⛴🌊 포항항ꉂꉂ(ᵔᗜᵔ*)ㅋㅋㅋㅋ🛳🌊포항항항🚢🌊포핳핳항🛳🌊🚢🌊⚓️⛴포항항ꉂꉂ(ᵔᗜᵔ*)ㅋㅋㅋㅋ🛳🌊포항항항🚢🌊포항항ꉂꉂ(ᵔᗜᵔ*)⛴🛳🌊⚓️🚢🌊⛴포항항항항⛴🌊 포항항ꉂꉂ(ᵔᗜᵔ*)ㅋㅋ");
            }

            if (nbcmd == "!뭐야..") {
                replier.reply("웅성👥👤👥뭐야..👤👥👥👤👥👥👤👥 👤👥👥👥👤👥👤👥👤 뭐야..👥👤👥👤👥👥👤👥👤👥👤👥👤👥👤👥👤👥👥 뭐야..👤👥👤 👤👥👤👥👤👤👥👥👤👥👤👥👤👥👥👤👥웅성웅성..👤👥 👤👥👤👥👤👥👤👥👥👤👥 👤👥👤👥👥👤👥👤👥👤👥 👥👤👥👤뭐야..👥👥👤👥👥👤👥 👤👥👥👥👤👥👤👥👤 👥👤웅성..👥👤👥👥👤👥👤👥👤 👥👤👥👤👥👤👥👥 뭐야..👤👥👤 👤👥👤👥👤👤👥👥 👤");
            }

            if (["!환율", "!1달러환율", "!1달러", "!1불환율", "!1불"].indexOf(nbcmd) != -1) {
                let str1 = Utils.getWebText("https://m.search.naver.com/search.naver?query=1달러환율");
                let str2 = str1.split("<span class=\"nb_txt _sub_price\">");
                let str3 = str2[2].split("</span>");

                replier.reply(date.getDate("month_day") + " 기준\n1 미국달러(USD) = " + str3[0].replace(",", "천 ").replace(" 원", "원"));
            }

            if (nbcmd == "!임포스터") {
                let res = Math.floor(Math.random() * 10);
                
                if (res == 3 || res == 8) {      //임포스터 당첨
                    replier.reply(".      　。　　　　•　    　ﾟ　　。\n　　.　　　.　　　  　　.　　　　　。　　   。　.\n 　.　　      。　        ඞ   。　    .    •\n • " + sender + "(은)는 임포스터였습니다. 　 。　.\n　 　　。　　　　　　ﾟ　　　.　　　　　.\n,　　　　.　 .　　       .               。");
                    countImposter++;

                    if (countImposter >= NUMIMPOSTER) {
                        replier.reply("크루원 승리!\nㅤ           / \\\n     /_\\    /__\\    /_\\\n/\\ /     \\ /      \\ /     \\ /\\");
                        countImposter = 0;
                    } else {
                        replier.reply("남은 임포스터는 " + (NUMIMPOSTER - countImposter) + "명입니다.");
                    }

                } else if (res == 2) {  // 니가 임포지
                    replier.reply("니가 임포지");

                } else if (res == 5) {      // 모든 크루원이 죽음
                    replier.reply("안타깝게도 모든 크루원이 뒤지셨습니다.");
                    replier.reply("임포스터 승리!\nㅤ        / \\\n  /_\\    /__\\    /_\\\n/     \\ /      \\ /     \\");
                    countImposter = 0;

                } else {
                    replier.reply(".      　。　　　　•　    　ﾟ　　。\n　　.　　　.　　　  　　.　　　　　。　　   。　.\n 　.　　      。　        ඞ   。　    .    •\n • " + sender + "(은)는 임포스터가 아니였습니다. 　 。　.\n　 　　。　　　　　　ﾟ　　　.　　　　　.\n,　　　　.　 .　　       .               。");
                    replier.reply("남은 임포스터는 " + (NUMIMPOSTER - countImposter) + "명입니다.");
                } 
            }

            //Hidden Command
            if (nbcmd == "!지원이") {
                if (room == "오버액션사랑방") {
                    replier.reply("지원이 아직 스무한짤 술애기에염 뀨><");
                } else {
                    replier.reply("지원이 아직 스무한짤 애기에염 뀨><");
                }
            }

            if (nbcmd == "!엑시트" || msg == "!꺼져") {
                replier.reply("니가 꺼져");
            }

            if (nbcmd == "!바보") {
                replier.reply("힝...");
            }

            if (nbcmd == "!야") {
                replier.reply("외수영장");
            }
        }   // Blacklist ends
        
        // All rooms can access
        if (["!인스타", "!인스타그램", "!지원이인스타"].indexOf(nbcmd) != -1) {
            replier.reply("지원이 인스타 @ziwo.ni_zi");
        }
        
        if (nbcmd == "!나오늘생일이야") {
            replier.reply(sender + "님 생일 축하드립니다!!!!!");
        }

        if (cmd == "!골라줘") {
            let st = Number(option[0]);
            let nd = Number(option[1]);

            if (option[0] == "" || option[0] == null) {
                replier.reply("!골라줘 뒤에 숫자를 두개 입력하면 그 두 숫자 사이 중에 하나를 골라드립니다. 하나만 입력하시면 1부터 그 숫자까지 중에 하나를 골라줘용!");
            } else if (String(st) == "NaN"){
                replier.reply("숫자 두개나 하나를 띄어쓰기 지켜서 입력해주세용");
            } else {
                let count;

                if (String(nd) == "NaN") {
                    count = st;
                    st = 1;

                    if (count <= 1) {
                        replier.reply("1보다 큰 숫자를 입력해주세용");
                        return;
                    }

                } else {
                    count = nd - st + 1;

                    if (count <= 1) {
                        replier.reply("앞에보다 뒤에 더 큰 숫자를 입력해주세용");
                        return;
                    }
                }

                replier.reply("흠... " + sender + "님 저는 " + (st + Math.floor(Math.random() * count)) + "이(가) 좋은거 같아용!");
            }
        }
        
        //MasterRoom Only
        if (room == bv.MASTER_ROOM) {
            if (ison)
                replier.reply(msg.replace(/\n/g, "\\n"));
              
            if (msg == "/on")
                ison = true;
            else if (msg == "/off")
                ison = false;
        }
    } catch (e) {
        Log.debug(e + ", line: " + e.lineNumber + " from " + room);
    }
}