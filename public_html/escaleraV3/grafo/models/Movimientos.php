
<?php
require_once __DIR__ . '/../config/db.php';


class Movimientos {
    private $conn;

    public function __construct() {
        $database = new Database();
        $this->conn = $database->getConnection();
    }

    public function obtenerMovimientos() {
    $query = "
       SELECT
    n.tipo AS NODO,
    j.nombre AS estudiante,
    j.uid AS id_estudiante,
    
    GROUP_CONCAT(c.Pregunta_1) AS Pregunta_1,
    GROUP_CONCAT(c.Pregunta_2) AS Pregunta_2,
    GROUP_CONCAT(c.Pregunta_3) AS Pregunta_3,
    GROUP_CONCAT(c.Pregunta_4) AS Pregunta_4,
    GROUP_CONCAT(c.Pregunta_5) AS Pregunta_5,
    GROUP_CONCAT(c.Pregunta_6) AS Pregunta_6,
    m.intento,
    m.movimiento,
    m.trayectoria
FROM
    nodos n
LEFT JOIN
    cuestionario c ON n.id_nodo = c.id_nodo
LEFT JOIN
    jugadores j ON c.uid = j.uid
LEFT JOIN
    movimientos m ON m.id = j.uid
WHERE
    n.tipo IN ('jugador')
    AND j.nombre IS NOT NULL
    AND j.uid IS NOT NULL
    AND c.Pregunta_1 IS NOT NULL
    AND c.Pregunta_2 IS NOT NULL
    AND c.Pregunta_3 IS NOT NULL
    AND c.Pregunta_4 IS NOT NULL
    AND c.Pregunta_5 IS NOT NULL
    AND c.Pregunta_6 IS NOT NULL
    AND m.intento IS NOT NULL
    AND m.movimiento IS NOT NULL
    AND m.trayectoria IS NOT NULL
GROUP BY
    m.movimiento,
    m.trayectoria,
    j.uid, 
    n.tipo, 
    j.nombre;

    ";

    $stmt = $this->conn->prepare($query);
    $stmt->execute();

    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}
}
?>
