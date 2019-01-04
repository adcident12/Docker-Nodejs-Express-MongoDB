# Docker-Nodejs-Express-MongoDB
<h3>เป็นการเขียน RESTfulAPI แบบพื้นฐาน โดยใช้ Nodejs-Express-MongoDB บน Docker</h3>
<p>วิธีทดสอบ</p>
<p>เปิด Terminal</p>
<p>ทำการ clone และ เข้าไปใน directory ที่เก็บ file docker-compose.yml</p>
<p>ใช้คำสั่ง ตามลำดับ</p>
<p><code>1. docker-compose build</code></p>
<p><code>2. docker-compose up -d</code></p>
<p>กรณีไม่สามารถใช้ได้</p>
<p>ให้ตรวจสอบ services ด้วยคำสั่ง <code>docker ps -a</code></p>
<p><code>สังเกต service NAMES nod-dev5</code></p>
<p><code>ถ้า Exit อยู่ให้ start</code></p>
<p>start service ของ nod-dev5</p>
<p>ด้วยคำสั่ง <code>docker start node-dev5</code></p>
<p>ขั้นตอนการทดสอบ API</p>
<p>ใช้ Postman</p>
<p><code>rount:get / คือ insert ข้อมูลลงฐานข้อมูลโดยถ้าในฐานข้อมูลว่าง</code></p>
<p><img width="1013" alt="screen shot 2562-01-04 at 15 49 26" src="https://user-images.githubusercontent.com/21277486/50680747-69768280-103b-11e9-8c98-482ae7571511.png"></p>
<p><code>rount:get /getall คือ select ข้อมูลทั้งหมดมาแสดง</code></p>
<p><img width="1015" alt="screen shot 2562-01-04 at 16 13 33" src="https://user-images.githubusercontent.com/21277486/50680833-b8241c80-103b-11e9-8e57-483fa7427a73.png"></p>
<p><code>rount:get /getbyid/:id คือ select by id ข้อมูลของไอดีนั้นมาแสดง</code></p>
<p><code>rount:post /add คือ insert ข้อมูลลงฐานข้อมูล</code></p>
<p><code>rount:put /update/:id คือ update ข้อมูลของไอดีนั้นลงฐานข้อมูล</code></p>
<p><code>rount:delete /delete/:id คือ delete ข้อมูลของไอดีนั้นจากฐานข้อมูล</code></p>
<p>ศึกษาเพิ่มเติมได้จาก</p>
<p>Credit.....จาก<p>
<p><a href="https://devahoy.com/posts/restful-api-with-node-js-and-mongodb/" target="_blank">ทำ RESTFul API ด้วย Node.js, Express และ MongoDB</a><p>
<p><a href="https://devahoy.com/posts/getting-started-with-mongodb/" target="_blank">MongoDB คืออะไร? + สอนวิธีใช้งานเบื้องต้น</a><p>
<p><a href="http://www.artit-k.com/node-js-docker-container-from-zero-hero/" target="_blank">เขียน Node.js รันใน Docker Container ตั้งแต่ Zero to Hero</a><p>
<p><a href="https://docs.mongodb.com/manual/reference/method/db.collection.update/" target="_blank">MongoDB Manual</a><p>
