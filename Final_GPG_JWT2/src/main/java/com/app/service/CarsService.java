package com.app.service;

import com.app.dto.CarRequestDTO;
import com.app.dto.CarsDTO;
import com.app.entity.Cars;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.web.multipart.MultipartFile;

public interface CarsService {
    
    void deleteCar(Long carId);
    Cars updateCar(Long carId, CarRequestDTO carRequestDTO);
    Optional<Cars> getCarByBrandAndModelWithSpec(String brandName, String modelName);
    Cars createCar(CarRequestDTO carRequestDTO) throws IOException;
    Cars findCarWithSpecificationById(Long carId);
    Cars findCarById(Long carId);
    List<Cars> getAllCarsWithSpec2();
    List<Cars> getAllCarsWithoutSpec2();
    List<Cars> getCarDetailsByBrandOrModel(String brandName, String modelName);
}
