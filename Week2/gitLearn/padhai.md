->What is Git?
• Free and open source version control system

->What is Version Control system?
• A system that keeps track of our files or projects.
• It allows you to revert selected files to a previous state, revert the entire project to a previous state, compare changes over time, see who last modified something so that we can know what might be causing a problem, or what is the issue, who made it, and when with the details.

->stages:
U - Untracked
A - added or staged
C - Commited
M - Modified 

-> git Ignore : add gitignore file and add file name in gitignore so git will igore it.

->git reset: Ye 3 tarah ke hote ha HARD,SOFT,MIXED
git reset --hard HEAD~1 : ek step piche jana

Theory:-jab bhi aap ek folder bnaate hai git ko kuchh nahi pata aapke folder ke baare mein, isliye aap waha pe git ko initialize karte ho, ab git ko permissions mili hai to git aapke folder ko pehchaanta hai, to ab kyuki git kaam kar skta hai is folder per ab ham yaha par untracked, tracked, modified, staged, and saved checkpoints create kar skte hai, git kuchh interesting cheeje kar skta hai jaise ki aap chaahe to kisi bhi moment pai ye check kr skte ho aapki kitni files kis stage par hai

→> initialize karo 
→ check kr skte ho aap konsi file kis stage mein hai →> git status -s
→ check kr skte ho aap kitne saved checkpoints hai -> git log --oneline --graph

. git status bataata hai commit ke pahle and baad ki file stage
. git log bataata hai saare commit histories


-> Branching
.jese muze kisi project ma kam krna ha to ham sidha uske main ma kam nhi krte ha ham branch create kr lete ha agr sab thik hota ha then usko merge kr dete ha main branch se
Terminal:git branch -> check the branch
         git branch branchName -> create branch
         git switch branchName -> switch the branch
         git merge branchName -> merge the other data into main
         git switch -C branchName -> isma create bhi ho jaega or switch bhi

-> Stashing: jab aap kisi branch mein kaam kr rhe ho and aapne kuchh code likha hai and aapne us code ko commit nahi kiya hai, aur aap doosri branch mein jaane ki koshish krte ho to git aapko bolta hai ki bhai saved nahi changes delete o jaayege hum chaahe to un chnages ko delete hone yaa fir un chnages ko draft(stage) kr skte hai, jab bhi draft karege to wo changes naa hi delete honge na hi add hobnge but beech mein kahi dale rahege fir aap us branch mein jab waapas aaye to wo changes waapas se apply kr skte ho 

Terminal: git stash -> draft kind off 
          git apply -> stash wala waspas lane kr lia

Collaboration:
COMMON STEPS
---------------------------------------------------------
1.main banda folder and initial files banaaye : isma file bnaege or github pr jakr repo banege or jo steps ha follow krege
2.ab usse github par daal de
3.collaborators add kare                      : setting ma jakr collaborator add kr lege 
4.saare bande us repo se cloning karein       : clone krege Termianl: git clone link
5.[VERY IMPORTANT] apni branch create karein. : apni branch create krege alag se
6.apna code usi branch mein likhein.         
7.complete hone par commit dein               :terminal:git add.
                                                        git commit -m "message"
                                                        git puch -u origin branchName
8.inform karein teammate ko about the commit
9.merger banda fetch karega and merge karega and re-push. :Terminal:git fetch -> isse jo branch thi vo main bande ke laptop ma show hogi or vo switch kr sekta ha main brach se usma.
                                                                    git merge branchName -> main branch ma jakr isko merge kr dege but abhi tak github pr upload nhi hua ha ye main ma na hi dusre bande pr ha then we use.
                                                                    git push origin main -> isse git hub pr main ma upload ho jaega but abhi tak dusre bande ko main ma nhi dikega uske laptop ma so co krega.
                                                                    git fetch then git merge.
                                                                    git pull -> iska mtlb fetch bhi kro merge bhiu ek sth to ya ye use krlo ya fetch or merge alag alag.
                                                            

                                                                      

                                                                    