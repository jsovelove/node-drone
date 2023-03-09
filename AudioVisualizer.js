class AudioVisualizer {
    constructor() {
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;
        const scene = new THREE.Scene();
        

        const geometry = new THREE.SphereGeometry( 200, 100, 100 );
        const material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
        const mesh = new THREE.Mesh( geometry, material );
        scene.add( mesh );

        const analyzer = new THREE.AudioAnalyser( audio, 256 );

        // loop through the vertices of the sphere geometry
        for (let i = 0; i < geometry.vertices.length; i++) {

            // get the current vertex
            const vertex = geometry.vertices[i];

            // get the frequency data for the current vertex
            const frequency = analyzer.getFrequencyData()[i];

            // modify the y-position of the vertex based on the frequency data
            vertex.y = frequency;
        }

        geometry.verticesNeedUpdate = true;


    }
  
    render() {
        function animate() {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
          }
          
          animate();
    }
  }
  
  export default AudioVisualizer;
  