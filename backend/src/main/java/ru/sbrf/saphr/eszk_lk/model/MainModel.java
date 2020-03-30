package ru.sbrf.saphr.eszk_lk.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;

@Getter
@Setter
@NoArgsConstructor
public class MainModel {
    private String id;
    private String name;
    private String token;
}
