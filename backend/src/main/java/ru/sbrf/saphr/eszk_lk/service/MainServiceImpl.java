package ru.sbrf.saphr.eszk_lk.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import ru.sbrf.saphr.eszk_lk.dto.MainDTO;
import ru.sbrf.saphr.eszk_lk.model.MainModel;
import ru.sbrf.saphr.eszk_lk.repository.MainRepository;
import ru.sbrf.saphr.eszk_lk.security.MainMapper;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MainServiceImpl implements MainService {
    private final MainRepository repository;

    @Override
    public MainDTO findById(String name) {
        Optional<MainModel> model = repository.findById(name);
        if (model.isPresent()) {
            return MainMapper.toMainDTO(model.get());
        }
        throw new IllegalArgumentException("Model not found");
        // For exceptions better to create factory service
    }
}
