# Docker-Nodejs-Express-MongoDB
<h3>เป็นการเขียน RESTfullAPI แบบพื้นฐาน โดยใช้ Nodejs-Express-MongoDB บน Docker</h3>
<p>วิธีทดสอบ</p>
<p>เปิด Terminal</p>
<p>ทำการ clone และ เข้าไปใน directory ที่เก็บ file docker-compose.yml</p>
<p>ใช้คำสั่ง ตามลำดับ</p>
<p><code style="color:red;">1. docker-compose build<code></p>
<p><code style="color:red;">2. docker-compose up -d</code></p>
<p>กรณีไม่สามารถใช้ได้</p>
<p>ให้ตรวจสอบ services ด้วยคำสั่ง <code style="color:red;">docker ps -a</code></p>
<p><code style="color:red;">สังเกต service NAMES nod-dev5</code></p>
<p><code style="color:red;">ถ้า Exit อยู่ให้ start</code></p>
<p>start service ของ nod-dev5</p>
<p>ด้วยคำสั่ง <code style="color:red;">docker start node-dev5</code></p>
