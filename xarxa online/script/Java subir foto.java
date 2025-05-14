import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

@RestController
public class FileUploadController {

    private static final String UPLOAD_DIR = "uploads/";

    @PostMapping("/upload")
    public String uploadFile(@RequestParam("file") MultipartFile file) {
        // Verificar si el archivo está vacío
        if (file.isEmpty()) {
            return "Por favor, selecciona un archivo para subir.";
        }

        try {
            // Crear el directorio de subida si no existe
            File uploadDir = new File(UPLOAD_DIR);
            if (!uploadDir.exists()) {
                uploadDir.mkdirs();
            }

            // Guardar el archivo en el directorio
            String filePath = UPLOAD_DIR + file.getOriginalFilename();
            file.transferTo(new File(filePath));

            return "El archivo ha sido subido exitosamente a: " + filePath;
        } catch (IOException e) {
            e.printStackTrace();
            return "Ocurrió un error al subir el archivo.";
        }
    }
}
