import * as T3 from 'three';
import { request } from 'https';

const scene = new T3.Scene();
const camera = new T3.PerspectiveCamera(40, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 8;

const renderer = new T3.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor("#252525");
document.body.appendChild(renderer.domElement);

window.addEventListener("resize", ()=>{
	camera.aspect = window.innerWidth/window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
});

const boxGeometry = new T3.BoxGeometry(0.3, 1, 1);
const material1 = new T3.MeshLambertMaterial({ color: 0xffffaa  });
const cube = new T3.Mesh( boxGeometry, material1);
// scene.add(cube);
cube.position.x = -2;

const boxGeometry2 = new T3.BoxGeometry(0.3, 1, 1);
const material2 = new T3.MeshLambertMaterial({ color: 0xaaffff  });
const cube2 = new T3.Mesh( boxGeometry2, material2);
//scene.add(cube2);
cube2.position.x = -1.6;

const cylinderGeometry = new T3.CylinderGeometry(0.06, 0.06, 4, 50);
const material3 = new T3.MeshLambertMaterial({ color: 0xaaffaa  });
const cylinder1 = new T3.Mesh(cylinderGeometry, material3);
// cylinder1.position.y = 0;
cylinder1.position.x = -0.2;
// cylinder1.rotation.x = 0;
cylinder1.rotation.z = 1.57;
//scene.add(cylinder1);

const itemGroup1 = new T3.Group();
itemGroup1.add(cube);
itemGroup1.add(cube2);
itemGroup1.add(cylinder1);

itemGroup1.rotation.x = 1
itemGroup1.rotation.z = 2

scene.add(itemGroup1);

const light = new T3.PointLight( 0xffffff, 1, 160 );
light.position.set( -30, 20, 60 );
scene.add(light);

const render = () => {
	requestAnimationFrame(render)

	cube.rotation.x -=0.05;
	// cube.rotation.y +=0.005;	
	// cube.rotation.z +=0.05;

	cube2.rotation.x +=0.05;
	// cube2.rotation.y +=0.005;	
	// cube2.rotation.z -=0.005;

	itemGroup1.rotation.x += 0.01;
	itemGroup1.rotation.y += 0.01;
	itemGroup1.rotation.z += 0.01;

	// cylinder1.rotation.x += 0.04;
	// cylinder1.rotation.z += 0.04;

	renderer.render(scene, camera);
}

render();