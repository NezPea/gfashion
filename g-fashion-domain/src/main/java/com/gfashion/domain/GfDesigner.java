package com.gfashion.domain;


import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * G-Fashion Designer Domain Entity
 */
@Data
@NoArgsConstructor
public class GfDesigner {
    private Integer id;
    private String name;
    private String photoUrl;
    private String status;
}
