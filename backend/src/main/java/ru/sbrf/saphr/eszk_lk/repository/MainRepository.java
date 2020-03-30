package ru.sbrf.saphr.eszk_lk.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.sbrf.saphr.eszk_lk.model.MainModel;
import ru.sbrf.saphr.eszk_lk.security.MainMapper;

public interface MainRepository extends JpaRepository<MainModel, String> {
}
