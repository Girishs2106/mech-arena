// Original aptitude practice based on the supplied trains/relative-speed topics.
(() => {
  const q=[],source='Student Handout V3 (6) · Trains, Boats and Streams, Races (printed p. 62)';
  const add=(text,options,answer,explain,level='Basic')=>q.push({id:`TRAIN-${String(q.length+1).padStart(2,'0')}`,category:'aptitude',topic:'Trains and Relative Speed',role:'General Aptitude',difficulty:level,text,options,answer,explain,source,weightClass:'problem',marks:4,trick:'Convert every speed to m/s when lengths are in metres. Use the full distance the train must clear, then divide by relative speed.'});
  add('A train travels at 60 km/h and passes a pole in 9 seconds. What is the train length?',['120 m','180 m','324 m','150 m'],3,'60×5/18=16.67 m/s. Passing a pole means distance equals train length: L=16.67×9=150 m.');
  add('A 125 m train passes a man walking at 5 km/h in the same direction in 10 seconds. Find the train speed.',['45 km/h','50 km/h','54 km/h','55 km/h'],1,'Relative speed=125/10=12.5 m/s=45 km/h. Same direction: train speed=relative speed+man speed=45+5=50 km/h.','Intermediate');
  add('A 180 m train at 54 km/h passes a 120 m platform. How long does it take?',['12 s','18 s','20 s','24 s'],2,'Total distance=180+120=300 m. Speed=54×5/18=15 m/s. Time=300/15=20 s.');
  add('A 150 m train at 72 km/h passes through a 250 m tunnel. Find the time from entry to clearance.',['15 s','20 s','25 s','30 s'],1,'Distance cleared=150+250=400 m. Speed=72×5/18=20 m/s. Time=400/20=20 s.');
  add('Two trains of lengths 120 m and 180 m travel toward each other at 36 km/h and 54 km/h. How long until they completely cross?',['8 s','10 s','12 s','15 s'],2,'Distance=120+180=300 m. Opposite-direction relative speed=(36+54)×5/18=25 m/s. Time=300/25=12 s.','Intermediate');
  add('Two trains of lengths 125 m and 100 m move in the same direction at 72 km/h and 54 km/h. How long for the faster train to pass the slower one?',['35 s','40 s','45 s','50 s'],2,'Distance=125+100=225 m. Relative speed=(72−54)×5/18=5 m/s. Time=225/5=45 s.','Intermediate');
  add('A 100 m train passes a pole in 8 seconds. What is its speed?',['36 km/h','40 km/h','45 km/h','54 km/h'],2,'Speed=100/8=12.5 m/s. Convert to km/h: 12.5×18/5=45 km/h.');
  add('A train crosses a 144 m bridge in 18 seconds. If the train is 216 m long, find its speed.',['60 km/h','68 km/h','72 km/h','80 km/h'],2,'Distance=216+144=360 m. Speed=360/18=20 m/s=72 km/h.');
  add('Two trains of total length 250 m travel in opposite directions at 60 km/h and 40 km/h. How long do they take to cross?',['7.5 s','9 s','12 s','15 s'],1,'Relative speed=100 km/h=27.78 m/s. Time=250/27.78≈9 s.','Intermediate');
  add('Two trains of lengths 240 m and 160 m move in the same direction at 54 km/h and 36 km/h. How long for the faster train to pass?',['60 s','72 s','80 s','90 s'],2,'Combined length=400 m; relative speed=18 km/h=5 m/s. Time=400/5=80 s.','Intermediate');
  add('A 72 km/h train passes a pole in 10 seconds. What is its length?',['180 m','200 m','220 m','250 m'],1,'72 km/h=20 m/s. Train length=distance=speed×time=20×10=200 m.');
  add('A 150 m train moving at 54 km/h crosses a platform in 20 seconds. What is the platform length?',['100 m','125 m','150 m','180 m'],2,'54 km/h=15 m/s; total distance=15×20=300 m. Platform=300−150=150 m.');
  add('A 100 m train at 72 km/h passes a 50 m platform. What is the crossing time?',['5 s','7.5 s','9 s','12 s'],1,'Distance=100+50=150 m. Speed=20 m/s. Time=150/20=7.5 s.');
  add('A train 225 m long passes a pole in 15 seconds. What is its speed in km/h?',['45 km/h','50 km/h','54 km/h','60 km/h'],2,'Speed=225/15=15 m/s=15×18/5=54 km/h.');
  add('A 200 m train crosses a 300 m tunnel at 25 m/s. How long from entering to completely leaving?',['12 s','16 s','20 s','24 s'],2,'Total distance=200+300=500 m; time=500/25=20 s.');
  add('A train passes a stationary signal in 12 seconds at 15 m/s. What distance does the train clear?',['120 m','150 m','180 m','200 m'],2,'For a point object, the train clears its own length: L=vt=15×12=180 m.');
  add('A 180 m train overtakes a cyclist moving at 9 km/h in the same direction in 12 seconds. What is the train speed?',['54 km/h','60 km/h','63 km/h','66 km/h'],2,'Relative speed=180/12=15 m/s=54 km/h. Add cyclist speed: 54+9=63 km/h.','Intermediate');
  add('A 120 m train moving at 45 km/h passes a person walking toward it at 9 km/h. How long does the train take to pass?',['6 s','8 s','10 s','12 s'],1,'Opposite-direction relative speed=(45+9)×5/18=15 m/s. Time=120/15=8 s.');
  add('A 300 m train travelling at 90 km/h passes a pole. How many seconds does it take?',['10 s','12 s','15 s','18 s'],1,'90 km/h=25 m/s. Time=300/25=12 s.');
  add('When two trains move in opposite directions, which relative-speed rule applies?',['Subtract their speeds','Add their speeds','Use only the faster speed','Average their speeds'],1,'Opposite directions increase separation/closing speed, so relative speed is the sum.','Basic');
  window.MECHPREP_TRAIN_QUESTIONS=q;
})();
