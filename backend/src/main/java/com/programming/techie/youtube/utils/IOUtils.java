package com.programming.techie.youtube.utils;

import java.io.File;
import java.nio.file.Paths;

public class IOUtils {

    public static File readFile(String fileName) {
        return Paths.get("user-files/" + fileName).toFile();
    }
}
