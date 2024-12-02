from flask import Flask, request, jsonify
from datetime import date
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Almacenamiento en memoria para las tareas (inicializadas con dos tareas)
tasks = {
    1: {"id": 1, "title": "Tarea de ejemplo 1", "detail": "Detalle de tarea 1", "responsable": "John Smith", "completed": False, "fechaInicial": "2024-11-01", "fechaFinal": "2024-11-10"},
    2: {"id": 2, "title": "Tarea de ejemplo 2", "detail": "Detalle de tarea 1", "responsable": "Julia Soto", "completed": True, "fechaInicial": "2024-11-05", "fechaFinal": "2024-11-15"}
}

# Función para calcular el próximo ID dinámicamente
def get_next_id():
    if tasks:
        return max(tasks.keys()) + 1
    return 1

# Ruta para obtener todas las tareas
@app.route('/tasks', methods=['GET'])
def get_tasks():
    return jsonify(list(tasks.values())), 200

# Ruta para obtener una tarea específica por ID
@app.route('/tasks/<int:task_id>', methods=['GET'])
def get_task(task_id):
    task = tasks.get(task_id)
    if task is None:
        return jsonify({"error": "Tarea no encontrada"}), 404
    return jsonify(task), 200

# Ruta para crear una nueva tarea
@app.route('/tasks', methods=['POST'])
def create_task():
    data = request.json
    if not data or 'title' not in data:
        return jsonify({"error": "input inválido"}), 400
    
    # Validar y convertir las fechas
    fecha_inicial = data.get('fechaInicial')
    fecha_final = data.get('fechaFinal')
    
    if fecha_inicial and fecha_final:
        fecha_inicial = date.fromisoformat(fecha_inicial)
        fecha_final = date.fromisoformat(fecha_final)
            
    new_task = {
        "id": get_next_id(),
        "title": data['title'],
        "detail": data['detail'],
        "responsable": data['responsable'],
        "fechaInicial": fecha_inicial.isoformat() if fecha_inicial else None,
        "fechaFinal": fecha_final.isoformat() if fecha_final else None,
        "completed": data.get('completed', False)
    }
    tasks[new_task['id']] = new_task
    return jsonify(new_task), 201

# Ruta para actualizar una tarea existente
@app.route('/tasks/<int:task_id>', methods=['PUT'])
def update_task(task_id):
    data = request.json
    task = tasks.get(task_id)
    if task is None:
        return jsonify({"error": "Tarea no encontrada"}), 404
    
    if 'title' in data:
        task['title'] = data['title']
    if 'detail' in data:
        task['detail'] = data['detail'] 
    if 'responsable' in data:
        task['responsable'] = data['responsable']          
    if 'completed' in data:
        task['completed'] = data['completed']
    
    if 'fechaInicial' in data:
        try:
            task['fechaInicial'] = date.fromisoformat(data['fechaInicial']).isoformat()
        except ValueError:
            return jsonify({"error": "Formato de fecha inválido. Debe ser YYYY-MM-DD"}), 400
    if 'fechaFinal' in data:
        try:
            task['fechaFinal'] = date.fromisoformat(data['fechaFinal']).isoformat()
        except ValueError:
            return jsonify({"error": "Formato de fecha inválido. Debe ser YYYY-MM-DD"}), 400
    
    return jsonify(task), 200

# Ruta para eliminar una tarea
@app.route('/tasks/<int:task_id>', methods=['DELETE'])
def delete_task(task_id):
    if task_id not in tasks:
        return jsonify({"error": "Tarea no encontrada"}), 404
    del tasks[task_id]
    return jsonify({"message": "Task deleted"}), 200

if __name__ == '__main__':
    app.run(debug=True)