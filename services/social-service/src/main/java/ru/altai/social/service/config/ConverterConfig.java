package ru.altai.social.service.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import ru.altai.service.api.converter.DateConverter;
import ru.altai.service.api.converter.LocalDateConverter;
import ru.altai.service.api.converter.LocalDateTimeConverter;

@Configuration
public class ConverterConfig {

    @Bean
    public DateConverter dateConverter() {
        return new DateConverter();
    }

    @Bean
    public LocalDateConverter localDateConverter() {
        return new LocalDateConverter();
    }

    @Bean
    public LocalDateTimeConverter localDateTimeConverter() {
        return new LocalDateTimeConverter();
    }

}
