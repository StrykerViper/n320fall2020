// first babylon circles orbit thing =========================================================
// let canvas = document.getElementById("myCanvas");

// //create 3d engine
// var engine = new BABYLON.Engine(canvas, true);
// var camera, scene;
// var sphere, light;
// var t = 0;

// scene = createScene();

// engine.runRenderLoop(function () {
//   t += 0.01;
//   light.intensity = 1 + Math.sin(t);

//   scene.render();
// });

// function createScene() {
//   //Create scene space
//   var scene = new BABYLON.Scene(engine);
//   //add camera to the scene
//   camera = new BABYLON.ArcRotateCamera(
//     "Camera",
//     Math.PI / 2,
//     Math.PI / 4,
//     4,
//     BABYLON.Vector3.Zero(),
//     scene
//   );
//   camera.attachControl(canvas, true);

//   // //add lights
//   // var light = new BABYLON.DirectionalLight("coolLight", new BABYLON.Vector3(0, -0.3, 1.0), scene);

//   // //add ground
//   // var ground = BABYLON.MeshBuilder.CreateGround("ground", { height: 10, width: 4, subdivisions: 4 }, scene);

//   // Add and manipulate meshes in the scene
//   sphere = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 0.7 }, scene);
//   var lesserSphere = BABYLON.MeshBuilder.CreateSphere(
//     "sphere2",
//     { diameter: 0.2 },
//     scene
//   );
//   lesserSphere.position.x = 2;
//   sphere.addChild(lesserSphere);
//   light = new BABYLON.HemisphericLight(
//     "HemiLight",
//     new BABYLON.Vector3(1, 1, 0),
//     scene
//   );
//   light.diffuse = new BABYLON.Color3(1, 0, 0);
//   light.specular = new BABYLON.Color3(0, 0, 0);
//   light.groundColor = new BABYLON.Color3(0, 1, 0);

//   return scene;
// }

let canvas = document.getElementById("myCanvas");
// first babylon materials amd physics =========================================================

var engine = new BABYLON.Engine(canvas, true);
var camera, scene, mat;
var gravityVector = new BABYLON.Vector3(0, -9.81, 0);
var physicsPlugin = new BABYLON.CannonJSPlugin();

scene = createScene();

engine.runRenderLoop(function () {
  scene.render();
});

//click listener push ball
window.addEventListener("click", function () {
  var pickResult = scene.pick(scene.pointerX, scene.pointerY); 
  console.log(pickResult.pickedMesh.name);
  var pushDir = BABYLON.Ray.CreateNewFromTo(camera.position, camera.getTarget()).direction;
  console.log(pushDir);
  pushDir = pushDir.scale(500);
  pickResult.pickedMesh.physicsImpostor.applyForce(
    pushDir,
    pickResult.pickedMesh.getAbsolutePosition())
})

function createScene() {
  //Create scene space
  var scene = new BABYLON.Scene(engine);
  scene.enablePhysics(gravityVector, physicsPlugin);
  //add camera to the scene
  camera = new BABYLON.ArcRotateCamera(
    "Camera",
    Math.PI / 2,
    Math.PI / 4,
    4,
    BABYLON.Vector3.Zero(),
    scene
  );
  camera.attachControl(canvas, true);

  //sphere
  sphere = BABYLON.MeshBuilder.CreateSphere("bruce", { diameter: 0.3 }, scene);
  sphere.position = new BABYLON.Vector3(0, 1, 0);
  light = new BABYLON.HemisphericLight(
    "HemiLight",
    new BABYLON.Vector3(1, 1, 0),
    scene
  );

  //sphere gravity and bounce
  sphere.physicsImpostor = new BABYLON.PhysicsImpostor(
    sphere,
    BABYLON.PhysicsImpostor.SphereImpostor,
    { mass: 1, restitution: 1 },
    scene
  );
  sphere.physicsImpostor.physicsBody.linearDamping = 0.6;
  sphere.physicsImpostor.physicsBody.angularDamping = 0.5;
  sphere.friction = 2;

  sphere.physicsImpostor.applyForce(
    new BABYLON.Vector3(0,0,2000),
    sphere.getAbsolutePosition()
    );

  //add texture
  mat = new BABYLON.StandardMaterial("base", scene);
  mat.diffuseTexture = new BABYLON.Texture("img/ball.jpg", scene);
  sphere.material = mat;
  mat.diffuseTexture.vScale += 2;
  mat.diffuseTexture.uScale += 2;

  //ground
  var ground = BABYLON.MeshBuilder.CreateGround(
    "ground",
    { height: 10, width: 10, subdivisions: 4 },
    scene
  );
  ground.physicsImpostor = new BABYLON.PhysicsImpostor(
    ground,
    BABYLON.PhysicsImpostor.BoxImpostor,
    { mass: 0, restitution: 0.9 },
    scene
  );
  ground.physicsImpostor.friction = 10;

  

  return scene;
}
