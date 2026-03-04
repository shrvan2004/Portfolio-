const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
)

const renderer = new THREE.WebGLRenderer({
canvas:document.querySelector("#bg"),
alpha:true
})

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth,window.innerHeight)

camera.position.z = 30

const particlesGeometry = new THREE.BufferGeometry()

const count = 5000

const positions = new Float32Array(count * 3)

for(let i=0;i<count*3;i++){
positions[i]=(Math.random()-0.5)*200
}

particlesGeometry.setAttribute(
'position',
new THREE.BufferAttribute(positions,3)
)

const particlesMaterial = new THREE.PointsMaterial({
size:0.7,
color:0x3b82f6
})

const particles = new THREE.Points(
particlesGeometry,
particlesMaterial
)

scene.add(particles)

function animate(){

requestAnimationFrame(animate)

particles.rotation.y += 0.0007

renderer.render(scene,camera)

}

animate()
