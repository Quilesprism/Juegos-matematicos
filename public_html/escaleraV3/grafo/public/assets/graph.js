document.addEventListener("DOMContentLoaded", () => {
      fetch('../routes/api.php')
        .then(response => response.json())
        .then(rawData => {
          // 1) Convertir strings a números
          const data = rawData.map(p => ({
            ...p,
            movimiento: Number(p.movimiento),
            intento:    Number(p.intento)
          }));

          // 2) Ordenar por movimiento ascendente
          data.sort((a, b) => a.movimiento - b.movimiento);

          // 3) Construcción de nodos y enlaces
          const nodes = [];
          const links = [];
          const nodeCount = {};
          const linkCount = {};

          data.forEach(player => {
            const { trayectoria, movimiento, estudiante: jugador } = player;

            // Contar apariciones de cada nodo para el tamaño
            nodeCount[trayectoria] = (nodeCount[trayectoria] || 0) + 1;
            if (!nodes.find(n => n.id === trayectoria && n.jugador === jugador)) {
              nodes.push({
                id: trayectoria,
                jugador,
                size: nodeCount[trayectoria]
              });
            }

            // Encontrar movimiento anterior del mismo jugador
            const prev = data.find(p =>
              p.estudiante === jugador &&
              p.movimiento === movimiento - 1
            );

            if (prev) {
              const key = `${prev.trayectoria}-${trayectoria}`;
              linkCount[key] = (linkCount[key] || 0) + 1;
              links.push({
                source: prev.trayectoria,
                target: trayectoria,
                jugador,
                width: linkCount[key]
              });
            }
          });

          // 4) Verificar en consola
          console.log('Data transformada:', data);
          console.log('Nodos:', nodes);
          console.log('Enlaces:', links);

          // 5) Dibujar con D3
          const svg = d3.select('#graphCanvas')
            .attr('width', '100%')
            .attr('height', '100%')
            .call(d3.zoom().on('zoom', handleZoom));


          const { width, height } = svg.node().getBoundingClientRect();

          const simulation = d3.forceSimulation(nodes)
            .force('link', d3.forceLink(links).id(d => d.id).distance(100))
            .force('charge', d3.forceManyBody().strength(-300))
            .force('center', d3.forceCenter(width / 2, height / 2))
            .on('tick', ticked);

          const link = svg.append('g')
            .attr('class', 'links')
            .selectAll('line')
            .data(links)
            .enter().append('line')
            .attr('class', 'link')
            .attr('stroke-width', d => d.width);

          const node = svg.append('g')
            .attr('class', 'nodes')
            .selectAll('circle')
            .data(nodes)
            .enter().append('circle')
            .attr('class', 'node')
            .attr('r', d => d.size * 4)
            .call(d3.drag()
              .on('start', dragstarted)
              .on('drag', dragged)
              .on('end', dragended));
   function ticked() {
            node
              .attr('cx', d => d.x = Math.max(10, Math.min(width - 10, d.x)))
              .attr('cy', d => d.y = Math.max(10, Math.min(height - 10, d.y)));

            link
              .attr('x1', d => d.source.x)
              .attr('y1', d => d.source.y)
              .attr('x2', d => d.target.x)
              .attr('y2', d => d.target.y);
          }

          node.on('click', (event, d) => {
            // Mostrar datos del nodo clicado
            const playerData = data.find(p =>
              p.trayectoria === d.id && p.movimiento === d.size - 1
            );
            Swal.fire({
              title: 'Información del Estudiante',
              html: `
                <strong>Estudiante:</strong> ${playerData.estudiante}<br>
                <strong>Intento:</strong> ${playerData.intento}<br>
                <strong>Movimiento:</strong> ${playerData.movimiento}<br>
                <strong>Trayectoria:</strong> ${playerData.trayectoria}<br>
                <strong>Pregunta 1:</strong> ${playerData.Pregunta_1}<br>
                <strong>Pregunta 2:</strong> ${playerData.Pregunta_2}<br>
                <strong>Pregunta 3:</strong> ${playerData.Pregunta_3}<br>
                <strong>Pregunta 4:</strong> ${playerData.Pregunta_4}<br>
                <strong>Pregunta 5:</strong> ${playerData.Pregunta_5}<br>
                <strong>Pregunta 6:</strong> ${playerData.Pregunta_6}<br>
              `,
              showCloseButton: true,
              confirmButtonText: 'Cerrar'
            });
          });

          function handleZoom(event) {
            svg.select('g').attr('transform', event.transform);
          }

          function dragstarted(event, d) {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
          }

          function dragged(event, d) {
            d.fx = event.x;
            d.fy = event.y;
          }

          function dragended(event, d) {
            if (!event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
          }
        })
        .catch(error => {
          console.error("Error al cargar los datos:", error);
        });
    });




































