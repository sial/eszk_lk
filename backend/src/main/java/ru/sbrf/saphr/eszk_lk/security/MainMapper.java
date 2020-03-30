package ru.sbrf.saphr.eszk_lk.security;

import ru.sbrf.saphr.eszk_lk.dto.MainDTO;
import ru.sbrf.saphr.eszk_lk.model.MainModel;

public class MainMapper {
    public static MainDTO toMainDTO(MainModel mainModel) {
        return new MainDTO()
                .setId(mainModel.getId())
                .setName(mainModel.getName());
    }
}
